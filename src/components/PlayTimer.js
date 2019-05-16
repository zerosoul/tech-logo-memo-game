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
let interID = null;
const PlayTimer = ({ playing, win }) => {
  const [time, setTime] = useState(0);
  const [bestTime, setBestTime] = useState(Number(localStorage.getItem('BEST_TIME') || 0));
  useEffect(() => {
    console.log('time effect');

    if (playing && !win) {
      interID = setInterval(() => {
        setTime(t => t + 1);
      }, 1000);
    } else {
      clearInterval(interID);
      let storeTime = Number(localStorage.getItem('BEST_TIME') || 0);
      if (storeTime < time) {
        setBestTime(time);
        localStorage.setItem('BEST_TIME', time);
      }
    }
    return () => {
      clearInterval(interID);
    };
  }, [playing, time, win]);
  return (
    <Wrapper>
      {playing ? <p className="currTime">{getTimeFormated(time)}</p> : null}
      <p className="bestTime">Best Time: {getTimeFormated(bestTime)}</p>
    </Wrapper>
  );
};

const mapStateToProps = store => {
  const { playing, win } = store;
  return { playing, win };
};
export default connect(mapStateToProps)(PlayTimer);
