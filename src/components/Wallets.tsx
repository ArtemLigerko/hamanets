import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Flex,
  Divider,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { walletsActions } from "../redux/reducers/wallets";
import { currencyFormat } from "../services/currencyFormat";
import { toLocalDate } from "../services/localDateTime";
import AlertDialogExample from "./modal/AlertDialog";
import ConfirmUniversal from "./modal/ConfirmUniversal";

const Wallet: React.FC = () => {
  const wallets = useAppSelector((store) => store.wallets.wallets.docs);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(walletsActions.getWallets());
  }, []);

  const handleDelWallet = async (id: string) => {
    await dispatch(walletsActions.deleteWallets(id));
    dispatch(walletsActions.getWallets());
  };

  const handleEditWallet = (id: string): void => {
    const walletIndex = wallets.findIndex((wallet) => wallet.id === id);
  };

  const actionButton = (
    <Button>
      <DeleteIcon />
    </Button>
  );

  return (
    <>
      <Flex flexWrap="wrap" justify="center">
        {wallets.length ? (
          wallets.map((wallet) => (
            <Card
              key={wallet.id}
              w="85.6mm"
              h="53.98mm"
              m="2"
              border="1px"
              borderColor="gray.200"
              boxShadow="xl"
            >
              <CardHeader
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Heading as="h1" size="md" noOfLines={1}>
                  {wallet.walletName}
                </Heading>

                <div>
                  <ConfirmUniversal
                    actionButton={actionButton}
                    title="Видалення рахунку!"
                    content="Ви впевнені у видаленні рахунку?"
                    handleOk={() => handleDelWallet(wallet.id)}
                  />
                </div>
                <AlertDialogExample />
              </CardHeader>
              <Divider color="grey" />
              <CardBody>
                <Heading mb="6" size="lg">
                  {currencyFormat(wallet.total)}
                </Heading>
                <Text>{toLocalDate(wallet.createdAt)}</Text>
              </CardBody>
            </Card>
          ))
        ) : (
          <div>No wallets</div>
        )}
      </Flex>
    </>
  );
};

export default Wallet;
