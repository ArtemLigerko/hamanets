import React, { memo, useEffect } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { PencilSquare, XSquare } from "react-bootstrap-icons";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { walletsActions } from "../redux/reducers/wallets";
import { currencyFormat } from "../services/currencyFormat";
import ConfirmUniversal from "./modal/ConfirmUniversal";

const StyledCard = styled(Card)`
  margin: 3px;
  width: 85.6mm;
  height: 53.98mm;
`;

const StyledButton = styled(Button)`
  height: 30px;
  width: 30px;
`;

const Wallet: React.FC = () => {
  const wallets = useAppSelector((store) => store.wallets.wallets.docs);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(walletsActions.getWallets());
  }, []);

  const handleDelWallet = (id: string): void => {
    dispatch(walletsActions.deleteWallets(id));
  };

  const handleEditWallet = (id: string): void => {
    const walletIndex = wallets.findIndex((wallet) => wallet.id === id);
  };

  const actionButton = (
    <StyledButton
      variant="primary"
      className="p-0 mx-0 d-flex justify-content-center align-items-center"
    >
      <XSquare />
    </StyledButton>
  );

  return (
    <>
      <Container fluid="xs">
        <Row className="d-xl-flex justify-content-center">
          {wallets.length ? (
            wallets.map((wallet) => (
              <StyledCard className="card" key={wallet.id} border="dark">
                <Card.Header className="d-flex justify-content-between">
                  <div className="fs-5 fw-normal d-flex justify-content-center align-items-center">
                    {wallet.walletName}
                  </div>

                  <div className="d-flex justify-content-center align-items-center">
                    <StyledButton
                      className="p-0 mx-1 d-flex justify-content-center align-items-center"
                      variant="primary"
                      onClick={() => handleEditWallet(wallet.id)}
                    >
                      <PencilSquare />
                    </StyledButton>
                    <ConfirmUniversal
                      actionButton={actionButton}
                      title="Видалення рахунку!"
                      content="Ви впевнені у видаленні рахунку?"
                      handleOk={() => handleDelWallet(wallet.id)}
                    />
                  </div>
                </Card.Header>
                <Card.Body>
                  <Card.Title className="fs-2">
                    {currencyFormat(wallet.total)}
                  </Card.Title>
                  <Card.Text>
                    {new Date(wallet.createdAt).toLocaleDateString()}
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            ))
          ) : (
            <div>No wallets</div>
          )}
        </Row>
      </Container>
    </>
  );
};

export default memo(Wallet);
