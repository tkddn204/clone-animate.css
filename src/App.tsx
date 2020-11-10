import React, { FC } from 'react'
import styled from 'styled-components'

import Providers from './Providers'
import Layout from './components/Layout'
import Callout from './components/Callout'
import Footer from './components/Footer'
import AnimationList from './components/AnimationList'

import { animationGroups } from './components/Animation'

const AnimationArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fce5cd;
  width: 100%;
`

const AnimationSide = styled.aside`
  background: #f7d7b5;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 2.25rem;
  padding-right: 4rem;

  @media (min-width: 700px) {
    position: relative;
    left: auto;
    transform: none;
  }
`

const AppFooter = styled(Footer)`
  position: absolute;
  bottom: 1rem;
`

const App: FC = () => {
  return (
    <Providers>
      <Layout>
        <AnimationArticle>
          <Callout
            title="Clone-Animate.css"
            subTitle="Just-clone-water CSS animations"
          />
          <AppFooter />
        </AnimationArticle>
        <AnimationSide>
          <AnimationList animationGroups={animationGroups} />
        </AnimationSide>
      </Layout>
    </Providers>
  )
}

export default App
