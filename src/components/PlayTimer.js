import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTimeUsed } from '../redux/actions';

import { getTimeFormated } from '../utils';

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 4.8rem;
  left: 0;
  font-size: 0.8rem;
  background: #fff4;
  padding: 0.6rem;
  transition: all 1s;
  &.playing {
    transform: translateX(-95%);
  }
  > p:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
const getStoreTime = () => {
  return Number(localStorage.getItem('BEST_TIME') || 0);
};
let interID = null;
const PlayTimer = ({ playing, win, setTimeUsed, currTimeUsed }) => {
  const storedTime = getStoreTime();
  const [time, setTime] = useState(0);
  const [bestTime, setBestTime] = useState(storedTime);

  useEffect(() => {
    console.log('1111111');
    console.log('playing', playing);
    if (playing) {
      interID = setInterval(() => {
        setTime(t => t + 1);
      }, 1000);
    } else {
      console.log('clear1  playing', playing);
      clearInterval(interID);
    }
  }, [playing]);
  useEffect(() => {
    console.log('222222222');
    if (win && time !== 0) {
      clearInterval(interID);
      setTimeUsed(time);
      let storeTime = getStoreTime();
      if (storeTime === 0 || storeTime > time) {
        console.log('store best time', storeTime, time);
        setBestTime(time);
        localStorage.setItem('BEST_TIME', time);
      }
      setTime(0);
    }
  }, [win, time, setTimeUsed]);
  return (
    <Wrapper className={playing && 'playing'}>
      <p className="currTime">{getTimeFormated(time || currTimeUsed)}</p>
      <p className="bestTime">Best Time: {getTimeFormated(bestTime)}</p>
    </Wrapper>
  );
};

const mapStateToProps = store => {
  const { playing, win, currTimeUsed } = store;
  return { playing, win, currTimeUsed };
};
const mapDispatchToProps = dispatch => ({
  setTimeUsed: bindActionCreators(setTimeUsed, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayTimer);
