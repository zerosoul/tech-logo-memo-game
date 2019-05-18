import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTimeFormated } from '../utils';

import WeiboImage from '../assets/img/yarn.png';
import ShareImage from '../assets/img/icon.png';
import {
  FacebookShareButton,
  FacebookIcon,
  //   FacebookShareCount,
  TwitterShareButton,
  TwitterIcon,
  // RedditShareButton,
  // EmailShareButton,
  WeiboShareButton
} from 'react-share';

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  padding: 0.4rem 0.6rem;
  background: rgba(255, 255, 255, 0.6);
  transition: all 1s;
  &.hidden {
    transform: translateX(-74%);
  }
  .btn {
    width: 1.5rem;
    margin: 0 0.4rem;
    &:last-child {
      margin-right: 0;
    }
    &:first-child {
      margin-left: 0;
    }
    &.withCount {
      display: flex;
      flex-direction: column;
    }
  }
  .sep {
    width: 2px;
    background: #666;
    height: 1.4rem;
    margin-left: 0.4rem;
  }
  .toggleBtn {
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 1.8;
    background: #ccc;
    color: #555;
    border: 1px solid #666;
    border-radius: 50%;
    cursor: pointer;
  }
`;
const shareUrl = `https://zerosoul.github.io/frontend-memo-game/`;
let intTime = null;
const Share = ({ currTimeUsed }) => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    intTime = setTimeout(() => {
      setHidden(true);
    }, 4000);
    return () => {
      clearTimeout(intTime);
    };
  }, []);
  const handleToggle = () => {
    clearTimeout(intTime);
    setHidden(h => !h);
    intTime = setTimeout(() => {
      setHidden(true);
    }, 4000);
  };
  return (
    <Wrapper className={hidden && 'hidden'}>
      <WeiboShareButton
        className="btn"
        url={shareUrl}
        title={`发现了一个好玩的游戏，用时${getTimeFormated(
          currTimeUsed,
          true
        )}，完成了挑战！前端图标千千万，快来试试连连看！`}
        image={WeiboImage}
      >
        <img
          width="32"
          src="https://img.icons8.com/color/48/000000/weibo.png"
          alt="Weibo share button"
        />
      </WeiboShareButton>
      {/* <p className="withCount btn"> */}
      <FacebookShareButton
        className="btn"
        url={shareUrl}
        quote={`Find a funny game, complete the challenge with time used ${getTimeFormated(
          currTimeUsed
        )}!`}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      {/* <FacebookShareCount url={shareUrl}>{count => count}</FacebookShareCount> */}
      {/* </p> */}

      <TwitterShareButton
        className="btn"
        url={`https://zerosoul.github.io/frontend-memo-game/`}
        title={`😂Find a funny game, complete the challenge with time used ${getTimeFormated(
          currTimeUsed
        )}!`}
        image={ShareImage}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <i className="sep" />
      <div onClick={handleToggle} className="toggleBtn btn">
        {hidden ? `>>` : `<<`}
      </div>
    </Wrapper>
  );
};

const mapStateToProps = store => {
  const { currTimeUsed } = store;
  return { currTimeUsed };
};

export default connect(mapStateToProps)(Share);
