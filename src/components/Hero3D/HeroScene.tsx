'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { CharacterPlate } from './CharacterPlate';
import { Floating3DObject } from './Floating3DObject';
import { ConnectingLines } from './ConnectingLines';

// Suppression de l'avertissement temporaire upstream de R3F lié au constructeur THREE.Clock
if (typeof window !== 'undefined') {
  const origWarn = console.warn;
  console.warn = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes('THREE.Clock: This module has been deprecated')) {
      return;
    }
    origWarn(...args);
  };
}

export const HeroScene: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Définition des coordonnées précises en arc/orbite autour du personnage central
  const objectsConfig: Array<{
    name: string;
    texturePath: string;
    pos: [number, number, number];
    scale: number;
    width: number;
    height: number;
    speed: number;
    phase: number;
    rotSpeedX: number;
    rotSpeedY: number;
    maxTilt: number;
  }> = useMemo(
    () => [
      {
        name: 'server_rack',
        texturePath: '/assets/3d_server_rack.png',
        pos: [-3.15, -0.85, 0.4],
        scale: 1.0,
        width: 1.35,
        height: 1.38,
        speed: 1.2,
        phase: 0.0,
        rotSpeedX: 0.4,
        rotSpeedY: 0.5,
        maxTilt: 0.06,
      },
      {
        name: 'data_laptop',
        texturePath: '/assets/3d_data_laptop.png',
        pos: [-3.45, 0.35, 0.25],
        scale: 1.05,
        width: 1.6,
        height: 1.27,
        speed: 1.45,
        phase: 1.3,
        rotSpeedX: 0.5,
        rotSpeedY: 0.7,
        maxTilt: 0.08,
      },
      {
        name: 'factory',
        texturePath: '/assets/3d_factory.png',
        pos: [-2.9, 1.55, -0.1],
        scale: 1.0,
        width: 1.5,
        height: 1.45,
        speed: 1.15,
        phase: 2.5,
        rotSpeedX: 0.35,
        rotSpeedY: 0.45,
        maxTilt: 0.05,
      },
      {
        name: 'folders_stack',
        texturePath: '/assets/3d_folders_stack.png',
        pos: [-1.6, 2.35, 0.15],
        scale: 1.05,
        width: 1.6,
        height: 1.2,
        speed: 1.35,
        phase: 3.8,
        rotSpeedX: 0.5,
        rotSpeedY: 0.6,
        maxTilt: 0.07,
      },
      {
        name: 'calendar_clock',
        texturePath: '/assets/3d_calendar_clock.png',
        pos: [0.65, 2.35, 0.15],
        scale: 1.05,
        width: 1.48,
        height: 1.25,
        speed: 1.25,
        phase: 5.0,
        rotSpeedX: 0.45,
        rotSpeedY: 0.55,
        maxTilt: 0.06,
      },
      {
        name: 'headphones',
        texturePath: '/assets/3d_headphones.png',
        pos: [2.15, 1.65, 0.25],
        scale: 1.0,
        width: 1.15,
        height: 1.42,
        speed: 1.55,
        phase: 0.9,
        rotSpeedX: 0.6,
        rotSpeedY: 0.75,
        maxTilt: 0.09,
      },
      {
        name: 'security_camera',
        texturePath: '/assets/3d_security_camera.png',
        pos: [3.25, 1.15, 0.3],
        scale: 1.05,
        width: 1.45,
        height: 1.28,
        speed: 1.2,
        phase: 2.1,
        rotSpeedX: 0.4,
        rotSpeedY: 0.5,
        maxTilt: 0.06,
      },
      {
        name: 'shipping_boxes',
        texturePath: '/assets/3d_shipping_boxes.png',
        pos: [3.05, -0.05, 0.2],
        scale: 1.05,
        width: 1.38,
        height: 1.22,
        speed: 1.4,
        phase: 3.4,
        rotSpeedX: 0.45,
        rotSpeedY: 0.55,
        maxTilt: 0.07,
      },
      {
        name: 'forklift',
        texturePath: '/assets/3d_forklift.png',
        pos: [3.35, -1.05, 0.4],
        scale: 1.05,
        width: 1.58,
        height: 1.14,
        speed: 1.1,
        phase: 4.6,
        rotSpeedX: 0.35,
        rotSpeedY: 0.45,
        maxTilt: 0.05,
      },
    ],
    []
  );

  // Points de la courbe d'orbite reliant les objets
  const curvePoints: [number, number, number][] = useMemo(
    () => objectsConfig.map((obj) => obj.pos),
    [objectsConfig]
  );

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1100px',
        height: '560px',
        margin: '10px auto 0',
      }}
      aria-label="Scène 3D animée des défis opérationnels résolus par Dravon Systems"
    >
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
        }}
        camera={{ position: [0, 0.25, 7.8], fov: 42 }}
        dpr={[1, 2]}
        style={{
          background: 'transparent',
          pointerEvents: 'auto',
        }}
      >
        {/* Éclairage soigné B2B : Lumière clé chaude + lumière de remplissage bleue */}
        <ambientLight intensity={1.15} />
        <directionalLight position={[4, 7, 5]} intensity={1.4} color="#ffffff" />
        <directionalLight position={[-4, 4, 3]} intensity={0.65} color="#dbeafe" />
        <pointLight position={[0, 2, 3]} intensity={0.5} color="#60a5fa" />

        {/* Lignes de connexion bleues subtiles formant l'orbite */}
        <ConnectingLines points={curvePoints} />

        {/* Personnage central au bureau */}
        <CharacterPlate reducedMotion={reducedMotion} />

        {/* Objets 3D flottants indépendants avec physique d'animation continue */}
        {objectsConfig.map((obj) => (
          <Floating3DObject
            key={obj.name}
            texturePath={obj.texturePath}
            basePosition={obj.pos}
            scale={obj.scale}
            width={obj.width}
            height={obj.height}
            floatSpeed={obj.speed}
            floatPhase={obj.phase}
            rotSpeedX={obj.rotSpeedX}
            rotSpeedY={obj.rotSpeedY}
            maxTilt={obj.maxTilt}
            reducedMotion={reducedMotion}
          />
        ))}
      </Canvas>
    </div>
  );
};
