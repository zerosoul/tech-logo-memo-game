import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 0;
  h1 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 0.8rem;
  }
`;
const Header = () => {
  return (
    <Wrapper>
      <h1>🤔FLMG🤔</h1>
      <h2>Frontend Logo Memory Game</h2>
    </Wrapper>
  );
};

export default Header;
