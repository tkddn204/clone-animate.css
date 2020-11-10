import React, { FC, HTMLProps } from 'react'
import styled from 'styled-components'

const Container = styled.section`
  text-align: center;
  font-size: 0.8rem;
`

const Content = styled.p``

const Link = styled.a``

const Footer: FC<HTMLProps<HTMLDivElement>> = ({ className }) => (
  <Container className={className}>
    <Content>
      Made by{' '}
      <Link href="https://github.com/tkddn204" target="_blank">
        Rightpair
      </Link>{' '}
      and Referenced by{' '}
      <Link href="https://animate.style/" target="_blank">
        Animate.css
      </Link>
    </Content>
  </Container>
)

export default Footer
