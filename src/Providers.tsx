import React, { ReactElement, StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

import store from './store'

const GlobalStyle = createGlobalStyle`
    ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    line-height: 1.4;
    color: #333;
    margin: 0;
    padding: 0;
    word-break: keep-all;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul, li, ol {
    list-style: none;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`

interface Props {
  children: ReactElement
}
export default function Providers({ children }: Props): ReactElement {
  return (
    <StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        {children}
      </Provider>
    </StrictMode>
  )
}
