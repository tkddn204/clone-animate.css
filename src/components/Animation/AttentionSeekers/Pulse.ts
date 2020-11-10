import { css, keyframes } from 'styled-components'

const PulseKeyframes = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`

const PulseCSS = css`
  animation-timing-function: ease-in-out;
  animation-name: ${PulseKeyframes};
`

export default PulseCSS
