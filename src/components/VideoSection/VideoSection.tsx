'use client';

import React, { useState } from 'react';
import {
  makeStyles,
  tokens,
  mergeClasses,
} from '@fluentui/react-components';
import { useLanguage } from '@/context/LanguageContext';
import styles from './VideoSection.module.css';

const useStyles = makeStyles({
  section: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  title: {
    color: '#0b1e42',
    fontWeight: tokens.fontWeightBold,
  },
});

interface VideoSectionProps {
  /**
   * Optionnel : URL d'une vidéo MP4/WebM ou iframe une fois qu'elle est prête
   */
  videoSrc?: string;
  posterSrc?: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  videoSrc,
  posterSrc,
}) => {
  const fluentStyles = useStyles();
  const { lang, t } = useLanguage();
  const [showNotice, setShowNotice] = useState(false);
  const isEn = lang === 'en';

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoSrc) {
      setShowNotice(true);
    }
  };

  return (
    <section
      id="video-showcase"
      className={mergeClasses(styles.section, fluentStyles.section)}
      aria-labelledby="video-section-title"
    >
      {/* 1. La Spirale animée en arrière-plan (tourne en continu) */}
      <div className={styles.spiralWrapper} aria-hidden="true">
        <img
          src="/assets/spiral-background.png"
          alt=""
          className={styles.spiralImage}
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* 2. Conteneur principal au premier plan */}
      <div className={styles.container}>
        {/* En-tête de section */}
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>{t('video.badge')}</span>
          </div>

          <h2
            id="video-section-title"
            className={mergeClasses(styles.title, fluentStyles.title)}
          >
            {t('video.title')}
          </h2>

          <div className={styles.divider} aria-hidden="true" />

          <p className={styles.subtitle}>
            {t('video.subtitle')}
          </p>
        </div>

        {/* 3. Cadre du Lecteur Vidéo (16:9) réservé jusqu'à ce que la vidéo soit prête */}
        <div
          className={styles.videoCard}
          onClick={handlePlayClick}
          role="region"
          aria-label={t('video.title')}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handlePlayClick(e as unknown as React.MouseEvent);
            }
          }}
        >
          {/* Arrière-plan technologique & maillage Fluent */}
          <div className={styles.videoBackground} aria-hidden="true" />

          {/* Barre supérieure du lecteur */}
          <div className={styles.videoTopBar}>
            <div className={styles.playerTag}>
              <span className={styles.playerLiveBadge} />
              <span>Dravon Systems Overview</span>
            </div>

            <div className={styles.qualityBadge}>4K ULTRA HD</div>
          </div>

          {/* Zone centrale : Bouton Play & statut */}
          <div className={styles.videoCenterArea}>
            <div className={styles.playButtonContainer}>
              <div className={styles.pulseRing} aria-hidden="true" />
              <button
                type="button"
                className={styles.playButton}
                aria-label={t('video.playAria')}
                onClick={handlePlayClick}
              >
                <svg
                  className={styles.playIcon}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            <div className={styles.playHint}>
              <span>{isEn ? 'Preview presentation' : 'Aperçu de la présentation'}</span>
            </div>
          </div>

          {/* Barre inférieure de contrôles multimédia simulés */}
          <div className={styles.videoBottomBar}>
            <div className={styles.progressTrack} aria-hidden="true">
              <div className={styles.progressBar} />
            </div>

            <div className={styles.controlsRow}>
              <div className={styles.leftControls}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>00:00 / 02:45</span>
                <span className={styles.statusPill}>
                  {t('video.status')}
                </span>
              </div>

              <div className={styles.rightControls}>
                {/* Icône volume */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>

                {/* Icône plein écran */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Pop-in informatif quand l'utilisateur clique (la vidéo est en préparation) */}
          {showNotice && (
            <div
              className={styles.toastNotice}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className={styles.toastTitle}>
                {t('video.comingSoon')}
              </h3>
              <p className={styles.toastText}>
                {t('video.comingSoonDesc')}
              </p>
              <button
                type="button"
                className={styles.toastButton}
                onClick={() => setShowNotice(false)}
              >
                {isEn ? 'Got it' : 'Compris'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
