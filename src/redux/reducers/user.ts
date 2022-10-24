import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, LE } from "../../types";
import axios from "axios";

// const getInitialUser = async () => {
//   const response = await axios.get("/mock/user.json");
//   return response.data[0];
// };

// console.log(getInitialUser());

const initialState: LE<User> = {
  username: "",
  id: "",
  capital: {
    total: 0,
    wallets: [],
  },
  // ...getInitialUser(),
  isLoading: false,
  error: undefined,
};

const getUser = createAsyncThunk("home/getUser", async () => {
  const response = await axios.get("/mock/user.json");
  console.log("getUser");
  console.log(response.data[0]);
  return response.data[0];
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (store) => {
      store.isLoading = true;
      console.log("завантаження");
    });
    builder.addCase(getUser.fulfilled, (store, { payload }) => {
      store = { ...payload };
      store.error = undefined;
      store.isLoading = false;
      console.log(store);
    });
    builder.addCase(getUser.rejected, (store) => {
      store.isLoading = false;
      store.error = "Помилка завантаження данних користувача";
      // console.log("помилка");
    });
  },
});

export const userActions = {
  ...userSlice.actions,
  getUser,
};

// console.log({ userActions });

export default userSlice.reducer;
