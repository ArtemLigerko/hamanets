import { AddIcon, DeleteIcon, HamburgerIcon } from "@chakra-ui/icons";
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
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { walletsActions } from "../redux/reducers/wallets";
import { currencyFormat } from "../services/currencyFormat";
import { toLocalDate } from "../services/localDateTime";
import ConfirmDialog from "./modal/ConfirmDialogUniversal";

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

  const actionButton = (
    <MenuItem icon={<DeleteIcon />} color="gray.600">
      Видалити рахунок
    </MenuItem>
  );

  return (
    <>
      <Flex justify="center" flexWrap="wrap" w="100%" mt="90px">
        {wallets.length ? (
          wallets.map((wallet) => (
            <Card
              key={wallet._id}
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
                color="gray.600"
              >
                <Heading as="h1" size="md" noOfLines={1}>
                  {wallet.walletName}
                </Heading>

                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                  />
                  <MenuList>
                    <ConfirmDialog
                      actionButton={actionButton}
                      title="Видалення рахунку!"
                      body="Ви впевнені? Назад повернути не можна буде!"
                      okButton="Видалити"
                      okButtonColorScheme="red"
                      cancelButton="Відмінити"
                      handleOk={() => handleDelWallet(wallet._id)}
                    />
                  </MenuList>
                </Menu>
              </CardHeader>
              <Divider color="grey" />
              <CardBody>
                <Heading mb="6" size="lg" color="blue.600">
                  {currencyFormat(wallet.total)}
                </Heading>
                <Text pt="2" color="gray.500">
                  Створено: {toLocalDate(wallet.createdAt)}
                </Text>
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
