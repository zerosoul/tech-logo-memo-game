import React from 'react';
import styled from 'styled-components';

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

const PlayTimer = () => {
  return (
    <Wrapper>
      <p className="currTime">09:45</p>
      <p className="bestTime">Best Time: 09:12</p>
    </Wrapper>
  );
};

export default PlayTimer;
