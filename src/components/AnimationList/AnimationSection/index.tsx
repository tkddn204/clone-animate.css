import React, { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import styled from "styled-components";
import { processAnimationAction } from "../../../store/calloutAnimation/actions";

const Container = styled.section`
  width: 100%;
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.1em;
`;

const GroupList = styled.ul`
  margin: 0;
  margin-block: 0;
  padding-inline-start: 0;
`;

const GroupItem = styled.li`
  font-size: 1.1rem;
  display: block;
  cursor: pointer;
`;

interface OwnProps {
  className?: string;
  title: string;
  animations: string[];
  onClickAnimation?: (animation: string) => void
}

export type AnimationSectionProps = Partial<PropsFromRedux> & OwnProps

export const AnimationSection: FC<AnimationSectionProps> = ({
   className,
   title,
   animations,
   onClickAnimation
}) => (
  <Container className={className}>
    <Title>{title}</Title>
    <GroupList>{animations.map(animation => (
      <GroupItem key={animation} onClick={onClickAnimation?.bind(null, animation)}>
        {animation}
      </GroupItem>
    ))}</GroupList>
  </Container>
)

const mapDispatch = {
  onClickAnimation: (animation: string) => (processAnimationAction(animation))
};
const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AnimationSection);