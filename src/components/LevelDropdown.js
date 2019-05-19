import styled from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setLevel } from '../redux/actions';
const Wrapper = styled.div`
  /* background: #fff; */
  select {
    font-size: 1.2rem;
    color: rgb(255, 94, 91);
    border: none;
    font-weight: 600;
    background: #feeb70;
    appearance: none;
    -webkit-appearance: none;
    padding: 0.4rem 0.8rem;
    border-radius: 2rem;
    &[disabled] {
      color: #bba3a3;
    }
  }
`;
const LevelDropdown = ({ level, playing, setLevel }) => {
  const handleLevelChange = evt => {
    const level = evt.target.value;
    console.log('setLevel', evt.target.value);
    setLevel(level);
  };
  return (
    <Wrapper>
      <select disabled={playing} onChange={handleLevelChange}>
        {[1, 2, 3].map(l => (
          <option key={l} value={l} selected={l == level}>
            {`Level ${l}`}
          </option>
        ))}
      </select>
    </Wrapper>
  );
};

const mapStateToProps = ({ level, playing }) => {
  return { level, playing };
};
const mapDispatchToProps = dispatch => ({
  setLevel: bindActionCreators(setLevel, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelDropdown);
