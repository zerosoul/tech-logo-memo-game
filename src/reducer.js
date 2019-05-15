import Data from './data.json';
import { shuffle } from './utils';
const LogoTitles = Data.map(logo => {
  return { name: logo.name, title: logo.title };
});
const LogoPics = Data.map(logo => {
  return { name: logo.name, path: `static/logos/${logo.name}.png` };
});
// 随机展示
let Logos = shuffle([...LogoTitles, ...LogoPics]);
Logos = Logos.map((item, idx) => {
  return { ...item, id: idx + 1 };
});
const initialState = { logos: Logos, selects: [], hits: [] };
console.log('initalState', initialState);

const reducer = (state, action) => {
  const { id, name } = action.data;
  let { selects, hits, logos } = state;
  switch (action.type) {
    case 'RESTART':
      console.log('RESTART', action);

      return { ...initialState };
    case 'ADD_SELECTS':
      selects.push(logos.find(item => item.id === id));
      console.log('ADD_SELECTS', action, selects);
      return { ...state, selects };
    case 'RESET_SELECTS':
      console.log('RESET_SELECTS', action);

      return { ...state, selects: [] };
    case 'ADD_HIT':
      console.log('ADD_HIT', action);

      hits.push(...logos.filter(item => item.name === name));

      return { ...state, hits };
    default:
      throw new Error();
  }
};

export { initialState, reducer };
