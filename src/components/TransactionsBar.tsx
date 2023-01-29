// import Button from "@mui/material/Button";

import TransactionForm from "./modal/TransactionForm";
import ToolsbarButton from "./UI/ToolsbarButton/ToolsbarButton";

const TransactionsBar = () => {
  return (
    <>
      <TransactionForm
        title="Введіть витрати"
        button="Додати витрати"
        isSpend
      />
      <TransactionForm
        title="Введіть прибуток"
        button="Додати прибуток"
        isSpend={false}
      />
      <button>Видалити всі транзакції</button>
      {/* <ToolsbarButton>Видалити всі транзакції</ToolsbarButton> */}
    </>
  );
};

export default TransactionsBar;
