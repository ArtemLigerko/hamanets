import React from "react";
// import $ from "jquery";
// import "datatables.net";
// import "datatables.net-bs5";

import { useAppSelector } from "../redux/hooks";
import { Container, Row } from "react-bootstrap";

// $(document).ready(function () {
//   $("#example").DataTable({
//     paging: true,
//   });
// });

const TransactionTable: React.FC = () => {
  const wallets = useAppSelector(
    (store) => store.user.userData.capital.wallets
  );
  const transactions = useAppSelector(
    (store) => store.user.userData.capital.transactions
  );

  const getWalletName = (id: string) => {
    return wallets.find((item) => item.id === id)?.walletName;
  };

  return (
    <>
      <Container>
        <Row>
          <table id="example" className="table table-striped">
            <thead>
              <tr>
                <th>Дата</th>
                <th>Тип операції</th>
                <th>Рахунок</th>
                <th>Стаття</th>
                <th>Сума</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr key={transaction.id}>
                    <td>{transaction.createdAt}</td>
                    <td>{transaction.type}</td>
                    <td>{getWalletName(transaction.walletId)}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.sum}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Row>
      </Container>
    </>
  );
};

export default TransactionTable;
