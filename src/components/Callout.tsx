import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4.2rem;
  color: #351c75;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #e69138;
  margin: 0
`;

interface CalloutProps {
  title: string
  subTitle: string
}

const Callout: FC<CalloutProps> = ({ title, subTitle }) => (
  <Container>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
  </Container>
)

export default Callout;