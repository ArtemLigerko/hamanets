import React from "react";
import { Card } from "react-bootstrap";
import { useAppSelector } from "../redux/hooks";
// import "./Wallet.scss";
import styled from "styled-components";

const StyledCard = styled(Card)`
  margin: 3px;
`;

const Wallet: React.FC = () => {
  const wallets = useAppSelector(
    (store) => store.user.userData.users[0].capital.wallets
  );

  return (
    <>
      {wallets.length ? (
        wallets.map((wallet) => (
          <StyledCard
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
          </StyledCard>
        ))
      ) : (
        <div>No wallets</div>
      )}
    </>
  );
};

export default Wallet;
