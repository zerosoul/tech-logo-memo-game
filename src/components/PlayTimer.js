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
  bottom: 1rem;
  right: 0;
  font-size: 0.6rem;
  background: rgb(255, 237, 102, 0.8);
  padding: 0.6rem;
  transition: all 1s;
  font-weight: 800;
  &.playing {
    opacity: 0.3;
  }
  > p:not(:last-child) {
    margin-bottom: 0.4rem;
  }
  .time {
    color: rgb(255, 94, 91);
    &.curr {
      font-size: 0.8rem;
      background: rgba(255, 237, 102);
      padding: 0.4rem 0.8rem;
      border-radius: 0.8rem;
    }
    &.best {
      padding-top: 0.2rem;
      border-top: 1px solid rgb(255, 94, 91);
      .txt {
        color: inherit;
      }
    }
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
      setTime(0);
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
      <p className="time curr">{getTimeFormated(time || currTimeUsed)}</p>
      <p className="time best">
        <span className="txt">BEST TIME: </span>
        {getTimeFormated(bestTime)}
      </p>
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
