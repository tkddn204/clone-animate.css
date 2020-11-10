import { css, keyframes } from 'styled-components'
import { AnimationCSS } from '..'

const HeartBeatKeyframes = keyframes`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`

const HeartBeatCSS: AnimationCSS = (duration = 1000) => css`
  animation-timing-function: ease-in-out;
  animation-duration: calc(${duration} * 1.3);
  animation-name: ${HeartBeatKeyframes};
`

export default HeartBeatCSS
