import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, LE } from "../../types";
import axios from "axios";

const initialState: LE<User> = {
  username: "username",
  id: "",
  capital: {
    total: 0,
    wallets: [],
  },
  isLoading: false,
  error: undefined,
};

const getUser = createAsyncThunk("home/getUser", async () => {
  const response = await axios.get("/mock/user.json");
  return response.data[0];
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (store) => {
      store.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (store, { payload }) => {
      Object.assign(store, { ...payload });
      store.isLoading = false;
    });
    builder.addCase(getUser.rejected, (store) => {
      store.isLoading = false;
      store.error = "Помилка завантаження данних користувача";
    });
  },
});

export const userActions = {
  ...userSlice.actions,
  getUser,
};

export default userSlice.reducer;
