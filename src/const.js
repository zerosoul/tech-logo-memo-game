import FeData from './redux/data/fe.json';
import BeData from './redux/data/be.json';

import EN from './redux/data/lang.en.json';
import ZH from './redux/data/lang.zh.json';

// To make it easier to read from JSON files
export const Langs = {
  en: {
    title: 'English',
    data: EN
  },
  zh: {
    title: '中文',
    data: ZH
  }
};

export const Sources = {
  fe: { type: 'fe', data: FeData },
  be: { type: 'be', data: BeData }
};

export const PlayTypes = {
  title_vs_logo: { type: 'title_vs_logo' },
  logo_vs_logo: { type: 'logo_vs_logo' }
};

export const Levels = {
  easy: 3,
  medium: 2,
  hard: 1
};
