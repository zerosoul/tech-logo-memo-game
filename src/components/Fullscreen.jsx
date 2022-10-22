import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FullImage from '../assets/img/fs.png';
import ExitFullImage from '../assets/img/efs.png';

const Wrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  width: 1.6rem;
  height: 1.6rem;
  background-image: url(${({ fullscreen }) => (fullscreen ? ExitFullImage : FullImage)});
  background-size: cover;
  opacity: 0.5;
  background-color: rgb(97, 93, 135);
  padding: 0.3rem;
  background-origin: content-box;
  background-repeat: no-repeat;
  border-radius: 0.4rem;
`;
const Fullscreen = () => {
  const [fullscreen, setFullscreen] = useState(false);
  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        setFullscreen(true);
        // The browser is in full-screen mode, with document.fullscreenElement
        // being the element presented full-screen.
      } else {
        setFullscreen(false);
      }
    });
  }, [fullscreen]);
  const handleClick = () => {
    if (!fullscreen) {
      document.body.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  return <Wrapper fullscreen={fullscreen} onClick={handleClick} />;
};

export default Fullscreen;
