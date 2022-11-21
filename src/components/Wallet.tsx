import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import styled from "styled-components";
import { userActions } from "../redux/reducers/user";

const StyledCard = styled(Card)`
  margin: 3px;
  width: 16rem;
`;

const Wallet: React.FC = () => {
  const wallets = useAppSelector(
    (store) => store.user.userData.capital.wallets
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.calcWalletTotal());
  }, []);

  return (
    <>
      {wallets.length ? (
        wallets.map((wallet) => (
          <StyledCard className="card" key={wallet.id} border="dark">
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
