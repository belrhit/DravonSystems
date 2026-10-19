'use client';

import React from 'react';
import styles from './OrbitEcosystem.module.css';
import { useLanguage } from '@/context/LanguageContext';

export const OrbitEcosystem: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.ecosystemWrapper} aria-label="Écosystème technologique d'intelligence vocale">
      {/* Cercles concentriques d'orbite en SVG */}
      <svg
        className={styles.orbitSvg}
        viewBox="0 0 880 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Faisceau lumineux de la lampe */}
          <linearGradient id="lampBeamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#FEF08A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Orbite intérieure (pointillés fins tech) */}
        <circle
          cx="440"
          cy="285"
          r="165"
          stroke="#93C5FD"
          strokeWidth="1.8"
          strokeDasharray="6 8"
          opacity="0.85"
        />

        {/* Orbite extérieure (pointillés fins tech) */}
        <circle
          cx="440"
          cy="285"
          r="275"
          stroke="#BFDBFE"
          strokeWidth="1.8"
          strokeDasharray="6 8"
          opacity="0.75"
        />
      </svg>

      {/* --- CENTRE DE LA COMPOSITION : Personnage lisant + Lampe + Bulle de dialogue --- */}
      <div className={styles.centerIllustration}>
        {/* Bulle de dialogue avec les 3 points */}
        <div className={styles.speechBubble} aria-label="Reconnaissance vocale active">
          <span className={styles.speechDot} />
          <span className={styles.speechDot} />
          <span className={styles.speechDot} />
        </div>

        {/* Illustration vectorielle du personnage lisant sous la lampe */}
        <svg
          viewBox="0 0 320 280"
          width="320"
          height="280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="lampGlow" x1="220" y1="130" x2="150" y2="210" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FDE047" stopOpacity="0.5" />
              <stop offset="85%" stopColor="#FEF08A" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Faisceau lumineux projeté par la lampe sur le livre */}
          <polygon
            points="218,138 130,225 210,245"
            fill="url(#lampGlow)"
          />

          {/* Coussin de sol / Pouf rouge corail */}
          <ellipse cx="160" cy="245" rx="72" ry="24" fill="#E55342" />
          <path
            d="M 95 240 Q 160 262 225 240 Q 235 252 215 258 Q 160 270 105 258 Z"
            fill="#C93B2B"
            opacity="0.6"
          />

          {/* Jambes croisées en pantalon jaune ocre */}
          <path
            d="M 125 220 Q 140 248 185 242 Q 205 238 215 222 Q 195 235 155 232 Z"
            fill="#EAB308"
          />
          <path
            d="M 105 224 Q 130 250 165 242 Q 140 230 120 220 Z"
            fill="#CA8A04"
          />
          {/* Pantalon partie haute */}
          <ellipse cx="160" cy="222" rx="42" ry="16" fill="#FACC15" />

          {/* Buste / Vêtement vert émeraude */}
          <path
            d="M 142 165 C 138 185 132 215 138 224 C 148 226 172 226 182 224 C 188 215 182 185 178 165 Z"
            fill="#2E7D52"
          />
          {/* Bras gauche et droit tenant le livre */}
          <path
            d="M 142 175 Q 130 195 145 208 Q 152 202 148 185 Z"
            fill="#276743"
          />
          <path
            d="M 178 175 Q 190 195 175 208 Q 168 202 172 185 Z"
            fill="#276743"
          />

          {/* Mains tenant le livre */}
          <ellipse cx="148" cy="206" rx="5" ry="4" fill="#FCD34D" />
          <ellipse cx="172" cy="206" rx="5" ry="4" fill="#FCD34D" />

          {/* Livre bleu ouvert */}
          <polygon points="144,204 160,208 176,204 174,222 160,224 146,222" fill="#2563EB" />
          <polygon points="146,205 160,208 160,223 147,221" fill="#3B82F6" />
          <polygon points="160,208 174,205 173,221 160,223" fill="#60A5FA" />
          {/* Pages blanches du livre */}
          <line x1="148" y1="208" x2="158" y2="210" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="162" y1="210" x2="172" y2="208" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="149" y1="213" x2="158" y2="215" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="162" y1="215" x2="171" y2="213" stroke="#FFFFFF" strokeWidth="1.5" />

          {/* Cou et visage */}
          <rect x="156" y="152" width="8" height="15" rx="3" fill="#FCD34D" />
          <ellipse cx="160" cy="144" rx="12" ry="14" fill="#FCD34D" />

          {/* Chevelure brune / noire stylisée */}
          <path
            d="M 148 142 C 148 130 172 130 172 142 C 174 148 172 154 168 156 C 168 150 166 142 160 142 C 154 142 152 150 152 156 C 148 154 146 148 148 142 Z"
            fill="#1E293B"
          />

          {/* Lampe de bureau articulée noire */}
          {/* Base de la lampe */}
          <ellipse cx="232" cy="246" rx="14" ry="4" fill="#334155" />
          <ellipse cx="232" cy="244" rx="12" ry="3" fill="#1E293B" />
          {/* Bras articulé (segments métalliques) */}
          <line x1="232" y1="244" x2="236" y2="198" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <circle cx="236" cy="198" r="4" fill="#64748B" />
          <line x1="236" y1="198" x2="218" y2="152" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
          <circle cx="218" cy="152" r="4" fill="#64748B" />
          {/* Abat-jour conique orienté vers le lecteur */}
          <polygon points="214,146 226,154 212,168 200,160" fill="#1E293B" />
          {/* Ampoule lumineuse */}
          <circle cx="206" cy="164" r="3" fill="#FEF08A" />
        </svg>
      </div>

      {/* --- LES 9 BADGES INTERACTIFS EN ORBITE --- */}

      {/* 1. Usine connectée / Industrie 4.0 (Orbite Extérieure, Haut-Gauche) */}
      <button
        type="button"
        className={`${styles.badgeNode} ${styles.floatA}`}
        style={{ left: '22%', top: '9%' }}
        aria-label={t('badge.factory')}
      >
        <svg
          className={styles.badgeIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 20h20" />
          <path d="M4 20V10l4 4V10l4 4V4h6v16" />
          <path d="M14 8h2" />
          <path d="M14 12h2" />
          <path d="M14 16h2" />
        </svg>
        <span className={styles.tooltip}>{t('badge.factory')}</span>
      </button>

      {/* 2. Cible / Robustesse au bruit & Précision (Orbite Intérieure, Haut-Centre-Gauche) */}
      <button
        type="button"
        className={`${styles.badgeNode} ${styles.floatB}`}
        style={{ left: '39%', top: '15%' }}
        aria-label={t('badge.target')}
      >
        <svg
          className={styles.badgeIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
        </svg>
        <span className={styles.tooltip}>{t('badge.target')}</span>
      </button>

      {/* 3. Casque audio / Hearables (Orbite Extérieure, Haut-Droite) */}
      <button
        type="button"
        className={`${styles.badgeNode} ${styles.floatC}`}
        style={{ left: '68%', top: '11%' }}
        aria-label={t('badge.headphones')}
      >
        <svg
          className={styles.badgeIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
        <span className={styles.tooltip}>{t('badge.headphones')}</span>
      </button>

      {/* 4. Montre connectée / Wearables (Orbite Extérieure, Centre-Gauche) */}
      <button
        type="button"
        className={`${styles.badgeNode} ${styles.floatB}`}
        style={{ left: '10%', top: '43%' }}
        aria-label={t('badge.smartwatch')}
      >
        <svg
          className={styles.badgeIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="6" y="5" width="12" height="14" rx="4" />
          <path d="M9 5V2h6v3" />
          <path d="M9 19v3h6v-3" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
        <span className={styles.tooltip}>{t('badge.smartwatch')}</span>
      </button>

      {/* 5. Traitement Hors-ligne / No-WiFi (Orbite Intérieure, Bas-Gauche) */}
      <button
        type="button"
        className={`${styles.badgeNode} ${styles.floatC}`}
        style={{ left: '26%', top: '65%' }}
        aria-label={t('badge.offline')}
      >
        <svg
          className={styles.badgeIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="2" y1="2" x2="22" y2="22" />
          <path d="M8.5 16.5a5 5 0 0 1 7 0" />
          <path d="M5 12.5a10 10 0 0 1 5.5-2.5" />
          <path d="M19 12.5a10 10 0 0 0-2.5-1.5" />
          <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="2.5" />
        </svg>
        <span className={styles.tooltip}>{t('badge.offline')}</span>
      </button>

      {/* 6. Électroménager / Smart Home (Orbite Extérieure, Bas-Gauche) */}
      <button
        type="button"
        className={`${styles.badgeNode} ${styles.floatA}`}
        style={{ left: '17%', top: '88%' }}
        aria-label={t('badge.appliance')}
      >
        <svg
          className={styles.badgeIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <circle cx="12" cy="13" r="5" />
          <path d="M12 10a3 3 0 0 1 3 3" />
          <circle cx="8" cy="6" r="1" fill="currentColor" />
          <line x1="13" y1="6" x2="16" y2="6" />
        </svg>
        <span className={styles.tooltip}>{t('badge.appliance')}</span>
      </button>

      {/* 7. Télécommande / Smart TV (Orbite Extérieure, Centre-Droite) */}
      <button
        type="button"
        className={`${styles.badgeNode} ${styles.floatA}`}
        style={{ left: '88%', top: '44%' }}
        aria-label={t('badge.remote')}
      >
        <svg
          className={styles.badgeIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="7" y="2" width="10" height="20" rx="3" />
          <circle cx="12" cy="6" r="1.5" fill="currentColor" />
          <circle cx="12" cy="12" r="2.5" />
          <line x1="10" y1="17" x2="10.01" y2="17" strokeWidth="2.5" />
          <line x1="14" y1="17" x2="14.01" y2="17" strokeWidth="2.5" />
        </svg>
        <span className={styles.tooltip}>{t('badge.remote')}</span>
      </button>

      {/* 8. Globe mondial / Toutes langues et accents (Orbite Intérieure, Bas-Droite) */}
      <button
        type="button"
        className={`${styles.badgeNode} ${styles.floatB}`}
        style={{ left: '74%', top: '65%' }}
        aria-label={t('badge.globe')}
      >
        <svg
          className={styles.badgeIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
          <circle cx="18" cy="8" r="1.5" fill="currentColor" />
          <circle cx="7" cy="16" r="1.5" fill="currentColor" />
        </svg>
        <span className={styles.tooltip}>{t('badge.globe')}</span>
      </button>

      {/* 9. Bras robotique / Automation (Orbite Extérieure, Bas-Droite) */}
      <button
        type="button"
        className={`${styles.badgeNode} ${styles.floatC}`}
        style={{ left: '83%', top: '88%' }}
        aria-label={t('badge.robotics')}
      >
        <svg
          className={styles.badgeIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="21" x2="20" y2="21" />
          <path d="M6 21v-3l4-4 5 1 4-6" />
          <circle cx="10" cy="14" r="1.5" fill="currentColor" />
          <circle cx="15" cy="15" r="1.5" fill="currentColor" />
          <path d="M18 6l2-2" />
          <path d="M21 8l-2-2" />
          <path d="M16 3l1 3" />
        </svg>
        <span className={styles.tooltip}>{t('badge.robotics')}</span>
      </button>
    </div>
  );
};
