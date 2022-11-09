import React from "react";
import { Container } from "react-bootstrap";
import { ChildrenProps } from "../types";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const DataContainer = ({ children }: ChildrenProps) => {
  return (
    <>
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

export default DataContainer;
