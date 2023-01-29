import { Stack } from "@chakra-ui/react";

import WalletForm from "./modal/WalletForm";
import WalletFormChakra from "./modal/WalletForm.chakra";

const WalletBar = () => {
  return (
    <>
      <Stack spacing="2" direction="row" align="center">
        <WalletFormChakra />
        <WalletForm title="Створити новий рахунок" button="Новий рахунок" />
      </Stack>
    </>
  );
};

export default WalletBar;
