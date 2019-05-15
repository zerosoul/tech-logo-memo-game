import React, { useReducer } from 'react';
import styled, { keyframes } from 'styled-components';
import { initialState, reducer } from '../reducer';

import FEImage from '../assets/img/fe.png';

const FlipInY = keyframes`
 from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  background: ${({ revealed }) => (revealed ? 'none' : '#ff5e5b')};

  border-radius: 0.2rem;
  margin: 0.4rem;
  .cover {
    background: url(${FEImage});
    width: 60%;
    height: 60%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .title,
  .logo {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    backface-visibility: visible !important;
    &.flipInY {
      animation-fill-mode: both;
      animation: ${FlipInY} 1s;
    }
  }
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0008;
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.2;
    user-select: none;
  }
  .logo {
    background: url(${({ logoFilePath }) => `${logoFilePath}`});
    background-color: #fff9;

    background-origin: content-box;
    padding: 1rem;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;
const Card = ({ id = 0, name = '', title = '', logoFilePath = '', revealed = false }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { logos, selects, hits } = state;
  const handleClick = () => {
    const count = selects.length;
    const [first] = selects;
    switch (count) {
      case 0:
        dispatch({ type: 'ADD_SELECTS', data: { id } });
        break;
      case 1:
        if (first.name === name) {
          dispatch({ type: 'ADD_HITS', data: { name } });
        } else {
          dispatch({ type: 'ADD_SELECTS', data: { id } });
        }
        break;
      case 2:
        dispatch({ type: 'RESET_SELECTS', data: {} });
        dispatch({ type: 'ADD_SELECTS', data: { id } });
        break;
    }
    if (hits.length === logos.length) {
      dispatch({ type: 'GOOD_JOB', data: {} });
    }
  };
  // const getRevealed = id => {
  //   let inSelects = !!selects.find(item => item.id === id);
  //   let inHits = !!hits.find(item => item.id === id);
  //   console.log('get revealed', inSelects, inHits);

  //   return inSelects || inHits;
  // };
  // let revealed = getRevealed(id);
  return (
    <Wrapper revealed={revealed} onClick={handleClick} logoFilePath={logoFilePath}>
      {!revealed && <p className="cover" />}
      {revealed && title ? (
        <p className="title flipInY">
          <span>{title}</span>
        </p>
      ) : null}
      {revealed && logoFilePath ? <p className="logo flipInY" /> : null}
    </Wrapper>
  );
};

export default Card;
