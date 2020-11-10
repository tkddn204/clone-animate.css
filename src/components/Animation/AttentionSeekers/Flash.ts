import { css, keyframes } from 'styled-components'

const FlashKeyframes = keyframes`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`

const FlashCSS = css`
  animation-name: ${FlashKeyframes};
`

export default FlashCSS
