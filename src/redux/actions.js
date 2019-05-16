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
export const setStart = () => {
  return {
    type: 'SET_START'
  };
};
