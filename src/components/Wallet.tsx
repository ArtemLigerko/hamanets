import React from "react";
import { Card } from "react-bootstrap";
import { useAppSelector } from "../redux/hooks";
import "./Wallet.scss";

const Wallet: React.FC = () => {
  const wallets = useAppSelector((store) => store.user.capital.wallets);

  return (
    <>
      {wallets.length ? (
        wallets.map((wallet) => (
          <Card
            className="card"
            key={wallet.id}
            border="dark"
            style={{ width: "16rem" }}
          >
            <Card.Header>{wallet.walletName}</Card.Header>
            <Card.Body>
              <Card.Title>{wallet.total}</Card.Title>
              <Card.Text>Якась інфа </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <div>No wallets</div>
      )}
    </>
  );
};

export default Wallet;
