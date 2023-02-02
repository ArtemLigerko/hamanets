import { Flex } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import NotFound404 from "./components/NotFound404";
import TransactionsBar from "./components/TransactionsBar";
import TransactionsTableChakra from "./components/TransactionsTable";
import Wallets from "./components/Wallets";
import WalletBar from "./components/WalletsBar";
import DataContainer from "./containers/DataCotrainer";
import ToolsContainer from "./containers/ToolsContainer";
import Authorization from "./pages/Authorization";
import Layout from "./pages/Layout";
import { useAppSelector } from "./redux/hooks";

const App: React.FC = () => {
  const isAuth = useAppSelector((store) => store.user.authUser.isAuth);

  return (
    <Flex
      as="main"
      w="100%"
      h="100vh"
      // background="gray"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth ? <Layout /> : <Authorization />}>
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
    </Flex>
  );
};

export default App;
