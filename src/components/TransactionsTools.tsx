import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../redux/hooks";
import { userActions } from "../redux/reducers/user";
import Button from "@mui/material/Button";
import SpendingForm from "./SpendingForm";

export const StyledButton = styled(Button)`
  margin: 0 5px !important;
`;

const TransactionsTools = () => {
  const dispatch = useAppDispatch();

  const handleGetUserData = () => {
    dispatch(userActions.getUser());
  };

  return (
    <>
      <StyledButton variant="contained" onClick={handleGetUserData}>
        Get user data
      </StyledButton>
      <SpendingForm />
    </>
  );
};

export default TransactionsTools;
