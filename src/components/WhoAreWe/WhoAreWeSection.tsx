'use client';

import React from 'react';
import {
  makeStyles,
  tokens,
  mergeClasses,
} from '@fluentui/react-components';
import { useLanguage } from '@/context/LanguageContext';
import styles from './WhoAreWeSection.module.css';

const useStyles = makeStyles({
  section: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  title: {
    color: '#0b1e42',
    fontWeight: tokens.fontWeightBold,
  },
  hook: {
    color: '#0062f5',
    fontWeight: tokens.fontWeightBold,
  },
  highlight: {
    color: '#0062f5',
    fontWeight: tokens.fontWeightBold,
  },
  subTitle: {
    fontWeight: tokens.fontWeightBold,
    color: '#0b1e42',
  },
  bodyText: {
    color: '#374151',
    fontWeight: tokens.fontWeightRegular,
  },
});

export const WhoAreWeSection: React.FC = () => {
  const fluentStyles = useStyles();
  const { lang } = useLanguage();

  const isEn = lang === 'en';

  return (
    <section
      id="who-are-we"
      className={mergeClasses(styles.section, fluentStyles.section)}
      aria-labelledby="who-are-we-title"
    >
      <div className={styles.container}>
        {/* Titre Principal (<h2>) */}
        <h2
          id="who-are-we-title"
          className={mergeClasses(styles.title, fluentStyles.title)}
        >
          {isEn ? 'Who are we?' : 'Qui sommes-nous ?'}
        </h2>

        {/* Effet de soulignement centré */}
        <div className={styles.divider} aria-hidden="true" />

        {/* Sous-titre / Accroche (<p>) */}
        <p className={mergeClasses(styles.hook, fluentStyles.hook)}>
          {isEn ? (
            <>
              Our mission is above all human-centric. Beyond the complex technologies, SaaS platforms, or bespoke web applications we build, our fundamental objective is to answer this essential question: How can we help you{' '}
              <strong className={mergeClasses(styles.highlight, fluentStyles.highlight)}>
                save time, effort, and money
              </strong>
              ? This is the absolute guiding principle behind all of our solutions.
            </>
          ) : (
            <>
              Notre mission est avant tout centrée sur l'humain. Au-delà des technologies complexes, des plateformes SaaS ou des applications web sur-mesure que nous concevons, notre objectif fondamental est de répondre à cette question essentielle : Comment vous faire{' '}
              <strong className={mergeClasses(styles.highlight, fluentStyles.highlight)}>
                économiser du temps, des efforts et de l'argent
              </strong>{' '}
              ? C'est la ligne directrice absolue de toutes nos solutions.
            </>
          )}
        </p>

        {/* Corps du texte (<p>) */}
        <p className={mergeClasses(styles.bodyText, fluentStyles.bodyText)}>
          {isEn ? (
            <>
              Dravon Systems is your{' '}
              <strong className={mergeClasses(styles.highlight, fluentStyles.highlight)}>
                trusted partner
              </strong>{' '}
              in software engineering. To simplify your day-to-day operations, we act on two key pillars:
            </>
          ) : (
            <>
              Dravon Systems est votre{' '}
              <strong className={mergeClasses(styles.highlight, fluentStyles.highlight)}>
                partenaire de confiance
              </strong>{' '}
              en ingénierie logicielle. Pour simplifier votre quotidien, nous agissons sur deux axes :
            </>
          )}
        </p>

        {/* Liste des deux axes (<ul>) */}
        <ul className={styles.axesList}>
          <li className={styles.axisItem}>
            <span className={styles.axisNumber}>1.</span>
            {isEn ? (
              <>
                <strong className={styles.axisTitle}>
                  Custom Solutions (
                  <span className={mergeClasses(styles.highlight, fluentStyles.highlight)}>
                    Sur-Mesure
                  </span>
                  ) :
                </strong>{' '}
                We build custom business software (ERP, CRM) tailored precisely to adapt to your processes, and not the other way around.
              </>
            ) : (
              <>
                <strong className={styles.axisTitle}>
                  Le{' '}
                  <span className={mergeClasses(styles.highlight, fluentStyles.highlight)}>
                    Sur-Mesure
                  </span>{' '}
                  :
                </strong>{' '}
                Nous développons des logiciels métiers (ERP, CRM) pensés pour s'adapter exactement à vos processus, et non l'inverse.
              </>
            )}
          </li>

          <li className={styles.axisItem}>
            <span className={styles.axisNumber}>2.</span>
            {isEn ? (
              <>
                <strong className={styles.axisTitle}>
                  The{' '}
                  <span className={mergeClasses(styles.highlight, fluentStyles.highlight)}>
                    SaaS Ecosystem
                  </span>{' '}
                  :
                </strong>{' '}
                We deploy our own ready-to-use software solutions (
                <strong className={mergeClasses(styles.highlight, fluentStyles.highlight)}>
                  SmartFiscal, Efficio, StockFacture, E2F
                </strong>
                ) to instantly digitalize the mission-critical aspects of your sector.
              </>
            ) : (
              <>
                <strong className={styles.axisTitle}>
                  L'
                  <span className={mergeClasses(styles.highlight, fluentStyles.highlight)}>
                    Écosystème SaaS
                  </span>{' '}
                  :
                </strong>{' '}
                Nous déployons nos propres solutions prêtes à l'emploi (
                <strong className={mergeClasses(styles.highlight, fluentStyles.highlight)}>
                  SmartFiscal, Efficio, StockFacture, E2F
                </strong>
                ) pour digitaliser instantanément les aspects critiques de votre secteur.
              </>
            )}
          </li>
        </ul>

        {/* Sous-section finale (Accompagnement) */}
        <div className={styles.subSection}>
          <h3 className={mergeClasses(styles.subTitle, fluentStyles.subTitle)}>
            {isEn
              ? 'Complete support and training from start to finish'
              : "Un accompagnement et une formation jusqu'au bout"}
          </h3>
          <p className={mergeClasses(styles.finalText, fluentStyles.bodyText)}>
            {isEn
              ? "We know that great software is nothing without the people who use it. That's why we refuse to merely deliver code. Dravon Systems commits to standing alongside you at every single step: from shaping your digital strategy to full on-the-ground training of your operational teams. We stand by you all the way to ensure seamless adoption and an immediate return on investment."
              : "Nous savons qu'un excellent logiciel n'est rien sans les personnes qui l'utilisent. C'est pourquoi nous refusons de simplement livrer du code. Dravon Systems s'engage à être à vos côtés à chaque étape : de l'incubation de votre stratégie digitale jusqu'à la formation complète de vos équipes sur le terrain. Nous vous accompagnons jusqu'au bout pour garantir une adoption parfaite et un retour sur investissement immédiat."}
          </p>
        </div>
      </div>
    </section>
  );
};
