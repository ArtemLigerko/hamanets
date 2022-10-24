import React from "react";
import { Card } from "react-bootstrap";

const Wallet = () => {
  return (
    <>
      <Card border="dark" style={{ width: "24rem" }}>
        <Card.Header>Card</Card.Header>
        <Card.Body>
          <Card.Text>Продукти</Card.Text>
          <Card.Title>- 1000.00 грн</Card.Title>
          <Card.Text>Якась інфа </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
};

export default Wallet;
