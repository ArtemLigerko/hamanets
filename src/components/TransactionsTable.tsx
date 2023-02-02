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

  const transactionsError = useAppSelector(
    (state) => state.transactions.transactions.error
  );

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

  // const total = transactions.reduce((a, b): any => {
  //   return a.sum + b.sum;
  // });
  // console.log(total);

  return (
    <>
      <TableContainer>
        <Table variant="striped" colorScheme="facebook" size="sm">
          {/* <TableCaption>--- end ---</TableCaption> */}
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
            <Tr>
              <Td>
                <b>Всього:</b>
              </Td>
              <Td>{}</Td>
              <Td>{}</Td>
              <Td>{}</Td>
              <Td isNumeric>
                <b>{"total"}</b>
              </Td>
            </Tr>
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
