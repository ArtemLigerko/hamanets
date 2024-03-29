import {
  createAsyncThunk,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";

import instance from "../../services/api";
import { ITransaction } from "../../types";

interface InitialState<T = object> {
  docs: Array<T>;
  isLoading?: boolean;
  error?: string | Error;
}

const initialState: InitialState<ITransaction> = {
  docs: [],
  isLoading: false,
  error: undefined,
};

interface TransactionsStore {
  transactions: InitialState<ITransaction>;
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

const getTransactions = createAsyncThunk<ITransaction[]>(
  "transactions/get",
  async () => {
    const response = await instance.get("api/transactions");
    return response.data;
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
    builder.addCase(createTransaction.pending, (state) => {
      state.transactions.isLoading = true;
    });
    builder.addCase(createTransaction.fulfilled, (state, { payload }) => {
      state.transactions.isLoading = false;
      state.transactions.docs.push(payload);
    });
    builder.addCase(createTransaction.rejected, (state) => {
      state.transactions.isLoading = false;
      console.warn("Failed to post transaction");
    });

    builder.addCase(getTransactions.pending, (state) => {
      state.transactions.isLoading = true;
    });
    builder.addCase(getTransactions.fulfilled, (state, { payload }) => {
      state.transactions.isLoading = false;
      state.transactions.docs = payload;
    });
    builder.addCase(getTransactions.rejected, (state) => {
      state.transactions.isLoading = false;
      state.transactions.error = "Failed to get transaction";
    });
  },
});

export const transactionsActions = {
  ...transactionsSlice.actions,
  createTransaction,
  getTransactions,
};

export default transactionsSlice.reducer;
