import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Callout, { CalloutProps } from '../components/Callout';

export default {
  title: "Components/Callout",
  component: Callout,
} as Meta;

type StoryProps = CalloutProps;

export const DefaultCallout: Story<StoryProps> = ({title, subTitle}) => 
  <Callout title={title} subTitle={subTitle} />
