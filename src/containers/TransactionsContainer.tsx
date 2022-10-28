import React from "react";
import { Container } from "react-bootstrap";
import { ChildrenProps } from "../types";
import "./TransactionsContainer.scss";

const TransactionsContainer = ({ children }: ChildrenProps) => {
  return (
    <>
      <header>Transactions:</header>
      <Container className="transactionsContainer">{children}</Container>
    </>
  );
};

export default TransactionsContainer;