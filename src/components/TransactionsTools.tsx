import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../redux/hooks";
import { userActions } from "../redux/reducers/user";
import Button from "@mui/material/Button";
import TransactionForm from "./modal/TransactionForm";

export const StyledButton = styled(Button)`
  margin: 0 5px !important;
`;

const TransactionsTools = () => {
  const dispatch = useAppDispatch();

  const handleGetUserData = () => {
    dispatch(userActions.getUser());
  };

  const handleClearUserData = () => {
    dispatch(userActions.clearUser());
  };

  return (
    <>
      <StyledButton variant="contained" onClick={handleGetUserData}>
        Завантажити дані
      </StyledButton>
      <StyledButton variant="contained" onClick={handleClearUserData}>
        Видалити дані
      </StyledButton>
      <TransactionForm
        title="Введіть витрати"
        button="Додати витрати"
        isSpend={true}
      />
      <TransactionForm
        title="Введіть прибуток"
        button="Додати прибуток"
        isSpend={false}
      />
    </>
  );
};

export default TransactionsTools;
