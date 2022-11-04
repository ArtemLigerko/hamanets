import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { useAppDispatch } from "../redux/hooks";
import { userActions } from "../redux/reducers/user";

const StyledToolsPanel = styled.header`
  background-color: #96daa5;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`;

const Span = styled.header`
  margin: 0 5px;
`;

const ToolsPanel = () => {
  const dispatch = useAppDispatch();

  const handleGetUserData = () => {
    dispatch(userActions.getUser());
    // console.log(user.isLoading ? "loading" : user);
  };

  return (
    <StyledToolsPanel>
      <Span>Tools Panrl</Span>
      <Span>
        <Button onClick={handleGetUserData}>Get user data</Button>
      </Span>
    </StyledToolsPanel>
  );
};

export default ToolsPanel;
