'use client';

import React from 'react';
import {
  makeStyles,
  tokens,
  mergeClasses,
  Button,
} from '@fluentui/react-components';
import {
  CheckmarkCircle24Regular,
  ArrowRight20Regular,
} from '@fluentui/react-icons';
import { useLanguage } from '@/context/LanguageContext';
import styles from './ProductsSection.module.css';

/**
 * Interface définissant la structure d'un produit phare
 */
export interface ProductItem {
  id: string;
  badge: {
    fr: string;
    en: string;
  };
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  features: {
    fr: [string, string, string];
    en: [string, string, string];
  };
  imageSrc: string;
  imageAlt: {
    fr: string;
    en: string;
  };
  reverse: boolean;
  ctaText?: {
    fr: string;
    en: string;
  };
  ctaHref?: string;
}

/**
 * Liste des 4 produits phares présentés selon le Z-Pattern
 */
const products: ProductItem[] = [
  {
    id: 'stock',
    badge: {
      fr: 'GESTION DE STOCK',
      en: 'INVENTORY MANAGEMENT',
    },
    title: {
      fr: 'Le stock. Sans le chaos.',
      en: 'Inventory. Without the chaos.',
    },
    description: {
      fr: 'Passez des fichiers dispersés à une gestion claire, collaborative et en temps réel. Suivez vos entrées, sorties et réapprovisionnements sans aucune marge d’erreur.',
      en: 'Move from scattered spreadsheets to clear, real-time stock control. Track your inputs, dispatches, and inventory levels with total accuracy.',
    },
    features: {
      fr: [
        'Une seule source de vérité pour éliminer doublons et erreurs de saisie',
        'Des mouvements traçables en direct avec horodatage précis',
        'Des décisions plus sûres grâce aux alertes de stock prédictives',
      ],
      en: [
        'A single source of truth eliminating duplicates and entry errors',
        'Fully traceable movements in real time with exact timestamps',
        'Smarter decisions backed by predictive stock alerts',
      ],
    },
    imageSrc: '/assets/products/stock.png',
    imageAlt: {
      fr: 'Interface Dravon Stock de gestion d’inventaire en temps réel',
      en: 'Dravon Stock real-time inventory management interface',
    },
    reverse: false, // Image à droite, Texte à gauche
    ctaText: {
      fr: 'Découvrir',
      en: 'Discover',
    },
    ctaHref: '#contact',
  },
  {
    id: 'efficio',
    badge: {
      fr: 'GMAO & OPÉRATIONS',
      en: 'CMMS & OPERATIONS',
    },
    title: {
      fr: 'Efficio : Pilotage opérationnel & maintenance',
      en: 'Efficio: Operational management & maintenance',
    },
    description: {
      fr: 'Orchestrez vos équipes de terrain, vos contrats d’intervention et vos parcs d’équipements. Éradiquez les temps d’arrêt imprévus grâce à une visibilité centralisée.',
      en: 'Orchestrate your field technicians, maintenance contracts, and equipment assets. Eliminate unscheduled downtime with 360° operational visibility.',
    },
    features: {
      fr: [
        'Planification dynamique des interventions et affectation en direct',
        'Gestion proactive des alertes et disponibilité garantie à 98,8%',
        'Suivi instantané des indicateurs clés : contrats, charges et marges',
      ],
      en: [
        'Dynamic dispatching of work orders and live technician tracking',
        'Proactive incident handling ensuring 98.8% asset availability',
        'Live financial and operational KPIs: margins, expenses, and workload',
      ],
    },
    imageSrc: '/assets/products/efficio.png',
    imageAlt: {
      fr: 'Tableau de bord Efficio pour la maintenance et la gestion des interventions',
      en: 'Efficio dashboard for operational maintenance and technician dispatching',
    },
    reverse: true, // Image à gauche, Texte à droite
    ctaText: {
      fr: 'Découvrir',
      en: 'Discover',
    },
    ctaHref: '#contact',
  },
  {
    id: 'smartfiscal',
    badge: {
      fr: 'PRÉ-COMPTABILITÉ & IA',
      en: 'AI PRE-ACCOUNTING',
    },
    title: {
      fr: 'SmartFiscal : Automatisation fiscale & IA',
      en: 'SmartFiscal: AI-driven tax & accounting automation',
    },
    description: {
      fr: 'Transformez vos montagnes de factures papier et reçus en écritures certifiées. Notre IA neuronale extrait chaque ligne et prépare vos déclarations fiscales XML en un clic.',
      en: 'Turn stacks of paper invoices and bank statements into certified ledger entries. Our neural AI extracts every field and readies XML tax filings automatically.',
    },
    features: {
      fr: [
        'Extraction IA neuronale haute fidélité pour factures et relevés',
        'Comptabilisation automatique et synchronisation du journal général',
        'Télé-déclarations fiscales instantanées et exports de fichiers XML normalisés',
      ],
      en: [
        'High-fidelity neural OCR extraction for invoices and receipts',
        'Automated journal entries with zero manual bookkeeping required',
        'One-click XML compliance exports and tax declaration readiness',
      ],
    },
    imageSrc: '/assets/products/smartfiscal.png',
    imageAlt: {
      fr: 'Ingestion de factures et comptabilisation automatisée par IA SmartFiscal',
      en: 'AI automated invoice ingestion and accounting reconciliation with SmartFiscal',
    },
    reverse: false, // Image à droite, Texte à gauche
    ctaText: {
      fr: 'Découvrir',
      en: 'Discover',
    },
    ctaHref: '#contact',
  },
  {
    id: 'pos-caisse',
    badge: {
      fr: 'COMMERCE & ENCAISSEMENT',
      en: 'POINT OF SALE & RETAIL',
    },
    title: {
      fr: 'Dravon POS : Caisse tactile connectée au Cloud',
      en: 'Dravon POS: Cloud-connected touch retail terminal',
    },
    description: {
      fr: 'Une solution de caisse tactile ultra-véloce avec gestion intégrée des périphériques (scanners, tiroir-caisse, imprimantes). Toutes vos ventes sont synchronisées avec votre stock en temps réel.',
      en: 'A high-speed touch POS terminal with seamless hardware integration (scanners, cash drawers, receipt printers). Every transaction syncs live with cloud inventory.',
    },
    features: {
      fr: [
        'Encaissement instantané avec prise en charge des scanners et tickets',
        'Synchronisation bidirectionnelle immédiate avec le stock central',
        'Rapports de ventes en direct et consolidation cloud multi-boutiques',
      ],
      en: [
        'Instant checkout workflows supporting barcode scanners and receipt printers',
        'Real-time bi-directional inventory sync preventing any out-of-stock event',
        'Live retail sales analytics and multi-store cloud consolidation',
      ],
    },
    imageSrc: '/assets/products/pos-caisse.png',
    imageAlt: {
      fr: 'Terminal de caisse tactile moderne Dravon POS avec douchette et imprimante',
      en: 'Modern touch POS terminal Dravon POS with barcode scanner and thermal printer',
    },
    reverse: true, // Image à gauche, Texte à droite
    ctaText: {
      fr: 'Découvrir',
      en: 'Discover',
    },
    ctaHref: '#contact',
  },
];

/**
 * Styles Griffel exploitant les tokens natifs Fluent 2
 */
const useStyles = makeStyles({
  section: {
    paddingTop: tokens.spacingVerticalXXL,
    paddingBottom: tokens.spacingVerticalXXL,
  },
  productTitle: {
    fontSize: tokens.fontSizeHero700,
    lineHeight: tokens.lineHeightHero700,
    fontWeight: tokens.fontWeightBold,
  },
  productDesc: {
    color: tokens.colorNeutralForeground2,
  },
  imageCard: {
    boxShadow: tokens.shadow16,
    borderRadius: tokens.borderRadiusXLarge,
    transitionProperty: 'transform, box-shadow, border-color',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'ease',
    ':hover': {
      transform: 'translateY(-8px)',
      boxShadow: tokens.shadow28,
    },
  },
});

export const ProductsSection: React.FC = () => {
  const fluentStyles = useStyles();
  const { lang } = useLanguage();
  const isEn = lang === 'en';

  return (
    <section
      id="products"
      className={mergeClasses(styles.section, fluentStyles.section)}
      aria-labelledby="products-section-title"
    >
      <div className={styles.container}>
        {/* En-tête de la section */}
        <header className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>{isEn ? 'Ecosystem & SaaS' : 'Écosystème & SaaS'}</span>
          </div>

          <h2 id="products-section-title" className={styles.title}>
            {isEn ? 'Our Solutions' : 'Nos Solutions'}
          </h2>

          <div className={styles.divider} aria-hidden="true" />

          <p className={styles.subtitle}>
            {isEn
              ? 'Discover our suite of interconnected enterprise solutions, crafted to eliminate friction and elevate your daily business performance.'
              : 'Découvrez notre suite de solutions logicielles interconnectées, conçues pour éliminer les points de friction et décupler la rentabilité de votre entreprise.'}
          </p>
        </header>

        {/* Layout Z-Pattern avec alternance des produits */}
        <div className={styles.productsList}>
          {products.map((product) => {
            const isReverse = product.reverse;

            return (
              <article
                key={product.id}
                className={mergeClasses(
                  styles.productRow,
                  isReverse ? styles.productRowReverse : undefined
                )}
                aria-labelledby={`product-heading-${product.id}`}
              >
                {/* 1. Colonne Texte */}
                <div className={styles.textColumn}>
                  <span className={styles.categoryTag}>
                    {isEn ? product.badge.en : product.badge.fr}
                  </span>

                  <h3
                    id={`product-heading-${product.id}`}
                    className={mergeClasses(
                      styles.productTitle,
                      fluentStyles.productTitle
                    )}
                  >
                    {isEn ? product.title.en : product.title.fr}
                  </h3>

                  <p
                    className={mergeClasses(
                      styles.productDesc,
                      fluentStyles.productDesc
                    )}
                  >
                    {isEn ? product.description.en : product.description.fr}
                  </p>

                  {/* Liste de 3 points forts avec icône CheckmarkCircle24Regular */}
                  <ul className={styles.featuresList}>
                    {(isEn ? product.features.en : product.features.fr).map(
                      (featureText, idx) => (
                        <li key={idx} className={styles.featureItem}>
                          <CheckmarkCircle24Regular
                            className={styles.featureIcon}
                            aria-hidden="true"
                          />
                          <span className={styles.featureText}>
                            {featureText}
                          </span>
                        </li>
                      )
                    )}
                  </ul>

                  {/* Bouton d'action "Découvrir" (Button appearance="outline") */}
                  <Button
                    appearance="outline"
                    size="large"
                    icon={<ArrowRight20Regular />}
                    iconPosition="after"
                    className={styles.ctaButton}
                    as="a"
                    href={product.ctaHref || '#contact'}
                  >
                    {isEn
                      ? product.ctaText?.en || 'Discover'
                      : product.ctaText?.fr || 'Découvrir'}
                  </Button>
                </div>

                {/* 2. Colonne Image (Effet Wow, flottant au hover, shadow16) */}
                <div className={styles.imageColumn}>
                  <div
                    className={mergeClasses(
                      styles.imageCard,
                      fluentStyles.imageCard
                    )}
                  >
                    <img
                      src={product.imageSrc}
                      alt={isEn ? product.imageAlt.en : product.imageAlt.fr}
                      className={styles.productImage}
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
