import React, { PropsWithChildren } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const DataContainer = ({ children }: PropsWithChildren) => {
  return (
    <>
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

export default DataContainer;
