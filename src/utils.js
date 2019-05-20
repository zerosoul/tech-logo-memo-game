import { Sources, Levels } from './const';

export const getSourceTitle = (key = 'fe') => {
  return Sources[key].title;
};
export const getRandomLogos = (data = Sources.be, level = 'easy') => {
  const { type, data: logoData } = data;

  if (!logoData.length) return;
  let RandomData = shuffle([...logoData]);
  let wtf = RandomData.length / Levels[level];
  RandomData = RandomData.slice(0, wtf);
  let LogoTitles = RandomData.map(logo => {
    return { name: logo.name, title: logo.title };
  });
  let LogoPics = RandomData.map(logo => {
    return { name: logo.name, path: `static/logos/${type}/${logo.name}.png` };
  });
  let tmp = shuffle([...LogoTitles, ...LogoPics]);
  return tmp.map((item, idx) => {
    return { ...item, id: idx + 1 };
  });
};
export function shuffle(array) {
  let counter = array.length;
  console.log('shuffle', array);

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

export function getTimeFormated(count, zh = false) {
  return zh
    ? `${String(Math.floor(count / 60))}分${String(count % 60)}秒`
    : `${String(Math.floor(count / 60)).padStart(2, '0')}:${String(count % 60).padStart(2, '0')}`;
}
