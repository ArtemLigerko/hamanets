import { Navbar } from "react-bootstrap";
import styled from "styled-components";

import { ChildrenProps } from "../types";

const StyledToolsPanel = styled.header`
  background-color: #96daa5;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

const Span = styled.header`
  margin: 0 5px;
`;

const ToolsContainer = ({ children }: ChildrenProps) => {
  return (
    <Navbar sticky="top">
      <StyledToolsPanel>
        <Span>Tools Bar</Span>
        <Span>{children}</Span>
      </StyledToolsPanel>
    </Navbar>
  );
};

export default ToolsContainer;
