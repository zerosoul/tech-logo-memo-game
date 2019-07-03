import React, { useRef, useEffect } from 'react';
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
  &.compact {
    min-height: unset;
  }
  align-content: center;
  background-color: rgba(0, 0, 0, 0.1);
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
const Cards = ({ logos, compact = false }) => {
  console.log('logos', logos);
  const cards = useRef(null);
  useEffect(() => {
    if (cards.current && logos.length) {
      const cardContainerEle = document.getElementById('card_container');
      const cardEles = [...cardContainerEle.querySelectorAll('.card')];
      // const cardContainerEle = cards.current;
      console.log('demo card', cardEles, logos.length);

      // const firstName = cardEles[0].data('name');
      // const demoCards = cardEles.filter(c => c.data('name') === firstName);
      // console.log('demo card', demoCards);
    }
  }, [logos]);
  // const { logos: Logos } = state;
  const count = logos.length;
  return (
    <Wrapper ref={cards} id="card_container" className={`c${count} ${compact && 'compact'}`}>
      {logos.map(({ id, title, path, type, name, reveal, hit }) => (
        <Card
          mini={compact}
          id={id}
          key={`${id}-${name}`}
          title={title || ''}
          logoFilePath={path || ''}
          type={type}
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
