import { Button, Stack } from "@chakra-ui/react";

import TransactionFormChakra from "./modal/TransactionsForm";

const TransactionsBar = () => {
  return (
    <>
      <Stack spacing="2" direction="row" align="center">
        <TransactionFormChakra
          title="Введіть витрати"
          button="додати витрати"
          isSpend
        />
        <TransactionFormChakra
          title="Введіть прибуток"
          button="додати прибуток"
          isSpend={false}
        />
      </Stack>
    </>
  );
};

export default TransactionsBar;
