import {
  createAsyncThunk,
  createSlice,
  CreateSliceOptions,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";

import instance from "../../services/api";
import { LE, ITransaction } from "../../types";

const initialState: ITransaction =
  // [
  {
    id: "",
    walletId: "",
    createdAt: "",
    type: "",
    category: "",
    sum: 0,
  };
// ];

interface TransactionsStore {
  // transactions: LE<ITransaction[]>;
  transactions: ITransaction;
}

const transactionsInitialState: TransactionsStore = {
  transactions: initialState,
};

const createTransaction = createAsyncThunk<ITransaction, ITransaction>(
  "transaction/create",
  async (body) => {
    const response = await instance.post("api/transactions", body);
    return response.data;
  }
);

const getTransactions = createAsyncThunk<ITransaction>(
  "transactions/get",
  async () => {
    try {
      const response = await instance.get("api/transactions");
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

const transactionsSlice = createSlice<
  TransactionsStore,
  SliceCaseReducers<TransactionsStore>
>({
  name: "transactions",
  initialState: transactionsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createTransaction.pending, (store) => {
      //   store.transactions.isLoading = true;
    });
    builder.addCase(createTransaction.fulfilled, (store, { payload }) => {
      //   store.transactions.isLoading = false;
      //   store.transactions = [payload];
      //   store.transactions.push(action.payload);
    });
    builder.addCase(createTransaction.rejected, (store) => {
      //   store.transactions.isLoading = false;
      //   store.transactions.error = "Failed to post transaction";
      console.warn("Failed to post transaction");
    });

    builder.addCase(getTransactions.pending, () => {
      //   store.transactions.isLoading = true;
    });
    builder.addCase(getTransactions.fulfilled, (store, { payload }) => {
      //   store.transactions.isLoading = false;
      store.transactions = payload;
    });
    builder.addCase(getTransactions.rejected, (store) => {
      //   store.transactions.isLoading = false;
      //   store.transactions.error = "Failed to post transaction";
      console.warn("Failed to post transaction");
    });
  },
});

export const transactionsActions = {
  ...transactionsSlice.actions,
  createTransaction,
  getTransactions,
};

export default transactionsSlice.reducer;
