'use client';

import React from 'react';
import styles from './HeroFallback.module.css';

export const HeroFallback: React.FC = () => {
  return (
    <div className={styles.fallbackWrapper} aria-label="Visualisation 3D en cours de chargement">
      {/* Image de composition légère pendant l'initialisation du Canvas WebGL */}
      <img
        src="/assets/3d_character_desk.png"
        alt="Dravon Systems - Écosystème 3D"
        className={styles.fallbackImage}
      />
      <div className={styles.loaderOverlay}>
        <span className={styles.spinner} />
        <span>Chargement de la scène 3D...</span>
      </div>
    </div>
  );
};
