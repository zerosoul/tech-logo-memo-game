import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setReveal, resetReveal, setWin } from '../redux/actions';
import styled from 'styled-components';
import { FlipInY, FlipInX, Tada } from './Animates';

import FEImage from '../assets/img/fe.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 5rem;
  height: 5rem;
  border: 1px solid #0003;
  background: ${({ revealed }) => (revealed ? 'none' : '#fff1')};

  margin: 0.4rem;
  .title,
  .cover,
  .logo {
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    &.flipInY {
      /* backface-visibility: visible !important; */
      animation-fill-mode: both;
      animation: ${FlipInY} 1s;
    }
    &.flipInX {
      /* backface-visibility: visible !important; */
      animation-fill-mode: both;
      animation: ${FlipInX} 1s;
    }
    &.tada {
      animation-fill-mode: both;
      animation: ${Tada} 1s;
    }
  }
  .cover {
    background: url(${FEImage});
    width: 60%;
    height: 60%;
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
    background: url(${({ logoFilePath }) => `${logoFilePath}`});
    background-color: #fff9;

    background-origin: content-box;
    padding: 1rem;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;
let timer = null;
const Card = ({
  id = 0,
  title = '',
  logoFilePath = '',
  reveals = [],
  hits = [],
  total,
  playing,
  setReveal,
  resetReveal,
  setWin
}) => {
  const handleClick = () => {
    // 还没开始或者已经点了
    if (!playing || reveals.includes(id)) {
      if (!playing) {
        alert('Click START button first!');
      }
      return;
    }
    clearTimeout(timer);
    if (reveals.length == 2) {
      resetReveal();
    }
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
  const hited = hits.includes(id);
  const revealed = reveals.includes(id) || hited;
  return (
    <Wrapper revealed={revealed} onClick={handleClick} logoFilePath={logoFilePath}>
      {!revealed && <p className="cover flipInX" />}
      {revealed && title ? (
        <p className={`title ${hited ? `tada` : `flipInY`}`}>
          <span>{title}</span>
        </p>
      ) : null}
      {revealed && logoFilePath ? <p className={`logo ${hited ? `tada` : `flipInY`}`} /> : null}
    </Wrapper>
  );
};
const mapStateToProps = store => {
  const { reveals, hits, data, playing } = store;
  return { reveals, hits, playing, total: data.length };
};
const mapDispatchToProps = dispatch => ({
  setReveal: bindActionCreators(setReveal, dispatch),
  resetReveal: bindActionCreators(resetReveal, dispatch),
  setWin: bindActionCreators(setWin, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
