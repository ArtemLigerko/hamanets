import { Flex } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import NotFound404 from "./components/NotFound404";
import Reports from "./components/Reports";
import TransactionsBar from "./components/TransactionsBar";
import TransactionsTableChakra from "./components/TransactionsTable";
import Wallets from "./components/Wallets";
import WalletBar from "./components/WalletsBar";
import ToolsContainer from "./containers/ToolsContainer";
import Authorization from "./pages/Authorization";
import Layout from "./pages/Layout";
import { useAppSelector } from "./redux/hooks";

const App: React.FC = () => {
  const isAuth = useAppSelector((store) => store.user.authUser.isAuth);

  return (
    <Flex as="main" w="100%" h="100vh">
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
                  <Wallets />
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
            <Route path="*" element={<Reports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Flex>
  );
};

export default App;
