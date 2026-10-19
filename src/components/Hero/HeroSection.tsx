'use client';

import React from 'react';
import { Hero3DContainer } from '@/components/Hero3D/Hero3DContainer';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className={styles.heroSection} aria-label="Section Héro">
      <div className={styles.heroContainer}>
        {/* En-tête typographique du Hero (H1 principal + sous-titre) */}
        <header className={styles.heroHeader}>
          <h1
            className={styles.heroTitle}
            title={t('hero.seoAlt')}
            aria-label={`${t('hero.title')} - ${t('hero.seoAlt')}`}
          >
            {t('hero.title')}
          </h1>
          <p className={styles.heroSubtitle}>
            {t('hero.subtitle')}
          </p>
        </header>

        {/* Scène 3D animée avec Three.js / R3F (remplace l'ancien visuel 2D) */}
        <Hero3DContainer />

        {/* Sélecteur de langue flottant */}
        <LanguageSelector />
      </div>
    </section>
  );
};
