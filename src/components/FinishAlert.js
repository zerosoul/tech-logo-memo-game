import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { setFinishAlert } from '../redux/actions';
import styled from 'styled-components';
import { SlideInDown } from './Animates';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: #0005;
  .alert {
    /* max-width: 12rem; */
    background: rgb(100, 206, 170);
    padding: 1.4rem 1.8rem;
    border-radius: 0.4rem;
    text-align: center;
    position: relative;
    animation-fill-mode: both;
    animation: ${SlideInDown} 1s;
    /* animation-delay: 1s; */
    .header {
      text-transform: uppercase;
      font-size: 1.8rem;
      padding-bottom: 1.5rem;
    }
    .content {
      font-size: 1rem;
      padding-bottom: 1rem;
      display: flex;
      flex-direction: column;
      line-height: 2.4;
      .start {
        border: 1px solid #ddd5;
        border-radius: 0.6rem;
        padding: 0.4rem 0.8rem;
        background: #ffed66;
        color: #ff5e5b;
        font-weight: 800;
      }
    }
    .close {
      position: absolute;
      top: -0.6rem;
      right: -0.6rem;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: 1px solid #fff;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 1rem;
      background: #333;
      cursor: pointer;
    }
  }
`;
const FinishAlert = ({ isVisible, setFinishAlert }) => {
  const handleClose = () => {
    setFinishAlert(false);
  };
  useEffect(() => {
    if (isVisible) {
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
    }
  }, [isVisible]);
  return isVisible ? (
    <Wrapper>
      <section className="alert">
        <h1 className="header">👍👍👍</h1>
        <p className="content">
          <span>Greeeeeeeat Job!</span>
          <span>
            You can click <span className="start">START</span> to try again!
          </span>
        </p>
        <div className="close" onClick={handleClose}>
          x
        </div>
      </section>
    </Wrapper>
  ) : null;
};

const mapStateToProps = ({ finishAlert }) => {
  return { isVisible: finishAlert };
};
const mapDispatchToProps = dispatch => ({
  setFinishAlert: bindActionCreators(setFinishAlert, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinishAlert);
