import React, { useEffect, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { connect } from 'react-redux';
import { setAlert } from '../redux/actions';
import styled from 'styled-components';
import { SlideInUp } from './Animates';
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
    background: #508a88;
    padding: 1.4rem 1.8rem;
    border-radius: 0.2rem;
    text-align: center;
    position: relative;
    animation-fill-mode: both;
    animation: ${SlideInUp} 1s;
    .header {
      text-transform: uppercase;
      font-size: 1.8rem;
      padding-bottom: 1.5rem;
    }
    .content {
      font-size: 1rem;
      padding-bottom: 1rem;
      .start {
        border: 1px solid #ddd5;
        border-radius: 1rem;
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
const Alert = ({ isVisible, setAlert }) => {
  const modal = useRef(null);
  const handleClose = () => {
    enableBodyScroll(modal.current);
    setAlert(false);
  };
  useEffect(() => {
    if (isVisible) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      disableBodyScroll(modal.current);
    }
  }, [isVisible]);
  return isVisible ? (
    <Wrapper ref={modal}>
      <section className="alert">
        <h1 className="header">☝️☝️☝️</h1>
        <p className="content">
          click <span className="start">START</span> button first!
        </p>
        <div className="close" onClick={handleClose}>
          x
        </div>
      </section>
    </Wrapper>
  ) : null;
};

const mapStateToProps = ({ alert }) => {
  return { isVisible: alert };
};
const mapDispatchToProps = dispatch => ({
  setAlert: bindActionCreators(setAlert, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert);
