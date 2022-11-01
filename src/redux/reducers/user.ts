import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Users, LE } from "../../types";
import axios from "axios";

const initialState: LE<Users> = {
  users: [
    {
      username: "",
      id: "",
      capital: {
        total: 0,
        wallets: [
          {
            id: "",
            walletName: "",
            total: 0,
            transactions: [
              {
                id: "",
                createdAt: "",
                type: "витрати",
                category: "",
                sum: 0,
              },
            ],
          },
        ],
      },
    },
  ],
  isLoading: false,
  error: undefined,
};

export interface UserStore {
  userData: LE<Users>;
}

const userInitialState: UserStore = {
  userData: initialState,
};

const getUser = createAsyncThunk("home/getUser", async () => {
  const response = await axios.get("/mock/user.json");
  console.log(response.data[0]);
  return response.data[0];
});

const editUsername = createAsyncThunk<any, string>(
  "home/editUsername",
  async (newUsername) => {
    const response = await axios.put("/mock/user.json", {
      username: newUsername,
    });
    // console.log(response.data[0]);
    return response.data[0];
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {},
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

    builder.addCase(editUsername.pending, (store) => {
      store.userData.isLoading = true;
    });
    builder.addCase(editUsername.fulfilled, (store, { payload }) => {
      store.userData.users[0].username = payload;
      store.userData.isLoading = false;
    });
    builder.addCase(editUsername.rejected, (store) => {
      store.userData.isLoading = false;
      store.userData.error = "Помилка завантаження данних користувача";
    });
  },
});

export const userActions = {
  ...userSlice.actions,
  getUser,
  editUsername,
};

export default userSlice.reducer;
