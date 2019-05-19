export const setReveal = id => {
  console.log('set reveal', id);
  return {
    type: 'SET_REVEAL',
    data: {
      id
    }
  };
};
export const resetReveal = () => {
  return {
    type: 'RESET_REVEAL'
  };
};
export const setWin = () => {
  return {
    type: 'SET_WIN',
    data: {}
  };
};
export const setTimeUsed = (time = 0) => {
  return {
    type: 'SET_TIME_USED',
    data: { currTimeUsed: time }
  };
};
export const setLevel = (level = 1) => {
  return {
    type: 'SET_LEVEL',
    data: { level }
  };
};
export const setSource = (src = 'fe') => {
  return {
    type: 'SET_DATA_SRC',
    data: { src }
  };
};
export const setAlert = (alert = true) => {
  console.log('set alert');
  return {
    type: 'SET_ALERT',
    data: { alert }
  };
};
export const setFinishAlert = (finishAlert = true) => {
  console.log('set alert');
  return {
    type: 'SET_FINISH_ALERT',
    data: { finishAlert }
  };
};
export const setStart = () => {
  return {
    type: 'SET_START'
  };
};
