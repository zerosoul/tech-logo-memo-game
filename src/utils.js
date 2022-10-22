import { Sources, Levels } from './const';

export const getSourceTitle = (key = 'fe') => {
  return Sources[key].title;
};
export const getDataByPlayType = (data = [], playType = 'title_vs_logo') => {
  console.log('new play playtype from reducer', playType, data);
  let names = [];

  const newData = data.map(item => {
    const { name } = item;
    if (playType === 'title_vs_logo') {
      console.log('names', names.includes(name));
      if (names.indexOf(name) === -1) {
        names.push(name);

        return { ...item, type: 'title' };
      } else {
        return { ...item, type: 'logo' };
      }
    }
    if (playType === 'logo_vs_logo') {
      return { ...item, type: 'logo' };
    }
    return item;
  });
  return shuffle([...newData]);
};
export const getRandomLogos = (data = Sources.be, level = 'easy') => {
  const { type, data: logoData } = data;

  if (!logoData.length) return;
  let RandomData = shuffle([...logoData]);
  let wtf = RandomData.length / Levels[level];
  RandomData = RandomData.slice(0, wtf);
  let LogoTitles = RandomData.map(logo => {
    return {
      name: logo.name,
      title: logo.title,
      path: `logos/${type}/${logo.name}.png`,
      type: 'title'
    };
  });
  let LogoPics = RandomData.map(logo => {
    return {
      name: logo.name,
      path: `logos/${type}/${logo.name}.png`,
      title: logo.title,
      type: 'logo'
    };
  });
  return shuffle([...shuffle(LogoTitles), ...LogoPics]).map((item, idx) => {
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
