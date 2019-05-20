import FeData from './redux/data.fe.json';
import BeData from './redux/data.be.json';

export const Sources = {
  fe: { type: 'fe', data: FeData, title: 'frontend' },
  be: { type: 'be', data: BeData, title: 'backend' }
};

export const Levels = {
  easy: 3,
  medium: 2,
  hard: 1
};
