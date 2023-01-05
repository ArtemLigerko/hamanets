import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import NotFound404 from "./components/NotFound404";
import TransactionsBar from "./components/TransactionsBar";
import TransactionsTable from "./components/TransactionsTable";
import Wallets from "./components/Wallets";
import WalletBar from "./components/WalletsBar";
import DataContainer from "./containers/DataCotrainer";
import ToolsContainer from "./containers/ToolsContainer";
import Layout from "./pages/Layout";
import { instanceTest } from "./services/api";

const Main = styled.main`
  width: 100%;
`;

const App: React.FC = () => {
  useEffect((): void => {
    console.log("testing...");
    console.log(process.env.REACT_APP_SERVER_URL);
    instanceTest();
  }, []);

  return (
    <Main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                <>
                  <ToolsContainer>
                    <WalletBar />
                  </ToolsContainer>
                  <DataContainer>
                    <Wallets />
                  </DataContainer>
                </>
              }
            />
            <Route
              path="/transactions"
              index
              element={
                <>
                  <ToolsContainer>
                    <TransactionsBar />
                  </ToolsContainer>
                  <TransactionsTable />
                </>
              }
            />
            <Route
              path="*"
              element={
                <DataContainer>
                  <NotFound404 />
                </DataContainer>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Main>
  );
};

export default App;
