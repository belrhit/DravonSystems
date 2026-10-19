'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.useCases': "Cas d'étude",
    'nav.about': 'À propos',
    'nav.careers': 'Carrières',
    'nav.news': 'Actualités',
    'nav.contact': 'Contact',
    'hero.title': "L'ingénierie logicielle qui orchestre votre croissance.",
    'hero.seoAlt': 'Développement de logiciels sur-mesure et solutions SaaS pour entreprises',
    'hero.subtitle':
      "Dravon Systems conçoit des applications métiers sur-mesure (ERP, CRM) et déploie un écosystème de solutions SaaS prêtes à l'emploi pour digitaliser et propulser votre performance.",
    'badge.factory': 'Industrie 4.0 & ERP Manufacturier',
    'badge.target': 'Précision Métier & Performance',
    'badge.headphones': 'Support Réactif & Hearables',
    'badge.smartwatch': 'Applications Mobiles & Wearables',
    'badge.offline': 'Architecture Résiliente & On-Premise',
    'badge.appliance': 'Solutions SaaS & Systèmes Métiers',
    'badge.remote': 'Pilotage en Temps Réel & CRM',
    'badge.globe': 'Déploiement International & Multi-devises',
    'badge.robotics': 'Automatisation & Orchestration',
    'video.badge': 'DÉMONSTRATION & IMMERSION',
    'video.title': 'Découvrez Dravon Systems en action',
    'video.subtitle': 'Une immersion concrète dans notre écosystème logiciel et la rigueur de notre accompagnement.',
    'video.comingSoon': 'Vidéo en cours de finalisation',
    'video.comingSoonDesc': 'Notre vidéo officielle de présentation est en cours de montage et sera disponible très prochainement.',
    'video.playAria': 'Lire la vidéo de présentation',
    'video.status': 'Bientôt disponible',
    'lang.current': 'Français',
    'lang.flag': '🇫🇷',
  },
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.useCases': 'Use Cases',
    'nav.about': 'About Us',
    'nav.careers': 'Careers',
    'nav.news': 'News & Events',
    'nav.contact': 'Contact Us',
    'hero.title': 'Software engineering that orchestrates your growth.',
    'hero.seoAlt': 'Custom software development and turnkey SaaS solutions for enterprises',
    'hero.subtitle':
      'Dravon Systems designs custom business applications (ERP, CRM) and deploys an ecosystem of ready-to-use SaaS solutions to digitalize and boost your performance.',
    'badge.factory': 'Industry 4.0 & Manufacturing ERP',
    'badge.target': 'Business Precision & High Performance',
    'badge.headphones': '24/7 Dedicated Support',
    'badge.smartwatch': 'Mobile Apps & Connected Devices',
    'badge.offline': 'Resilient & On-Premise Architecture',
    'badge.appliance': 'Turnkey SaaS & Enterprise Tools',
    'badge.remote': 'Real-Time CRM & Dashboards',
    'badge.globe': 'Global Deployment & Multi-Tenant',
    'badge.robotics': 'Automation & Cloud Orchestration',
    'video.badge': 'DEMO & IMMERSION',
    'video.title': 'Experience Dravon Systems in Action',
    'video.subtitle': 'A concrete immersion into our software ecosystem and our dedicated support.',
    'video.comingSoon': 'Video in final production',
    'video.comingSoonDesc': 'Our official presentation video is currently in post-production and will be online shortly.',
    'video.playAria': 'Play presentation video',
    'video.status': 'Coming soon',
    'lang.current': 'English',
    'lang.flag': '🇺🇸',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Langue par défaut en Français selon la demande
  const [lang, setLang] = useState<Language>('fr');

  const toggleLang = () => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
