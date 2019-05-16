/* eslint-disable no-case-declarations */
import Data from './data.json';
import { shuffle } from '../utils';
const LogoTitles = Data.map(logo => {
  return { name: logo.name, title: logo.title };
});
const LogoPics = Data.map(logo => {
  return { name: logo.name, path: `static/logos/${logo.name}.png` };
});
// 随机展示
let initalState = shuffle([...LogoTitles, ...LogoPics]);
initalState = initalState.map((item, idx) => {
  return { ...item, id: idx + 1 };
});
let initStore = { data: initalState, reveals: [], hits: [], playing: false, win: false };
const logos = (state = initStore, action = { type: '', data: {} }) => {
  const { reveals, hits } = state;
  switch (action.type) {
    case 'SET_REVEAL':
      const { id } = action.data;
      reveals.push(id);
      // 命中了
      if (isBingo(reveals)) {
        hits.push(...reveals);
      }
      return { ...state, reveals: [...reveals], hits };
    case 'RESET_REVEAL':
      return { ...state, reveals: [] };
    case 'SET_WIN':
      return { ...state, win: true, playing: false };
    case 'SET_START':
      console.log('set start');
      return { data: shuffle(initalState), reveals: [], hits: [], playing: true };
    default:
      return { ...state };
  }
};
const isBingo = ids => {
  const [firstId = null, secondId = null] = ids;
  if (firstId && secondId) {
    let firstName = initalState.find(item => {
      return item.id === firstId;
    }).name;
    let secondName = initalState.find(item => {
      return item.id === secondId;
    }).name;
    return firstName == secondName;
  }
  return false;
};
export default logos;
