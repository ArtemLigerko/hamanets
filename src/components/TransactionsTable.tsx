import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { transactionsActions } from "../redux/reducers/transactions";
import { currencyFormatForTable } from "../services/currencyFormat";
import { toLocalDate } from "../services/localDateTime";

const TransactionsTableChakra = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(transactionsActions.getTransactions());
  }, []);

  const transactions = useAppSelector(
    (state) => state.transactions.transactions.docs
  );

  // const transactionsError = useAppSelector(
  //   (state) => state.transactions.transactions.error
  // );

  const TableHead = () => {
    return (
      <Tr>
        <Th>Дата</Th>
        <Th>Рахунок</Th>
        <Th>Тип операції</Th>
        <Th>Стаття</Th>
        <Th isNumeric>Сумма</Th>
      </Tr>
    );
  };

  return (
    <>
      <TableContainer w="100%" mt="90px">
        <Table variant="striped" colorScheme="facebook" size="sm">
          <Thead>
            <TableHead />
          </Thead>

          <Tbody>
            {transactions.map((el) => {
              return (
                <Tr key={el._id}>
                  <Td>{toLocalDate(el.createdAt)}</Td>
                  <Td>{el.walletName}</Td>
                  <Td>{el.type}</Td>
                  <Td>{el.category}</Td>
                  <Td isNumeric>{currencyFormatForTable(el.sum)}</Td>
                </Tr>
              );
            })}
          </Tbody>

          <Tfoot>
            <TableHead />
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

export default TransactionsTableChakra;
