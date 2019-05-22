import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed';
import { setStart } from '../redux/actions';

const Button = styled.button`
  user-select: none;
  display: block;
  /* margin: 1rem auto; */
  border: none;
  background: #ffed66;
  border-radius: 2rem;
  padding: 0.4rem 1rem;
  color: #ff5e5b;
  font-weight: 600;
  font-size: 1.2rem;
  text-transform: uppercase;
  box-shadow: 0 3px 0 #ff5e5b;
  transition: all 300ms ease;
  cursor: pointer;
  &:active {
    transform: translateY(4px);
    box-shadow: 0 0 0 #ff5e5b;
  }
`;

const PlayButton = ({ playing, setStart, lang }) => {
  const handleStarted = () => {
    console.log('handle playing', playing);

    setStart();
    if (!playing) {
      smoothScrollIntoView(document.getElementById('card_container'), { behavior: 'smooth' });
    }
  };
  return <Button onClick={handleStarted}>{playing ? lang.restart : lang.start}</Button>;
};

const mapStateToProps = store => {
  const { playing, lang } = store;
  return { playing, lang };
};
const mapDispatchToProps = dispatch => ({
  setStart: bindActionCreators(setStart, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
