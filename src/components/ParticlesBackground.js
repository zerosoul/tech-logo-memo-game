import React from 'react';
import Particles from 'react-particles-js';
import styled, { createGlobalStyle } from 'styled-components';

const BodyRelative = createGlobalStyle`
body{
  position:relative;
}
`;

const Wrapper = styled.div`
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Background = () => {
  return (
    <>
      <BodyRelative />
      <Wrapper>
        <Particles
          className="background"
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 1500
                }
              },
              line_linked: {
                enable: true,
                opacity: 0.08
              },
              move: {
                direction: 'right',
                speed: 0.1
              },
              size: {
                value: 1
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.08
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
      </Wrapper>
    </>
  );
};
export default Background;
