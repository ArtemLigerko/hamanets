import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../redux/hooks";
import { userActions } from "../redux/reducers/user";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import ModalUniversal from "./ModalUniversal";
import SpendingForm from "./SpendingForm";

export const StyledButton = styled(Button)`
  margin: 0 5px !important;
`;

const TransactionsTools = () => {
  const dispatch = useAppDispatch();

  const handleGetUserData = () => {
    dispatch(userActions.getUser());
    // console.log(user.isLoading ? "loading" : user);
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
