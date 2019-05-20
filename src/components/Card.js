import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setReveal, resetReveal, setWin, setAlert } from '../redux/actions';
import styled from 'styled-components';
import { BounceIn, FadeIn, Tada } from './Animates';

import FEImage from '../assets/img/fe.png';

const Wrapper = styled.div`
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  &.mini {
    width: 4rem;
    height: 4rem;
  }
  border: 1px solid #0001;
  border-radius: 0.2rem;
  background: ${({ revealed }) => (revealed ? 'none' : '#fff1')};
  margin: 0.4rem;
  position: relative;
  &.inReveal {
    border-color: rgb(255, 94, 91, 0.2);
    border-width: 4px;
  }
  .title,
  .cover,
  .logo {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0.2rem;
    &.bounceIn {
      -webkit-backface-visibility: visible;
      backface-visibility: visible;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      animation: ${BounceIn} 1s;
    }
    &.fadeIn {
      -webkit-backface-visibility: visible;
      backface-visibility: visible;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
      animation: ${FadeIn} 1s;
    }
    &.tada {
      animation-fill-mode: both;
      animation: ${Tada} 1s;
    }
  }
  .cover {
    margin: 0 auto;
    background: url(${FEImage});
    width: 60%;
    height: 100%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0008;
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.2;
    user-select: none;
  }
  .logo {
    opacity: 0;
    &.visible {
      opacity: 1;
    }
    background: url(${({ logoFilePath }) => `${logoFilePath}`});
    background-color: #eee8;

    background-origin: content-box;
    padding: 1rem;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;
let timer = null;
const Card = ({
  mini = false,
  id = 0,
  title = '',
  logoFilePath = '',
  reveals = [],
  hits = [],
  total,
  playing,
  setReveal,
  resetReveal,
  setAlert,
  setWin
}) => {
  const [revealed, setRevealed] = useState(false);
  const [hited, setHited] = useState(false);
  useEffect(() => {
    setHited(hits.includes(id));

    setRevealed(reveals.includes(id));
    // if (!reveals.length && !hits.length) {
    //   clearTimeout(timer);
    //   resetReveal();
    // }
  }, [reveals, hits, id]);
  const handleClick = () => {
    console.log('card click', hits, total);
    // 还没开始或者已经点了
    if (!playing || revealed || hited) {
      if (!playing) {
        setAlert();
      }
      clearTimeout(timer);
      return;
    }
    clearTimeout(timer);
    setReveal(id);
    // 成功
    if (hits.length === total) {
      console.log('win!');

      setWin();
      return;
    }
    // 重置已翻牌的卡片
    timer = setTimeout(() => {
      resetReveal();
    }, 6000);
  };
  const visible = revealed || hited;
  return (
    <Wrapper
      revealed={revealed}
      className={`${revealed && `inReveal`} ${mini && `mini`} `}
      onClick={handleClick}
      logoFilePath={logoFilePath}
    >
      {!visible && <p className="cover fadeIn" />}
      {visible && title ? (
        <p className={`title ${hited ? `tada` : `bounceIn`}`}>
          <span>{title}</span>
        </p>
      ) : null}
      {logoFilePath ? (
        <p className={`logo ${visible && 'bounceIn visible'} ${hited && `tada`}`} />
      ) : null}
    </Wrapper>
  );
};
const mapStateToProps = store => {
  const { reveals, hits, data, playing, win } = store;
  return { win, reveals, hits, playing, total: data.length };
};
const mapDispatchToProps = dispatch => ({
  setReveal: bindActionCreators(setReveal, dispatch),
  resetReveal: bindActionCreators(resetReveal, dispatch),
  setWin: bindActionCreators(setWin, dispatch),
  setAlert: bindActionCreators(setAlert, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
