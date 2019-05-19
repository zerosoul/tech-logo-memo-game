/* eslint-disable no-case-declarations */
import Data from './data.json';
import { shuffle } from '../utils';

const getRandomLogos = (level = 1) => {
  let RandomData = shuffle([...Data]);
  let wtf = RandomData.length / (4 - level);
  RandomData = RandomData.slice(0, wtf);
  let LogoTitles = RandomData.map(logo => {
    return { name: logo.name, title: logo.title };
  });
  let LogoPics = RandomData.map(logo => {
    return { name: logo.name, path: `static/logos/${logo.name}.png` };
  });
  let tmp = shuffle([...LogoTitles, ...LogoPics]);
  return tmp.map((item, idx) => {
    return { ...item, id: idx + 1 };
  });
};
// 随机展示
const initalState = getRandomLogos();

let initStore = {
  data: initalState,
  level: 1,
  reveals: [],
  hits: [],
  currTimeUsed: 0,
  playing: false,
  win: false,
  alert: false,
  finishAlert: false
};
const logos = (state = initStore, action = { type: '', data: {} }) => {
  const { reveals, hits, data: currLogos, playing, level: prevLevel } = state;
  switch (action.type) {
    case 'SET_REVEAL':
      const { id } = action.data;
      reveals.push(id);
      if (reveals.length >= 2) {
        if (reveals.length > 2) {
          reveals.shift();
        }
        // 命中了
        if (isBingo(reveals, currLogos)) {
          hits.push(...reveals);
          reveals.length = 0;
        }
      }
      console.log('current hits', hits);
      return { ...state, reveals: [...reveals], hits: [...hits] };
    case 'RESET_REVEAL':
      return { ...state, reveals: [] };
    case 'SET_TIME_USED':
      const { currTimeUsed } = action.data;
      return { ...state, currTimeUsed };
    case 'SET_WIN':
      return { ...state, win: true, playing: false, finishAlert: true };
    case 'SET_ALERT':
      const { alert } = action.data;
      console.log('alert', action);
      return { ...state, alert };
    case 'SET_FINISH_ALERT':
      const { finishAlert } = action.data;
      console.log('finishAlert', action);
      return { ...state, finishAlert };
    case 'SET_LEVEL':
      const { level } = action.data;
      console.log('reducer level', level);
      const newStore = {
        ...initStore,
        data: getRandomLogos(level),
        level
      };
      console.log('new store', newStore);

      return newStore;
    case 'SET_START':
      const startNew = {
        ...initStore,
        data: currLogos,
        level: prevLevel,
        playing: !playing
      };
      console.log('set start', startNew);
      return startNew;
    default:
      return { ...state };
  }
};
const isBingo = (ids, currLogos) => {
  const [firstId = null, secondId = null] = ids;
  if (firstId && secondId) {
    let firstName = currLogos.find(item => {
      return item.id === firstId;
    }).name;
    let secondName = currLogos.find(item => {
      return item.id === secondId;
    }).name;
    console.log('first and second name', firstName, secondName);

    return firstName === secondName;
  }
  return false;
};
export default logos;
