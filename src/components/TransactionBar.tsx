import React from "react";
import { useAppSelector } from "../redux/hooks";
import "./TransactionBar.scss";

const TransactionBar: React.FC = () => {
  const wallets = useAppSelector((store) => store.user.capital.wallets);
  const transactions = useAppSelector(
    (store) => store.user.capital.wallets[0].transactions
  );

  console.log(wallets.length);

  return (
    <>
      {wallets.length ? (
        transactions.map((transaction) => (
          <>
            <div className="transactionsCard" key={transaction.id}>
              <div className="transactionCard-info">
                <div>{transaction.type}</div>
              </div>
              <div className="transactionCard-info">
                <div>{transaction.category}</div>
                <div className="sum">
                  {Math.round(transaction.sum * 100) / 100}
                </div>
              </div>
              <div className="transactionCard-info">
                <div>{transaction.createdAt}</div>
              </div>
              <br />
            </div>
          </>
        ))
      ) : (
        <div>No transactions</div>
      )}
    </>
  );
};

export default TransactionBar;
