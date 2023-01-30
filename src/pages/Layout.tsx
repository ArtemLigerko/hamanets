import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import NavBar from "../components/NavBar";

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
  /* background-color: #d4d4d4; */
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: calc(100vh - 40px - 40px - 40px); */
`;

const Layout: React.FC<PropsWithChildren> = () => {
  return (
    <>
      <Window>
        <NavBar />
        <Main>
          <Center>
            <main>
              <Outlet />
            </main>
          </Center>
        </Main>
      </Window>
    </>
  );
};

export default Layout;
