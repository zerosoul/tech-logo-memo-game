/* eslint-disable no-case-declarations */
import { Sources, PlayTypes } from '../const';

import { getRandomLogos, getDataByPlayType } from '../utils';

const sources = Object.values(Sources).map(v => {
  return { key: v.type, title: v.title };
});

const playTypes = Object.values(PlayTypes).map(v => {
  return { key: v.type, title: v.title };
});

let initStore = {
  sources,
  playTypes,
  playType: localStorage.getItem('PLAY_TYPE') || 'title_vs_logo',
  source: localStorage.getItem('SRC') || 'fe',
  data: getRandomLogos(),
  level: localStorage.getItem('LEVEL') || 'easy',
  reveals: [],
  hits: [],
  currTimeUsed: 0,
  playing: false,
  win: false,
  alert: false,
  finishAlert: false
};
const logos = (state = initStore, action = { type: '', data: {} }) => {
  const {
    reveals,
    hits,
    source,
    data: currLogos,
    playing,
    playType: currPlayType,
    level: prevLevel
  } = state;
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
    case 'SET_DATA_SRC':
      const { src = 'fe' } = action.data;
      localStorage.setItem('SRC', src);
      localStorage.setItem('LEVEL', 'easy');
      return {
        ...state,
        data: getDataByPlayType(getRandomLogos(Sources[src]), currPlayType),
        source: src,
        level: 'easy',
        hits: [],
        reveals: []
      };
    case 'SET_PLAY_TYPE':
      const { playType } = action.data;
      const newData = getDataByPlayType(currLogos, playType);
      console.log('new play type data', newData);
      localStorage.setItem('PLAY_TYPE', playType);
      return {
        ...state,
        data: newData,
        playType,
        hits: [],
        reveals: []
      };
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
      localStorage.setItem('LEVEL', level);
      const newStore = {
        ...state,
        hits: [],
        reveals: [],
        data: getDataByPlayType(getRandomLogos(Sources[source], level), currPlayType),
        level
      };
      console.log('new store', newStore);

      return newStore;
    case 'SET_START':
      const startNew = {
        ...state,
        win: false,
        hits: [],
        reveals: [],
        data: getDataByPlayType(getRandomLogos(Sources[source], prevLevel), currPlayType),
        // level: prevLevel,
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
