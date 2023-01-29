import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { transactionsActions } from "../redux/reducers/transactions";

const TransactionsTableChakra = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(transactionsActions.getTransactions());
  }, []);

  const transactions = useAppSelector(
    (state) => state.transactions.transactions.docs
  );
  console.log(transactions);

  const transactionsError = useAppSelector(
    (state) => state.transactions.transactions.error
  );

  const TableHead = () => {
    return (
      <Tr>
        <Th>Дата</Th>
        <Th>Тип операції</Th>
        <Th>Рахунок</Th>
        <Th>Стаття</Th>
        <Th isNumeric>Сумма</Th>
      </Tr>
    );
  };

  return (
    <>
      <TableContainer>
        <TableContainer>
          <Table variant="striped" colorScheme="teal" size="sm">
            <TableCaption>Imperial to metric conversion factors</TableCaption>

            <TableHead />
            <Tbody>
              {transactions.map((el) => {
                return (
                  <Tr key={el.id}>
                    <Td>{el.createdAt}</Td>
                    <Td>{el.type}</Td>
                    <Td>{el.walletName}</Td>
                    <Td>{el.category}</Td>
                    <Td isNumeric>{el.sum}</Td>
                  </Tr>
                );
              })}
            </Tbody>

            <Tfoot>
              <TableHead />
            </Tfoot>
          </Table>
        </TableContainer>
      </TableContainer>
    </>
  );
};

export default TransactionsTableChakra;
