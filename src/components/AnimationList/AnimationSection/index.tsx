import React, { FC, HTMLProps } from "react";
import styled from "styled-components";

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
`;

interface AnimationSectionProps extends HTMLProps<HTMLDivElement> {
  title: string;
  animations: string[];
}

const AnimationSection: FC<AnimationSectionProps> = ({
   className,
   title,
   animations
}) => (
  <Container className={className}>
    <Title>{title}</Title>
    <GroupList>{animations.map(item => (
      <GroupItem>
        {item}
      </GroupItem>
    ))}</GroupList>
  </Container>
)

export default AnimationSection;