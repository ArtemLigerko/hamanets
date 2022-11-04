import EnhancedTable from "./components/EnhancedTable";
import TransactionTable from "./components/TransactionTable";
import Layout from "./pages/Layout";

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <EnhancedTable />
        {/* <TransactionTable /> */}
      </Layout>
    </>
  );
};

export default App;
