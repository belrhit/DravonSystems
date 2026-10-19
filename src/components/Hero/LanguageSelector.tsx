'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './LanguageSelector.module.css';

export const LanguageSelector: React.FC = () => {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <div className={styles.langWrapper}>
      <button
        type="button"
        onClick={toggleLang}
        className={styles.langButton}
        title={`Changer de langue (Actuel: ${t('lang.current')})`}
        aria-label={`Changer de langue. Langue actuelle : ${t('lang.current')}`}
      >
        <span className={styles.langFlag}>{t('lang.flag')}</span>
        <span className={styles.langText}>{t('lang.current')}</span>
      </button>
    </div>
  );
};
