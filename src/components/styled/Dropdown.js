import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  .triangle {
    position: absolute;
    right: 0.4rem;
    top: 50%;
    margin-top: -0.4rem;
    font-size: 0.8rem;
    color: #bd6565;
  }
  select {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
    padding-right: 1rem;
    /* text-transform: uppercase; */
    color: #bd6565;
    border: none;
    font-weight: 600;
    background: #feeb70;
    appearance: none;
    -webkit-appearance: none;
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
