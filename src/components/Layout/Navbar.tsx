'use client';

import React, { useState, useEffect } from 'react';
import {
  makeStyles,
  shorthands,
  tokens,
  mergeClasses,
} from '@fluentui/react-components';
import { useLanguage } from '@/context/LanguageContext';

const useStyles = makeStyles({
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...shorthands.padding('18px', '52px'),
    backgroundColor: 'transparent',
    backdropFilter: 'none',
    boxShadow: 'none',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'transparent',
    transitionProperty: 'background-color, backdrop-filter, border-bottom-color, box-shadow, padding',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'ease-in-out',
  },
  navScrolled: {
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    backdropFilter: 'blur(12px)',
    borderBottomColor: 'rgba(224, 229, 233, 0.8)',
    boxShadow: tokens.shadow2,
    ...shorthands.padding('12px', '52px'),
  },
  logoLink: {
    display: 'inline-flex',
    alignItems: 'center',
    columnGap: '12px',
    textDecoration: 'none',
    outlineStyle: 'none',
    transitionProperty: 'opacity, transform',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',
    ':hover': {
      opacity: 0.9,
    },
  },
  logoMark: {
    height: '124px',
    width: 'auto',
    display: 'block',
    objectFit: 'contain',
  },
  logoText: {
    fontSize: '30px',
    fontWeight: '800',
    letterSpacing: '-0.035em',
    color: '#1a1a1a', // Gris anthracite demandé
    lineHeight: '1',
    display: 'inline-flex',
    alignItems: 'center',
    userSelect: 'none',
    fontFamily:
      "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
  },
  logoDot: {
    color: '#0047ba', // Bleu Tech Fluent signature
  },
  logoTm: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#64748b',
    alignSelf: 'flex-start',
    marginTop: '2px',
    marginLeft: '2px',
  },
  navLinks: {
    display: 'flex',
    columnGap: '32px',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  link: {
    color: '#4a5568', // Gris sobre et élégant comme Fluent.ai
    textDecorationLine: 'none',
    fontSize: '15px',
    fontWeight: '500',
    paddingTop: '6px',
    paddingBottom: '4px',
    paddingLeft: '2px',
    paddingRight: '2px',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'transparent',
    transitionProperty: 'color, border-bottom-color',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'ease',
    ':hover': {
      color: '#0047ba', // Bleu Tech Fluent
      borderBottomColor: '#0047ba', // Soulignement bleu subtil
    },
  },
});

export const Navbar: React.FC = () => {
  const classes = useStyles();
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.products'), href: '#products' },
    { label: t('nav.useCases'), href: '/use-cases' },
    { label: t('nav.about'), href: '#who-are-we' },
    { label: t('nav.careers'), href: '/careers' },
    { label: t('nav.news'), href: '/news' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <header className={mergeClasses(classes.nav, isScrolled && classes.navScrolled)}>
      {/* Logo horizontal inspiré de Fluent.ai avec l'emblème Dravon */}
      <a href="/" className={classes.logoLink} aria-label="Accueil Dravon Systems">
        <img
          src="/assets/logo-mark.svg"
          alt="Dravon Systems Logo"
          className={classes.logoMark}
        />
        <span className={classes.logoText}>
          Dravon<span className={classes.logoDot}>.</span>Systems<span className={classes.logoTm}>™</span>
        </span>
      </a>

      {/* Liens de navigation sobres et alignés à droite comme sur Fluent.ai */}
      <nav className={classes.navLinks} aria-label="Navigation principale">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className={classes.link}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};
