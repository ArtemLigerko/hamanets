import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, LE, ITransactions, IWallet } from "../../types";
import axios from "axios";

const initialState: LE<User> = {
  username: "",
  id: "",
  capital: {
    wallets: [
      {
        id: "",
        createdAt: "",
        walletName: "",
        total: 0,
      },
    ],
    transactions: [
      {
        id: "",
        walletId: "",
        createdAt: "",
        type: "",
        category: "",
        sum: 0,
      },
    ],
    total: 0,
  },
  isLoading: false,
  error: undefined,
};

export interface UserStore {
  userData: LE<User>;
}

const userInitialState: UserStore = {
  userData: initialState,
};

const getUser = createAsyncThunk("home/getUser", async () => {
  const response = await axios.get("/mock/user.json");
  console.log(response.data);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    addWallet: (store, action: PayloadAction<IWallet>) => {
      store.userData.capital.wallets.push(action.payload);
    },
    addTransaction: (store, action: PayloadAction<ITransactions>) => {
      store.userData.capital.transactions.push(action.payload);
    },
    clearUser: (store) => {
      store.userData.capital.transactions = [];
    },
    calcWalletTotal: (store) => {
      let walletSum = 0;
      for (let i = 0; i < store.userData.capital.wallets.length; i++) {
        for (let j = 0; j < store.userData.capital.transactions.length; j++) {
          if (
            store.userData.capital.wallets[i].id ===
            store.userData.capital.transactions[j].walletId
          ) {
            walletSum = walletSum + store.userData.capital.transactions[j].sum;
          }
        }
        store.userData.capital.wallets[i].total = walletSum;
        walletSum = 0;
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (store) => {
      store.userData.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (store, { payload }) => {
      Object.assign(store.userData, { ...payload });
      store.userData.isLoading = false;
    });
    builder.addCase(getUser.rejected, (store) => {
      store.userData.isLoading = false;
      store.userData.error = "Помилка завантаження данних користувача";
    });
  },
});

export const userActions = {
  ...userSlice.actions,
  getUser,
};

export default userSlice.reducer;
