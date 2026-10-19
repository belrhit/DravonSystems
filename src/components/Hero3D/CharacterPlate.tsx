'use client';

import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

interface CharacterPlateProps {
  reducedMotion?: boolean;
}

export const CharacterPlate: React.FC<CharacterPlateProps> = ({ reducedMotion = false }) => {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useTexture('/assets/3d_character_desk.png');

  // Configuration du filtrage de texture pour un piqué parfait
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;

  useFrame((state) => {
    if (reducedMotion || !groupRef.current) return;
    const t = state.clock.getElapsedTime();
    // Micro-mouvement de respiration organique très subtil
    groupRef.current.position.y = -0.65 + Math.sin(t * 1.2) * 0.015;
  });

  return (
    <group ref={groupRef} position={[0, -0.65, 0]}>
      {/* Plan du personnage et de son bureau */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[5.8, 3.2]} />
        <meshBasicMaterial
          map={texture}
          transparent
          alphaTest={0.01}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};
