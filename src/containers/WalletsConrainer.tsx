import React from "react";
import { Container } from "react-bootstrap";
import { ChildrenProps } from "../types";
import "./WalletContainer.scss";

const WalletsConrainer = ({ children }: ChildrenProps) => {
  return (
    <>
      <header>Wallets:</header>
      <Container className="walletContainer">{children}</Container>
    </>
  );
};

export default WalletsConrainer;
