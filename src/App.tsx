import React, { FC } from 'react';
import styled from 'styled-components';

import Providers from './Providers';
import Layout from './components/Layout';
import Callout from './components/Callout';
import Footer from './components/Footer';
import AnimationList from './components/AnimationList';

import data from './data.json';

const AnimationArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fce5cd;
  width: 75%;
`

const AnimationSide = styled.aside`
  background: #f7d7b5;
  width: 25%;
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
          <AnimationList animationGroups={data.animationGroups} />
        </AnimationSide>
      </Layout>
    </Providers>
  );
}

export default App;
