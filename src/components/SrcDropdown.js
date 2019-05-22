import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setSource } from '../redux/actions';
import StyledDropdown from './styled/Dropdown';

const SrcDropdown = ({ sources, source, playing, setSource, lang }) => {
  console.log('drop srcs', sources);

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
            {lang.srcs[src.key]}
          </option>
        ))}
      </select>
    </StyledDropdown>
  );
};

const mapStateToProps = ({ sources, source, playing, lang }) => {
  return { source, sources, playing, lang };
};
const mapDispatchToProps = dispatch => ({
  setSource: bindActionCreators(setSource, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SrcDropdown);
