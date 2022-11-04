import React from "react";
import { ChildrenProps } from "../types";
import styled from "styled-components";
import ToolsPanel from "../components/ToolsPanel";
import MainMenu from "../components/MainMenu";
import LeftMenuPanel from "../components/LeftMenuPanel";

const Window = styled.div`
  /* background-color: #ffffff; */
  width: 100%;
  height: 100vh;
`;

const Middle = styled.div`
  /* background-color: white; */
  display: flex;
  width: 100%;
  height: calc(100vh - 40px - 40px - 40px);
`;

const LeftMenu = styled.div`
  background-color: #d8d8d8;
  width: 300px;
  height: 100%;
`;

const Calendar = styled.header`
  background-color: #da96c9;
  width: 100%;
  height: 300px;
`;

const Filters = styled.header`
  background-color: #b696da;
  width: 100%;
  height: calc(100vh - 40px - 40px - 300px - 40px);
`;

const Footer = styled.header`
  background-color: #e9bd98;
  width: 100%;
  height: 40px;
`;

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Window>
        {/* <LeftMenuPanel /> */}
        <MainMenu />
        <ToolsPanel />
        <Middle>
          <LeftMenu>
            <Calendar>Calendar</Calendar>
            <Filters>Filters</Filters>
          </LeftMenu>
          <main>{children}</main>
        </Middle>
        <Footer>footer</Footer>
      </Window>
    </>
  );
};

export default Layout;
