import React, { FC, HTMLProps } from "react";
import styled from "styled-components";
import { AnimationGroupList } from "../../typing";
import AnimationSection from "./AnimationSection";

const Container = styled.section`
  width: 100%;
  padding: 2rem;
`;

export interface AnimationListProps extends HTMLProps<HTMLDivElement> {
  animationGroups: AnimationGroupList
}

const AnimationList: FC<AnimationListProps> = ({
   className,
   animationGroups: animationGroupList
}) => (
  <Container className={className}>
    {animationGroupList.map(animationGroup => 
      <AnimationSection 
        title={animationGroup.title} 
        animations={animationGroup.animations}
      />
    )}
  </Container>
)

export default AnimationList;