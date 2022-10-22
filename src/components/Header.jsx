import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 0.8rem;
  color: #ffffeb;
  h1 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
    .desc {
      margin-bottom: 0.8rem;
    }
  }
`;
const Header = ({ lang }) => {
  return (
    <Wrapper>
      <h1>🤔 {lang.header} 🤔</h1>
      <h2>
        <span className="desc">{lang.intro}</span>
      </h2>
    </Wrapper>
  );
};

const mapStateToProps = ({ lang }) => {
  return { lang };
};
export default connect(mapStateToProps)(Header);
