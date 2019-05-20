import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Levels } from '../const';
import { setLevel } from '../redux/actions';
import StyledDropdown from './styled/Dropdown';

const LevelDropdown = ({ level, playing, setLevel }) => {
  const handleLevelChange = evt => {
    const level = evt.target.value;
    console.log('setLevel', evt.target.value);
    setLevel(level);
  };
  return (
    <StyledDropdown>
      <select disabled={playing} onChange={handleLevelChange}>
        {Object.keys(Levels).map(l => (
          <option key={l} value={l} selected={l == level}>
            {l.toUpperCase()}
          </option>
        ))}
      </select>
    </StyledDropdown>
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
