import {
  createAsyncThunk,
  createSlice,
  current,
  SliceCaseReducers,
} from "@reduxjs/toolkit";

import instance from "../../services/api";
import { LE, IWallet, Pagination } from "../../types";

const initialState: LE<Pagination<IWallet>> = {
  docs: [],
  isLoading: false,
  error: undefined,
};

interface WalletsStore {
  wallets: LE<Pagination<IWallet>>;
}

const walletsInitialState: WalletsStore = {
  wallets: initialState,
};

// const walletsInitialState: WalletsStore = {
//   list: {
//     docs: [],
//     isLoading: false,
//     error: undefined,
//   },
// };

const createWallet = createAsyncThunk<IWallet, IWallet>(
  "wallet/create",
  async (body) => {
    const response = await instance.post("api/wallets", body);
    return response.data;
  }
);

const getWallets = createAsyncThunk<IWallet[]>("wallets/get", async () => {
  try {
    const response = await instance.get("api/wallets");
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

const deleteWallets = createAsyncThunk<Pagination<IWallet>, string>(
  "wallets/del",
  async (id) => {
    try {
      const response = await instance.delete(`api/wallets/${id}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
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

        console.log("creating wallets...");
        console.log(payload);

        console.log("adding created wallets to state...");
        state.wallets.docs.push(payload);
        console.log(current(state));
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
        console.log("getting wallets from server...");
        console.log(payload);

        console.log("writing wallets to state...");
        state.wallets.docs = payload;
        console.log(current(state));
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
        console.log("deleting wallets from server...");
        console.log(payload);
        console.log(current(state));
      });
      builder.addCase(deleteWallets.rejected, (state) => {
        state.wallets.isLoading = false;
        state.wallets.error = "Failed to post wallet";
      });
    },
  }
);

export const walletsActions = {
  ...walletsSlice.actions,
  createWallet,
  getWallets,
  deleteWallets,
};

export default walletsSlice.reducer;
