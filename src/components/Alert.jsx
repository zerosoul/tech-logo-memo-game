import React, { useEffect, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { connect } from 'react-redux';
import { setAlert } from '../redux/actions';
import styled from 'styled-components';
import { BounceIn } from './Animates';
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
  background-color: rgba(0, 0, 0, 0.4);
  .alert {
    /* max-width: 12rem; */
    background: rgb(96, 108, 136);
    padding: 1.4rem 1.8rem;
    border-radius: 0.2rem;
    text-align: center;
    position: relative;
    animation-fill-mode: both;
    animation: ${BounceIn} 1s;
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
      color: #ffffeb;
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
const Alert = ({ isVisible, setAlert, lang }) => {
  const modal = useRef(null);
  const handleClose = () => {
    enableBodyScroll(modal.current);
    setAlert(false);
  };
  useEffect(() => {
    if (isVisible) {
      const ele = document.getElementById('opt_container');
      ele.scrollIntoView({ behavior: 'smooth' });

      disableBodyScroll(modal.current);
    }
  }, [isVisible]);
  return isVisible ? (
    <Wrapper ref={modal}>
      <section className="alert">
        <h1 className="header">☝️☝️☝️</h1>
        <p className="content">
          {lang.alert.before} <span className="start">{lang.start}</span>
          {lang.alert.after}
        </p>
        <div className="close" onClick={handleClose}>
          x
        </div>
      </section>
    </Wrapper>
  ) : null;
};

const mapStateToProps = ({ alert, lang }) => {
  return { isVisible: alert, lang };
};
const mapDispatchToProps = dispatch => ({
  setAlert: bindActionCreators(setAlert, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
