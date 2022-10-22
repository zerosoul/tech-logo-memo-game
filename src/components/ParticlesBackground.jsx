import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';

const P = styled(Particles)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  canvas {
    width: 100%;
    height: 100%;
  }
`;

const Background = () => {
  const { width, height } = window.screen;
  console.log('www', width, height, document.querySelector('canvas'));

  return (
    <P
      width={width}
      height={height}
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 1500
            }
          },
          line_linked: {
            enable: true,
            opacity: 0.1
          },
          move: {
            direction: 'right',
            speed: 0.2
          },
          size: {
            value: 2
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1
            }
          }
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push'
            }
          },
          modes: {
            push: {
              particles_nb: 1
            }
          }
        },
        retina_detect: true
      }}
    />
  );
};
export default Background;
