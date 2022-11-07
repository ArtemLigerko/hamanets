import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import EnhancedTable from "./components/EnhancedTable";
import NotFound404 from "./components/NotFound404";
// import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<EnhancedTable />} />
            <Route path="*" element={<NotFound404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
