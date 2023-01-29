import { Routes, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import NotFound404 from "./components/NotFound404";
import TransactionsBar from "./components/TransactionsBar";
import TransactionsTableChakra from "./components/TransactionsTable";
import Wallets from "./components/Wallets";
import WalletBar from "./components/WalletsBar";
import DataContainer from "./containers/DataCotrainer";
import ToolsContainer from "./containers/ToolsContainer";
import Authorization from "./pages/Authorization";
import Layout from "./pages/Layout";

const Main = styled.main`
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <Main>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Authorization />} /> */}
          <Route path="/" element={<Layout />}>
            <Route
              path="/wallets"
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
                  <TransactionsTableChakra />
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
