import React from 'react';
import styled from 'styled-components';
import GithubIcons from './GithubIcons';

import ProductHunt from './ProductHunt';
import { connect } from 'react-redux';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 0;
  color: #ffffeb;
  .icons {
    margin-bottom: 0.4rem;
    & > span:first-child {
      margin-right: 0.4rem;
    }
  }
  h1 {
    font-size: 1rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }
  h2 {
    font-size: 0.6rem;
    margin-bottom: 0.6rem;
  }
  h3 {
    a {
      color: #fff;
      text-decoration: none;
    }
    font-size: 0.5rem;
  }
`;
const Footer = ({ lang }) => {
  return (
    <Wrapper>
      <ProductHunt />
      <p className="icons">
        <GithubIcons />
      </p>
      <h1>
        {lang.header} ©{' '}
        <a target="_blank" rel="noopener noreferrer" href="//yangerxiao.com">
          Tristan
        </a>
      </h1>
      <h2>
        {lang.inspired}
        <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/davinci/pen/yVZapY">
          Brainymo
        </a>
      </h2>
      <h3>
        <a rel="noopener noreferrer" target="_blank" href="http://www.beian.miit.gov.cn/">
          京ICP备16015459号-1
        </a>
      </h3>
    </Wrapper>
  );
};
const mapStateToProps = ({ lang }) => {
  return { lang };
};
export default connect(mapStateToProps)(Footer);
