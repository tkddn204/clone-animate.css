import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import AnimationList, { AnimationListProps } from '../components/AnimationList'
import { animationGroups } from '../components/Animation'

export default {
  title: 'Components/AnimationList',
  component: AnimationList,
} as Meta

type StoryProps = AnimationListProps

export const DefaultAnimationList: Story<StoryProps> = ({
  animationGroups,
}) => <AnimationList animationGroups={animationGroups} />
DefaultAnimationList.args = {
  animationGroups,
}
