import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
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
    align-items: center;
    font-size: 0.8rem;
    span {
      margin-right: 0.4rem;
    }
  }
`;
const Header = ({ lang }) => {
  return (
    <Wrapper>
      <h1>🤔 {lang.header} 🤔</h1>
      <h2>
        <span>{lang.intro}</span>
        <GithubStar />
      </h2>
    </Wrapper>
  );
};

const mapStateToProps = ({ lang }) => {
  return { lang };
};
export default connect(mapStateToProps)(Header);
