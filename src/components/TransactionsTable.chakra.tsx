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

  return (
    <>
      <div>TransactionsTable</div>
    </>
  );
};

export default TransactionsTableChakra;
