import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setPlayType } from '../redux/actions';
import StyledDropdown from './styled/Dropdown';

const LogoOrTitleDropdown = ({ playTypes, playType, playing, setPlayType }) => {
  const handleLevelChange = evt => {
    const type = evt.target.value;
    setPlayType(type);
  };
  return (
    <StyledDropdown>
      <select disabled={playing} onChange={handleLevelChange}>
        {playTypes.map(type => (
          <option key={type.key} value={type.key} selected={type.key == playType}>
            {type.title.toUpperCase()}
          </option>
        ))}
      </select>
    </StyledDropdown>
  );
};

const mapStateToProps = ({ playTypes, playType, playing }) => {
  return { playType, playTypes, playing };
};
const mapDispatchToProps = dispatch => ({
  setPlayType: bindActionCreators(setPlayType, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoOrTitleDropdown);
