import React from 'react';
import styled from 'styled-components';
import GithubStar from './GithubStar';

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
    display: flex;
    font-size: 0.8rem;
    span {
      margin-right: 0.4rem;
    }
  }
`;
const Header = () => {
  return (
    <Wrapper>
      <h1>🤔 LMG 🤔</h1>
      <h2>
        <span>Technology Logo Memory Game</span>
        <GithubStar />
      </h2>
    </Wrapper>
  );
};

export default Header;
