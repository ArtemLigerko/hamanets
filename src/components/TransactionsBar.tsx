import { Button, Stack } from "@chakra-ui/react";

import TransactionForm from "./modal/TransactionsForm";

const TransactionsBar = () => {
  return (
    <>
      <Stack spacing="2" direction="row" align="center">
        <TransactionForm
          title="Введіть витрати"
          button="додати витрати"
          isSpend
        />
        <TransactionForm
          title="Введіть прибуток"
          button="додати прибуток"
          isSpend={false}
        />
      </Stack>
    </>
  );
};

export default TransactionsBar;
