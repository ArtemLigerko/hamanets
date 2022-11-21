import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import WalletForm from "./modal/WalletForm";

const StyledButton = styled(Button)`
  margin: 0 5px !important;
`;

const TransactionsTools = () => {
  return (
    <>
      <WalletForm
        title="Створити новий рахунок"
        button="Новий рахунок"
        isSpend={false}
      />
      <StyledButton variant="contained">Add wallet</StyledButton>
      <StyledButton variant="contained">Edit Wallet</StyledButton>
      <StyledButton variant="contained">Delete Wallet</StyledButton>
    </>
  );
};

export default TransactionsTools;
