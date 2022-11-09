import React from "react";
import { ChildrenProps } from "../types";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import ToolsContainer from "../containers/ToolsContainer";
import TransactionsTools from "../components/TransactionsTools";
import WalletTools from "../components/WalletTools";

const Window = styled.div`
  /* background-color: #ffffff; */
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  /* background-color: white; */
  display: flex;
  width: 100%;
  height: calc(100vh - 40px - 40px - 40px);
`;

const Center = styled.div`
  background-color: #d4d4d4;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: calc(100vh - 40px - 40px - 40px); */
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

const Layout: React.FC<ChildrenProps> = () => {
  return (
    <>
      <Window>
        <NavBar />
        <Main>
          <LeftMenu>
            <Calendar>Calendar</Calendar>
            <Filters>Filters</Filters>
          </LeftMenu>
          <Center>
            {/* <ToolsContainer>
              <TransactionsTools />
              <WalletTools />
            </ToolsContainer> */}
            <main>
              <Outlet />
            </main>
          </Center>
        </Main>
        <Footer>footer</Footer>
      </Window>
    </>
  );
};

export default Layout;