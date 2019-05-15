import React, { Component } from 'react';
import Card from '../components/Card';
import Data from '../data.json';
import styled, { keyframes } from 'styled-components';
import { shuffle } from '../utils';

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
const LogoTitles = Data.map(logo => {
  return { name: logo.name, title: logo.title };
});
const LogoPics = Data.map(logo => {
  return { name: logo.name, path: `static/logos/${logo.name}.png` };
});
// 随机展示
const Logos = shuffle([...LogoTitles, ...LogoPics]);
export default class Cards extends Component {
  render() {
    const { selectedCount } = this.props;
    return (
      <Wrapper>
        {Logos.map(logo => (
          <Card
            selectedCount={selectedCount}
            title={logo.title || ''}
            logoFilePath={logo.path || ''}
            name={logo.name}
            key={logo.name}
          />
        ))}
      </Wrapper>
    );
  }
}
