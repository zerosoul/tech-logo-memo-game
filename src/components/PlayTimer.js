import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTimeFormated } from '../utils';

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 1rem;
  left: 0.2rem;
  font-size: 0.8rem;
  background: #fff4;
  padding: 0.6rem;
  > p {
    margin-bottom: 0.5rem;
  }
`;
const getStoreTime = () => {
  return Number(localStorage.getItem('BEST_TIME') || 0);
};
let interID = null;
const PlayTimer = ({ playing, win }) => {
  const storedTime = getStoreTime();
  const [time, setTime] = useState(0);
  const [bestTime, setBestTime] = useState(storedTime);

  useEffect(() => {
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
    if (win && time !== 0) {
      clearInterval(interID);
      let storeTime = getStoreTime();
      if (storeTime === 0 || storeTime > time) {
        console.log('store best time', storeTime, time);
        setBestTime(time);
        localStorage.setItem('BEST_TIME', time);
      }
      setTime(0);
    }
  }, [win, time]);
  return (
    <Wrapper>
      {playing ? <p className="currTime">{getTimeFormated(time)}</p> : null}
      <p className="bestTime">Best Time: {getTimeFormated(bestTime)}</p>
    </Wrapper>
  );
};

const mapStateToProps = store => {
  const { playing, win } = store;
  console.log('play timer store', playing, win);
  return { playing, win };
};
export default connect(mapStateToProps)(PlayTimer);
