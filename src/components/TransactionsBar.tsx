import Button from "@mui/material/Button";
import styled from "styled-components";

import TransactionForm from "./modal/TransactionForm";

export const StyledButton = styled(Button)`
  margin: 0 5px !important;
`;

const TransactionsBar = () => {
  return (
    <>
      <TransactionForm
        title="Введіть прибуток"
        button="Додати прибуток"
        isSpend={false}
      />
      <TransactionForm
        title="Введіть витрати"
        button="Додати витрати"
        isSpend
      />
    </>
  );
};

export default TransactionsBar;
