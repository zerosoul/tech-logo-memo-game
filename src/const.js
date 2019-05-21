import FeData from './redux/data.fe.json';
import BeData from './redux/data.be.json';

export const Sources = {
  fe: { type: 'fe', data: FeData, title: 'frontend' },
  be: { type: 'be', data: BeData, title: 'backend' }
};

export const PlayTypes = {
  title_vs_logo: { type: 'title_vs_logo', title: 'title vs logo' },
  logo_vs_logo: { type: 'logo_vs_logo', title: 'logo vs logo' }
};

export const Levels = {
  easy: 3,
  medium: 2,
  hard: 1
};
