import React, { useReducer, useEffect } from 'react';
import { initialState, reducer } from '../reducer';
import Card from '../components/Card';
import styled, { keyframes } from 'styled-components';

const FadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff1;
  padding: 0.8rem 0;
  margin: 0 0.2rem;
  animation-fill-mode: both;
  animation: ${FadeInUp} 1s;
`;
const Cards = () => {
  const [state] = useReducer(reducer, initialState);
  console.log('logos', state);

  const { logos: Logos, selects, hits } = state;
  // const getRevealed = id => {
  //   let inSelects = !!selects.find(item => item.id === id);
  //   let inHits = !!hits.find(item => item.id === id);
  //   console.log('get revealed', inSelects, inHits);

  //   return inSelects || inHits;
  // };
  useEffect(() => {
    console.log('666');
  }, [selects, hits]);
  return (
    <Wrapper>
      {Logos.map(logo => (
        <Card
          id={logo.id}
          key={logo.id}
          title={logo.title || ''}
          logoFilePath={logo.path || ''}
          name={logo.name}
          revealed={
            !!selects.find(item => item.id === logo.id) || hits.find(item => item.id === logo.id)
          }
        />
      ))}
    </Wrapper>
  );
};
export default Cards;
