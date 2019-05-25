import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { Langs } from '../const';
import { setLang } from '../redux/actions';
import StyledDropdown from './styled/Dropdown';

const Wrapper = styled.aside`
  position: absolute;
  left: 1rem;
  top: 1rem;
  select {
    background: #615d87;
    color: #ddd;
  }
  .triangle {
    color: #ddd;
  }
`;
const LangDropdown = ({ playing, setLang, locale }) => {
  const handleLevelChange = evt => {
    const locale = evt.target.value;
    console.log('setLang', evt.target.value);
    setLang(locale);
  };
  return !playing ? (
    <Wrapper>
      <StyledDropdown>
        <select onChange={handleLevelChange}>
          {Object.keys(Langs).map(l => (
            <option key={l} value={l} selected={l == locale}>
              {Langs[l].title}
            </option>
          ))}
        </select>
      </StyledDropdown>
    </Wrapper>
  ) : null;
};

const mapStateToProps = ({ playing, locale }) => {
  return { playing, locale };
};
const mapDispatchToProps = dispatch => ({
  setLang: bindActionCreators(setLang, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LangDropdown);
