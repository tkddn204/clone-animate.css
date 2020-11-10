import { css, keyframes } from 'styled-components'

const ShakeKeyframes = keyframes`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`

const ShakeCSS = css`
  animation-name: ${ShakeKeyframes};
`

export default ShakeCSS
