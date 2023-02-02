import {
  createAsyncThunk,
  createSlice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";

import instance from "../../services/api";
import { IWallet } from "../../types";

interface InitialState<T = object> {
  docs: Array<T>;
  isLoading?: boolean;
  error?: string | Error;
}

const initialState: InitialState<IWallet> = {
  docs: [],
  isLoading: false,
  error: undefined,
};

interface WalletsStore {
  wallets: InitialState<IWallet>;
}

const walletsInitialState: WalletsStore = {
  wallets: initialState,
};

const createWallet = createAsyncThunk<IWallet, IWallet>(
  "wallet/create",
  async (body) => {
    const response = await instance.post("api/wallets", body);
    return response.data;
  }
);

const getWallets = createAsyncThunk<IWallet[]>("wallets/get", async () => {
  const response = await instance.get("api/wallets");
  return response.data;
});

const deleteWallets = createAsyncThunk<InitialState<IWallet>, string>(
  "wallets/del",
  async (id) => {
    const response = await instance.delete(`api/wallets/${id}`);
    return response.data;
  }
);

interface AddTransactionSumRequest {
  walletId: string | undefined;
  transactionSum: number;
}

const addTransactionSum = createAsyncThunk<any, AddTransactionSumRequest>(
  "wallets/addTransactionSum",
  async ({ walletId, transactionSum }) => {
    const response = await instance.put(`api/wallets/`, {
      id: walletId,
      total: transactionSum,
    });
    return response.data;
  }
);

const walletsSlice = createSlice<WalletsStore, SliceCaseReducers<WalletsStore>>(
  {
    name: "wallets",
    initialState: walletsInitialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(createWallet.pending, (state) => {
        state.wallets.isLoading = true;
      });
      builder.addCase(createWallet.fulfilled, (state, { payload }) => {
        state.wallets.isLoading = false;
        state.wallets.docs.push(payload);
      });
      builder.addCase(createWallet.rejected, (state) => {
        state.wallets.isLoading = false;
        console.warn("Failed to post wallet");
      });

      builder.addCase(getWallets.pending, (state) => {
        state.wallets.isLoading = true;
      });
      builder.addCase(getWallets.fulfilled, (state, { payload }) => {
        state.wallets.isLoading = false;

        state.wallets.docs = payload;
      });
      builder.addCase(getWallets.rejected, (state) => {
        state.wallets.isLoading = false;
        state.wallets.error = "Failed to post wallet";
      });

      builder.addCase(deleteWallets.pending, (state) => {
        state.wallets.isLoading = true;
      });
      builder.addCase(deleteWallets.fulfilled, (state, { payload }) => {
        state.wallets.isLoading = false;
      });
      builder.addCase(deleteWallets.rejected, (state) => {
        state.wallets.isLoading = false;
        state.wallets.error = "Failed to post wallet";
      });

      builder.addCase(addTransactionSum.pending, (state) => {
        state.wallets.isLoading = true;
      });
      builder.addCase(addTransactionSum.fulfilled, (state, { payload }) => {
        state.wallets.isLoading = false;
      });
      builder.addCase(addTransactionSum.rejected, (state) => {
        state.wallets.isLoading = false;
        console.warn("Failed to post wallet");
      });
    },
  }
);

export const walletsActions = {
  ...walletsSlice.actions,
  createWallet,
  getWallets,
  deleteWallets,
  addTransactionSum,
};

export default walletsSlice.reducer;
