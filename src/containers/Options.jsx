import React from 'react';

import styled from 'styled-components';
import LevelDropdown from '../components/LevelDropdown';
import SrcDropdown from '../components/SrcDropdown';
import LogoOrTitleDropdown from '../components/LogoOrTitleDropdown';
import PlayButton from '../components/PlayButton';
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 26rem;

  margin: 2rem auto;
  margin-bottom: 1rem;
  .selects {
    display: flex;
    width: 18rem;
    justify-content: space-evenly;
  }
`;
const Options = () => {
  return (
    <Wrapper id="opt_container">
      <div className="selects">
        <LogoOrTitleDropdown />
        <SrcDropdown />
        <LevelDropdown />
      </div>
      <PlayButton />
    </Wrapper>
  );
};
export default Options;
