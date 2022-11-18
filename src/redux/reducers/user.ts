import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, LE, ITransactions } from "../../types";
import axios from "axios";

const initialState: LE<User> = {
  username: "",
  id: "",
  capital: {
    wallets: [
      {
        id: "",
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
    addTransaction: (state, action: PayloadAction<ITransactions>) => {
      console.log("addTransaction:");
      console.log(state);
      return state;
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
  // addTransaction,
  // editUsername,
};

export default userSlice.reducer;
