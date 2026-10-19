'use client';

import React from 'react';
import {
  BuildingFactory24Regular,
  BrainCircuit24Regular,
  Calculator24Regular,
} from '@fluentui/react-icons';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { lang, toggleLang } = useLanguage();
  const isEn = lang === 'en';

  const navLinks = [
    { label: isEn ? 'Home Page' : 'Page d’accueil', href: '/' },
    { label: isEn ? 'Products' : 'Produits', href: '#products' },
    { label: isEn ? 'Use Cases' : 'Cas d’utilisations', href: '/use-cases' },
    { label: isEn ? 'Our Approach' : 'Notre approche', href: '#who-are-we' },
    { label: isEn ? 'About Us' : 'À propos de nous', href: '#who-are-we' },
    { label: isEn ? 'Careers' : 'Carrières', href: '/careers' },
    { label: isEn ? 'News & Events' : 'Nouvelles & événements', href: '/news' },
    { label: isEn ? 'Contact' : 'Contact', href: '/contact' },
  ];

  const sectors = [
    {
      id: 'industrie',
      title: isEn ? 'Industry & Manufacturing' : 'Industrie',
      description: isEn
        ? 'Industrial ERP, smart workshops & real-time inventory tracking'
        : 'ERP manufacturier, ateliers connectés & traçabilité des stocks',
      icon: <BuildingFactory24Regular aria-hidden="true" />,
      href: '#products',
    },
    {
      id: 'bureau-etude',
      title: isEn ? 'Engineering & Design Offices' : "Bureaux d'études",
      description: isEn
        ? 'R&D management, project orchestration & technical workflows'
        : 'Gestion de projets R&D, pilotage opérationnel & flux techniques',
      icon: <BrainCircuit24Regular aria-hidden="true" />,
      href: '#products',
    },
    {
      id: 'bureau-comptabilite',
      title: isEn ? 'Accounting Firms' : 'Bureaux de comptabilité',
      description: isEn
        ? 'AI automated tax pre-accounting, OCR extraction & XML compliance'
        : 'Pré-comptabilité IA, extraction OCR de factures & télé-déclarations XML',
      icon: <Calculator24Regular aria-hidden="true" />,
      href: '#products',
    },
  ];

  return (
    <footer
      className={styles.footerWrapper}
      role="contentinfo"
      aria-label="Pied de page Dravon Systems"
    >
      {/* 1. Feuilles décoratives botaniques transparentes d'origine */}
      <img
        src="/assets/footer-leaf-left.png"
        alt=""
        className={styles.leafLeft}
        aria-hidden="true"
        loading="lazy"
        draggable={false}
      />
      <img
        src="/assets/footer-leaf-right.png"
        alt=""
        className={styles.leafRight}
        aria-hidden="true"
        loading="lazy"
        draggable={false}
      />

      {/* 2. Conteneur principal avec la grille 3 colonnes et padding généreux */}
      <div className={styles.mainContainer}>
        <div className={styles.grid}>
          {/* =================================================================
              Colonne 1 (Gauche) : Logo blanc + Description
             ================================================================= */}
          <div className={styles.brandColumn}>
            <a href="/" className={styles.logoLink} aria-label="Accueil Dravon Systems">
              <img
                src="/assets/logo-mark-white.svg"
                alt="Dravon Systems"
                className={styles.logoMark}
                width="92"
                height="92"
              />
              <span className={styles.logoText}>
                Dravon<span className={styles.logoDot}>.</span>Systems<span className={styles.logoTm}>™</span>
              </span>
            </a>

            <p className={styles.brandDescription}>
              {isEn
                ? "Dravon Systems' cutting-edge software engineering and SaaS ecosystem deliver resilient, intelligent enterprise solutions to orchestrate your operational growth."
                : "La technologie logicielle de pointe et les solutions SaaS de Dravon Systems fournissent une automatisation résiliente et intelligente pour orchestrer la croissance des entreprises modernes."}
            </p>
          </div>

          {/* =================================================================
              Colonne 2 (Centre) : Notre Entreprise + Liens
             ================================================================= */}
          <div className={styles.linksColumn}>
            <h3 className={styles.columnTitle}>
              {isEn ? 'Our Company' : 'Notre Entreprise'}
            </h3>

            <ul className={styles.linksList}>
              {navLinks.map((item) => (
                <li key={item.label} className={styles.linkItem}>
                  <a href={item.href} className={styles.link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =================================================================
              Colonne 3 (Droite) : Nos secteurs d'expérience
             ================================================================= */}
          <div className={styles.sectorsColumn}>
            <h3 className={styles.columnTitle}>
              {isEn ? 'Our Sectors of Experience' : 'Nos secteurs d’expérience'}
            </h3>

            <div className={styles.sectorsList}>
              {sectors.map((sector) => (
                <a
                  key={sector.id}
                  href={sector.href}
                  className={styles.sectorCard}
                >
                  <div className={styles.sectorIconWrapper}>
                    {sector.icon}
                  </div>
                  <div className={styles.sectorTextWrapper}>
                    <span className={styles.sectorTitle}>{sector.title}</span>
                    <span className={styles.sectorDescription}>
                      {sector.description}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================
          3. Barre Inférieure : Bouton langue à gauche, Copyright centré
         ================================================================= */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomContent}>
          {/* Bouton sélecteur de langue interactif */}
          <button
            type="button"
            onClick={toggleLang}
            className={styles.langButton}
            aria-label={isEn ? 'Switch to French' : 'Passer en Français'}
          >
            <span className={styles.flagIcon} aria-hidden="true">
              {isEn ? '🇺🇸' : '🇫🇷'}
            </span>
            <span>{isEn ? 'English' : 'French'}</span>
          </button>

          {/* Copyright au centre */}
          <p className={styles.copyrightText}>
            © 2026 Dravon Systems. Tous droits réservés.
          </p>

          {/* Espace vide pour équilibrer le layout */}
          <div className={styles.spacerRight} aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
