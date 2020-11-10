import React, { FC, Fragment, HTMLProps } from 'react'
import { AnimationGroupList } from '../../typing'
import AnimationSection from './AnimationSection'

export interface AnimationListProps extends HTMLProps<HTMLDivElement> {
  animationGroups: AnimationGroupList
}

const AnimationList: FC<AnimationListProps> = ({ animationGroups }) => (
  <Fragment>
    {animationGroups.map((animationGroup) => (
      <AnimationSection
        key={animationGroup.title}
        title={animationGroup.title}
        animations={animationGroup.animations}
      />
    ))}
  </Fragment>
)

export default AnimationList
