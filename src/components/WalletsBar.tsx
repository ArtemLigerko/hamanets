import { Stack } from "@chakra-ui/react";

import WalletForm from "./modal/WalletForm";

const WalletBar = () => {
  return (
    <>
      <Stack spacing="2" direction="row" align="center">
        <WalletForm />
      </Stack>
    </>
  );
};

export default WalletBar;
