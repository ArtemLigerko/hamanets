import React from "react";
import { Container } from "react-bootstrap";

interface Props {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const WalletsConrainer = ({ children }: Props) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default WalletsConrainer;
