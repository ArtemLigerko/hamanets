import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import { ChildrenProps } from "../types";

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
