import { BrandVariants, createLightTheme, Theme } from '@fluentui/react-components';

// Palette de bleus "Tech" inspirée de Fluent.ai
export const dravonBrand: BrandVariants = {
  10: '#001a33',
  20: '#002b4d',
  30: '#003d66',
  40: '#004d80',
  50: '#006699',
  60: '#0080b3',
  70: '#0099cc',
  80: '#33adff',
  90: '#66c2ff',
  100: '#99d6ff',
  110: '#ccebff',
  120: '#e6f5ff',
  130: '#f2faff',
  140: '#f9fcff',
  150: '#ffffff',
  160: '#ffffff',
};

export type DravonCustomTokens = {
  colorBackgroundBase: string;
  colorBackgroundWave1: string;
  colorBackgroundWave2: string;
  colorBackgroundShadow: string;
};

export type DravonTheme = Theme & DravonCustomTokens;

export const dravonTheme: DravonTheme = {
  ...createLightTheme(dravonBrand),
  fontFamilyBase:
    "'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
  // Ajout de tokens personnalisés pour le background
  colorBackgroundBase: '#FFFFFF',
  colorBackgroundWave1: '#F4F6F8',
  colorBackgroundWave2: '#EBEFF2',
  colorBackgroundShadow: 'rgba(224, 229, 233, 0.25)',
};
