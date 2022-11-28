import React, { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import styled from "styled-components";
import { userActions } from "../redux/reducers/user";
import ConfirmUniversal from "./modal/ConfirmUniversal";

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

  const handleDelWallet = (id: string): void => {
    const walletIndex = wallets.findIndex((wallet) => wallet.id === id);
    dispatch(userActions.delWallet(walletIndex));
  };

  const handleEditWallet = (id: string): void => {
    const walletIndex = wallets.findIndex((wallet) => wallet.id === id);

    // dispatch(userActions.delWallet(walletIndex));
  };

  return (
    <>
      <Container fluid className="fluid ms">
        {wallets.length ? (
          wallets.map((wallet) => (
            <StyledCard className="card" key={wallet.id} border="dark">
              <Card.Header className="d-flex justify-content-between">
                <span>{wallet.walletName}</span>
                <div>
                  <Button
                    variant="primary"
                    onClick={() => handleEditWallet(wallet.id)}
                  >
                    edit
                  </Button>
                  <ConfirmUniversal
                    buttonName="del"
                    title="Видалення рахунку"
                    body="Ви впевнені у видаленні рахунку?"
                    handleOk={() => handleDelWallet(wallet.id)}
                  />
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title>{wallet.total}</Card.Title>
                <Card.Text>Якась інфа </Card.Text>
              </Card.Body>
            </StyledCard>
          ))
        ) : (
          <div>No wallets</div>
        )}
      </Container>
    </>
  );
};

export default Wallet;
