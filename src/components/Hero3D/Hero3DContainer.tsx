'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { HeroFallback } from './HeroFallback';

// Chargement client-side dynamique sans SSR pour WebGL / Three.js
const DynamicHeroScene = dynamic(
  () => import('./HeroScene').then((mod) => mod.HeroScene),
  {
    ssr: false,
    loading: () => <HeroFallback />,
  }
);

export const Hero3DContainer: React.FC = () => {
  return <DynamicHeroScene />;
};
