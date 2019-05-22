import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageVisibility from 'react-page-visibility';

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
      display: flex;
      flex-direction: column;
      thead tr th {
        color: rgb(255, 94, 91);
        text-align: center;
        padding-bottom: 0.4rem;
        border-bottom: 1px solid #ccc4;
      }
      tbody tr td {
        color: rgb(255, 94, 91);
        border: 1px solid #b3989833;
        padding: 0.2rem;
      }
    }
  }
`;
const getStoreTime = () => {
  let str = localStorage.getItem('BEST_LEVEL_TIME') || '{}';
  try {
    JSON.parse(str);
    return JSON.parse(str);
  } catch (e) {
    return {};
  }
};
let interID = null;
const PlayTimer = ({ playing, win, level, setTimeUsed, currTimeUsed, lang }) => {
  const storedTime = getStoreTime();
  const [paused, setPaused] = useState(false);
  const [time, setTime] = useState(0);
  const [bestTime, setBestTime] = useState(storedTime);

  useEffect(() => {
    console.log('playing', playing);
    if (playing && !paused) {
      interID = setInterval(() => {
        setTime(t => t + 1);
      }, 1000);
    } else {
      console.log('clear1  playing', playing);
      clearInterval(interID);
      if (!paused) {
        setTime(0);
      }
    }
  }, [playing, paused]);
  useEffect(() => {
    if (win && time !== 0) {
      clearInterval(interID);
      setTimeUsed(time);
      let storeTime = getStoreTime();
      if (!storeTime[level] || storeTime[level] > time) {
        console.log('store best time', storeTime, time);
        storeTime[level] = time;
        setBestTime(storeTime);
        localStorage.setItem('BEST_LEVEL_TIME', JSON.stringify(storeTime));
      }
      setTime(0);
    }
  }, [win, time, setTimeUsed, level]);
  const handleVisibilityChange = isVisible => {
    setPaused(!isVisible);
  };
  return (
    <PageVisibility onChange={handleVisibilityChange}>
      <Wrapper className={playing && 'playing'}>
        <p className="time curr">{getTimeFormated(time || currTimeUsed)}</p>
        {!!Object.keys(bestTime).length && (
          <table className="time best">
            <thead>
              <tr>
                <th>{lang.best_time}</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(bestTime).map(level => {
                return (
                  <tr key={level}>
                    <td>{lang.levels[level]}</td>
                    <td>{getTimeFormated(bestTime[level])}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </Wrapper>
    </PageVisibility>
  );
};

const mapStateToProps = store => {
  const { playing, win, currTimeUsed, level, lang } = store;
  return { playing, win, currTimeUsed, level, lang };
};
const mapDispatchToProps = dispatch => ({
  setTimeUsed: bindActionCreators(setTimeUsed, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayTimer);
