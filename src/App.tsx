import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import TransactionsTable from "./components/TransactionsTable";
import NotFound404 from "./components/NotFound404";
import Wallet from "./components/Wallet";
import WalletTools from "./components/WalletTools";
import DataContainer from "./containers/DataCotrainer";
import ToolsContainer from "./containers/ToolsContainer";
import TransactionsTools from "./components/TransactionsTools";
import SpendingInputForm from "./components/modal/SpendingForm";
// import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <>
                  <ToolsContainer>
                    <TransactionsTools />
                  </ToolsContainer>
                  <TransactionsTable />
                </>
              }
            />
            <Route
              path="/accounts"
              element={
                <>
                  <ToolsContainer>
                    <WalletTools />
                  </ToolsContainer>

                  <DataContainer>
                    <Wallet />
                  </DataContainer>
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
    </>
  );
};

export default App;
