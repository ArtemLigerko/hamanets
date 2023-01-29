import { Button, Stack } from "@chakra-ui/react";

import TransactionForm from "./modal/TransactionForm";

const TransactionsBar = () => {
  return (
    <>
      <Stack spacing="2" direction="row" align="center">
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
        <Button size="sm">Видалити всі транзакції</Button>
        {/* <ToolsbarButton>Видалити всі транзакції</ToolsbarButton> */}
      </Stack>
    </>
  );
};

export default TransactionsBar;
