import { keyframes } from 'styled-components';

export const FlipInY = keyframes`
from {
   transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
   animation-timing-function: ease-in;
   opacity: 0;
 }

 40% {
   transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
   animation-timing-function: ease-in;
 }

 60% {
   transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
   opacity: 1;
 }

 80% {
   transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
 }

 to {
   transform: perspective(400px);
 }
`;
export const Tada = keyframes`
from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;
