import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import WalletForm from "./modal/WalletForm";

const StyledButton = styled(Button)`
  margin: 0 5px !important;
`;

const WalletBar = () => {
  return (
    <>
      <WalletForm
        title="Створити новий рахунок"
        button="Новий рахунок"
        isSpend={false}
      />
    </>
  );
};

export default WalletBar;
