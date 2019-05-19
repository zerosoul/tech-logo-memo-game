import React from 'react';

import styled from 'styled-components';
import LevelDropdown from '../components/LevelDropdown';
import PlayButton from '../components/PlayButton';
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 14rem;
  margin: 0 auto;
`;
const Options = () => {
  return (
    <Wrapper>
      <LevelDropdown />
      <PlayButton />
    </Wrapper>
  );
};
export default Options;
