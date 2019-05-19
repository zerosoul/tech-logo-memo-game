import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FadeInUp } from '../components/Animates';
const Card = React.lazy(() => import('../components/Card'));

const Wrapper = styled.section`
  z-index: 996;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 60vh;
  align-content: center;
  background-color: #0001;
  max-width: 50rem;
  padding: 0.8rem 0;
  margin: 0 0.2rem;
  margin: 0 auto;
  animation-fill-mode: both;
  animation: ${FadeInUp} 1s;
  &.c12 {
    max-width: 26rem;
  }
  &.c20 {
    max-width: 32rem;
  }
`;
const Cards = ({ logos }) => {
  console.log('logos', logos);

  // const { logos: Logos } = state;
  const count = logos.length;
  return (
    <Wrapper className={`c${count}`}>
      {logos.map(({ id, title, path, name, reveal, hit }) => (
        <Card
          id={id}
          key={id}
          title={title || ''}
          logoFilePath={path || ''}
          name={name}
          revealed={reveal}
          hited={hit}
        />
      ))}
    </Wrapper>
  );
};
const mapStateToPorps = store => {
  return { logos: store.data };
};
export default connect(mapStateToPorps)(Cards);
