import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .triangle {
    margin-left: -1.4rem;
    color: #bd6565;
  }
  select {
    font-size: 1rem;
    text-transform: uppercase;
    color: #bd6565;
    border: none;
    font-weight: 600;
    background: #feeb70;
    appearance: none;
    -webkit-appearance: none;
    padding: 0.4rem 0.8rem;
    padding-right: 1.8rem;
    border-radius: 2rem;
    &[disabled] {
      color: #bba3a3;
    }
  }
`;
const StyledDropdown = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <i className="triangle">&#9663;</i>
    </Wrapper>
  );
};
export default StyledDropdown;
