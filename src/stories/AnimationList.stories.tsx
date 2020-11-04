import React from 'react';
import faker from 'faker';
import { Story, Meta } from '@storybook/react/types-6-0';
import AnimationList, { AnimationListProps } from '../components/AnimationList';
import { AnimationGroupList } from '../typing';

export default {
  title: "Components/AnimationList",
  component: AnimationList,
} as Meta;

type StoryProps = AnimationListProps;

const createRandomAnimations = () => new Array(faker.random.number({ min: 3, max: 10 }))
.fill(undefined)
.map(_ => faker.lorem.word());
const createAnimationArray: (num?: number) => AnimationGroupList = (num: number = 5) =>
  new Array(num).fill(undefined).map(_ => ({
    title: faker.name.title(),
    animations: createRandomAnimations()
  }));
export const DefaultAnimationList: Story<StoryProps> = ({animationGroups}) => 
  <AnimationList animationGroups={animationGroups} />
DefaultAnimationList.args = {
  animationGroups: createAnimationArray()
}
