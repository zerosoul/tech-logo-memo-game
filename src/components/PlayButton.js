import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setStart } from '../redux/actions';

const Button = styled.button`
  user-select: none;
  display: block;
  margin: 1rem auto;
  border: none;
  background: #ffed66;
  border-radius: 2rem;
  padding: 0.4rem 1rem;
  color: #ff5e5b;
  font-weight: 600;
  font-size: 1.2rem;
  text-transform: uppercase;
  box-shadow: 0 3px 0 #ff5e5b;
  transition: all 200ms linear;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 7px 0 #ff5e5b;
  }
`;

const PlayButton = ({ playing, win, setStart }) => {
  const handleStarted = () => {
    console.log('handle playing', playing);

    setStart();
  };
  return <Button onClick={handleStarted}>{playing || win ? `reset` : `start`}</Button>;
};

const mapStateToProps = store => {
  const { playing, win } = store;
  return { playing, win };
};
const mapDispatchToProps = dispatch => ({
  setStart: bindActionCreators(setStart, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
