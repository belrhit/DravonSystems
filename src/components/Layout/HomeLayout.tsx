'use client';

import React from 'react';
import { FluentProvider } from '@fluentui/react-components';
import { dravonTheme } from '@/theme/theme';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import styles from './HomeLayout.module.css';

interface HomeLayoutProps {
  children?: React.ReactNode;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <FluentProvider theme={dravonTheme}>
      <LanguageProvider>
        <div className={styles.layoutWrapper}>
          {/* --- CALQUE D'ARRIÈRE-PLAN ORGANIQUE (Fixé en fond) --- */}
          <div className={styles.backgroundContainer}>
            <img
              src="/assets/background-dravon.png"
              alt=""
              className={styles.backgroundImage}
              aria-hidden="true"
            />
          </div>

          {/* --- NAVIGATION TRANSPARENTE & FIXE --- */}
          <Navbar />

          {/* --- CONTENU PRINCIPAL --- */}
          <main className={styles.mainContent}>
            {children}
          </main>

          {/* --- PIED DE PAGE TECH & MODERNE --- */}
          <Footer />
        </div>
      </LanguageProvider>
    </FluentProvider>
  );
};
