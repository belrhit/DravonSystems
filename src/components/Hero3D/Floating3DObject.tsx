'use client';

import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

interface Floating3DObjectProps {
  texturePath: string;
  basePosition: [number, number, number];
  scale?: number;
  width?: number;
  height?: number;
  floatSpeed?: number;
  floatPhase?: number;
  floatAmplitude?: number;
  rotSpeedX?: number;
  rotSpeedY?: number;
  maxTilt?: number;
  reducedMotion?: boolean;
}

export const Floating3DObject: React.FC<Floating3DObjectProps> = ({
  texturePath,
  basePosition,
  scale = 1,
  width = 1.3,
  height = 1.3,
  floatSpeed = 1.3,
  floatPhase = 0,
  floatAmplitude = 0.09,
  rotSpeedX = 0.5,
  rotSpeedY = 0.6,
  maxTilt = 0.08,
  reducedMotion = false,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const texture = useTexture(texturePath);

  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;

  useFrame((state) => {
    if (!groupRef.current) return;

    if (reducedMotion) {
      groupRef.current.position.set(...basePosition);
      groupRef.current.rotation.set(0, 0, 0);
      return;
    }

    const t = state.clock.getElapsedTime();

    // 1. Mouvement de flottement vertical indépendant avec déphasage
    const currentY =
      basePosition[1] +
      Math.sin(t * floatSpeed + floatPhase) * floatAmplitude;

    // 2. Inclinaisons 3D subtiles (pitch & roll organiques)
    const currentRotX = Math.sin(t * rotSpeedX + floatPhase) * maxTilt;
    const currentRotY = Math.cos(t * rotSpeedY + floatPhase) * (maxTilt * 1.3);
    const currentRotZ = Math.sin(t * (floatSpeed * 0.5) + floatPhase) * (maxTilt * 0.4);

    groupRef.current.position.set(basePosition[0], currentY, basePosition[2]);
    groupRef.current.rotation.set(currentRotX, currentRotY, currentRotZ);
  });

  return (
    <group
      ref={groupRef}
      position={basePosition}
      scale={[scale, scale, scale]}
    >
      {/* Objet 3D pur, sans arrière-plan, sans halo ni altération au survol */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial
          map={texture}
          transparent
          alphaTest={0.01}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};
