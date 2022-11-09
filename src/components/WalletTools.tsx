import React from "react";
// import { Button, Container, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { useAppDispatch } from "../redux/hooks";
import { userActions } from "../redux/reducers/user";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)`
  margin: 0 5px !important;
`;

const TransactionsTools = () => {
  return (
    <>
      <StyledButton variant="contained">Add wallet</StyledButton>
      <StyledButton variant="contained">Edit Wallet</StyledButton>
      <StyledButton variant="contained">Delete Wallet</StyledButton>
    </>
  );
};

export default TransactionsTools;
