import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSource } from '../redux/actions';
import StyledDropdown from './styled/Dropdown';

const SrcDropdown = ({ sources, source, playing, setSource }) => {
  const handleLevelChange = evt => {
    const src = evt.target.value;
    console.log('setSource', evt.target.value);
    setSource(src);
  };
  return (
    <StyledDropdown>
      <select disabled={playing} onChange={handleLevelChange}>
        {sources.map(src => (
          <option key={src.key} value={src.key} selected={src.key == source}>
            {src.title}
          </option>
        ))}
      </select>
    </StyledDropdown>
  );
};

const mapStateToProps = ({ sources, source, playing }) => {
  return { source, sources, playing };
};
const mapDispatchToProps = dispatch => ({
  setSource: bindActionCreators(setSource, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SrcDropdown);
