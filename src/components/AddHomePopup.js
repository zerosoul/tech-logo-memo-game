import React, { useState, useEffect } from 'react';
import AddHomeImage from '../assets/img/addHome.png';
import styled from 'styled-components';
import { FadeIn } from './Animates';
//Install this web app on your iPhone.

const Wrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  border: 1px solid #666;
  border-radius: 0.8rem;
  background: #fff;
  color: #222;
  line-height: 1.4;
  animation: ${FadeIn} 1s;
  animation-fill-mode: both;
  animation-delay: 2s;
  &:after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    margin-left: -0.9rem;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 1rem 1rem 0 1rem;
    border-color: #fff transparent transparent transparent;
  }
  .homeImage {
    width: 3rem;
    margin: 0.4rem auto;
    vertical-align: middle;
  }
  .close {
    cursor: pointer;
    color: #222;
    background: #ddd;
    position: absolute;
    top: -0.6rem;
    right: -0.6rem;
    width: 1.4rem;
    height: 1.4rem;
    font-size: 1rem;
    padding: 0.2rem;
    border: 1px solid #666;
    border-radius: 50%;
    text-align: center;
    line-height: 0.9;
  }
`;
let ua = window.navigator.userAgent;
let iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
let webkit = !!ua.match(/WebKit/i);
const MobileSafari = iOS && webkit && !ua.match(/CriOS/i) && !navigator.standalone;
const AddHomePopup = () => {
  const [clicked, setClicked] = useState(true);
  useEffect(() => {
    let clicked = !!Number(localStorage.getItem('IPHONE_ADD_HOME') || 0);
    setClicked(clicked);
  }, []);
  const handleCloseClick = () => {
    setClicked(true);
    localStorage.setItem('IPHONE_ADD_HOME', 1);
  };
  return MobileSafari && !clicked ? (
    <Wrapper>
      Install this web app on your iPhone.
      <i className="close" onClick={handleCloseClick}>
        X
      </i>
      <img className="homeImage" src={AddHomeImage} alt="add home image" />
    </Wrapper>
  ) : null;
};
export default AddHomePopup;
