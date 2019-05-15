import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  margin: 1rem auto;
  border: none;
  background: #ffed66;
  border-radius: 2rem;
  padding: 0.4rem 1rem;
  color: #ff5e5b;
  font-weight: 600;
  font-size: 1.2rem;
  text-transform: uppercase;
  box-shadow: 0 3px 0 #ff5e5b;
  transition: all 200ms linear;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 7px 0 #ff5e5b;
  }
`;

const PlayButton = () => {
  return <Button>start</Button>;
};

export default PlayButton;
