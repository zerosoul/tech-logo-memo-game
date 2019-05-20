import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTimeFormated } from '../utils';

import ShareImage from '../assets/img/icon.png';
import WeiboIcon from '../assets/img/weibo.png';
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.6rem;
  background: none;
  transition: all 1s;
  &.toggle {
    position: fixed;
    z-index: 999;
    bottom: 1rem;
    left: 0;
    background: rgba(255, 255, 255, 0.8);
  }
  &.hidden {
    transform: translateX(-78%);
  }
  .btn {
    width: 3.6rem;
    &.wb img {
      background: #624c44;
      border-radius: 50%;
      padding: 5px;
      box-sizing: content-box;
      vertical-align: middle;
    }
    &:last-child {
      margin-right: 0;
    }
    &:first-child {
      margin-left: 0;
      text-align: left;
    }
    /* &.withCount {
      display: flex;
      flex-direction: column;
    } */
  }
  .sep {
    width: 2px;
    background: #ccc;
    height: 1.4rem;
    margin-right: 0.8rem;
  }
  .toggleBtn {
    width: 2rem;
    height: 2rem;
    text-align: center;
    line-height: 1.8;
    background: #ccc;
    color: #555;
    border: 1px solid #aaa;
    border-radius: 50%;
    cursor: pointer;
  }
`;
const shareUrl = `https://zerosoul.github.io/frontend-memo-game/`;
let intTime = null;
const Share = ({ currTimeUsed, toggle = true }) => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    intTime = setTimeout(() => {
      setHidden(true);
    }, 4000);
    return () => {
      clearTimeout(intTime);
    };
  }, []);
  useEffect(() => {
    if (!toggle) {
      clearTimeout(intTime);
    }
  }, [toggle]);
  const handleToggle = () => {
    clearTimeout(intTime);
    setHidden(h => !h);
    intTime = setTimeout(() => {
      setHidden(true);
    }, 4000);
  };
  return (
    <Wrapper className={`${hidden && 'hidden'} ${toggle && 'toggle'}`}>
      <WeiboShareButton
        className="btn wb"
        url={shareUrl}
        title={`发现了一个好玩的游戏，用时${getTimeFormated(
          currTimeUsed,
          true
        )}，完成了挑战！前端图标千千万，快来试试连连看！`}
        image={`https://zerosoul.github.io/frontend-memo-game/static/logos/yarn.png`}
      >
        <img width="20" src={WeiboIcon} alt="Weibo share button" />
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

      {toggle ? (
        <>
          <i className="sep" />
          <div onClick={handleToggle} className="toggleBtn btn">
            {hidden ? `>>` : `<<`}
          </div>
        </>
      ) : null}
    </Wrapper>
  );
};

const mapStateToProps = store => {
  const { currTimeUsed } = store;
  return { currTimeUsed };
};

export default connect(mapStateToProps)(Share);
