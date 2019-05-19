import React from 'react';

import styled from 'styled-components';
import LevelDropdown from '../components/LevelDropdown';
import SrcDropdown from '../components/SrcDropdown';
import PlayButton from '../components/PlayButton';
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 24rem;

  margin: 2rem auto;
  margin-bottom: 1rem;
  .selects {
    display: flex;
    min-width: 16rem;
    justify-content: space-evenly;
  }
`;
const Options = () => {
  return (
    <Wrapper>
      <div className="selects">
        <SrcDropdown />
        <LevelDropdown />
      </div>
      <PlayButton />
    </Wrapper>
  );
};
export default Options;
