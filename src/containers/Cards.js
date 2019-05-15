import React, { Component } from 'react';
import Card from '../components/Card';
import Data from '../data.json';
import styled from 'styled-components';
import { shuffle } from '../utils';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #fff1;
  padding: 0.8rem 0;
  margin: 0 0.2rem;
`;
const LogoTitles = Data.map(logo => {
  return { name: logo.name, title: logo.title };
});
const LogoPics = Data.map(logo => {
  return { name: logo.name, path: `static/logos/${logo.name}.png` };
});
const Logos = shuffle([...LogoTitles, ...LogoPics]);
export default class Cards extends Component {
  render() {
    return (
      <Wrapper>
        {Logos.map(logo => (
          <Card
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
