import React from "react";
import { Container } from "react-bootstrap";
import { ChildrenProps } from "../types";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const WalletsContainer = ({ children }: ChildrenProps) => {
  return (
    <>
      <header>Wallets:</header>
      <StyledContainer className="walletContainer">{children}</StyledContainer>
    </>
  );
};

export default WalletsContainer;
