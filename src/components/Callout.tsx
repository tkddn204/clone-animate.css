import parseTime from 'parse-duration'
import React, { FC, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import styled, { CSSObject } from 'styled-components'
import { RootState } from '../store'
import { idleAnimationAction } from '../store/calloutAnimation/actions'
import { AnimationCSS, getAnimationCSS } from './Animation'

interface AnimationProps {
  animationDuration?: string
  animation?: AnimationCSS
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Title = styled.h1<AnimationProps>`
  font-size: 4.2rem;
  color: #351c75;
  margin: 0;

  animation-duration: ${(props) => props.animationDuration || '1s'};
  animation-fill-mode: both;
  ${(props) => props.animation as CSSObject}
`

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #e69138;
  margin: 0;
`

interface OwnProps {
  className?: string
  title: string
  subTitle: string
}
export type CalloutProps = Partial<PropsFromRedux> & OwnProps

const Callout: FC<CalloutProps> = ({
  className,
  animation,
  title,
  subTitle,
  onAnimationFinish,
}) => {
  const animationDuration = parseTime(animation?.duration || '1000') || 1000
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (animation?.state === 'process' && onAnimationFinish) {
        onAnimationFinish()
      }
    }, animationDuration)
    return () => {
      clearTimeout(timeout)
    }
  }, [animation])

  return (
    <Container>
      <Title
        className={className}
        animationDuration={animation?.duration}
        animation={getAnimationCSS(animation?.context, animationDuration)}
      >
        {title}
      </Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  )
}

const mapStateToProps = (state: RootState) => ({
  animation: state.animation,
})
const mapDispatch = {
  onAnimationFinish: () => idleAnimationAction(),
}
const connector = connect(mapStateToProps, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(Callout)
