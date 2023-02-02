import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  loginService,
  logoutService,
  registrationService,
} from "../../services/auth.service";
import { AuthResponse } from "../../types";

interface AuthUserInitialState {
  id: string;
  isAuth: boolean;
  username: string;
  isLoading?: boolean;
  error?: string | Error;
}
const authUserInitialState: AuthUserInitialState = {
  id: "",
  isAuth: false,
  username: "",
  isLoading: false,
  error: undefined,
};

interface UserStore {
  authUser: AuthUserInitialState;
  // users: UsersInitialState;
}
const userInitialState: UserStore = {
  authUser: authUserInitialState,
  // users: usersInitialState,
};

interface RegistrationResponse {}
interface RegistrationRequest {
  username: string;
  password: string;
}
const registration = createAsyncThunk<
  RegistrationResponse,
  RegistrationRequest
>("auth/registration", async (body) => {
  const { username, password } = body;
  const response = await registrationService(username, password);
  localStorage.setItem("token", response.data.accessToken);
  return response.data.user;
});

interface LoginResponse {}
interface LoginRequest {
  username: string;
  password: string;
}
const login = createAsyncThunk<LoginResponse, LoginRequest>(
  "auth/login",
  async (body) => {
    const { username, password } = body;
    const response = await loginService(username, password);
    localStorage.setItem("token", response.data.accessToken);
    return response.data.user;
  }
);

const logout = createAsyncThunk("auth/logout", async () => {
  const response = await logoutService();
  localStorage.removeItem("token");
});

export interface CheckAuthResponse {}

const checkAuth = createAsyncThunk<CheckAuthResponse>(
  "auth/check",
  async () => {
    const response = await axios.get<AuthResponse>(
      `${process.env.REACT_APP_SERVER_URL}/refresh`,
      {
        withCredentials: true,
      }
    );
    localStorage.setItem("token", response.data.accessToken);
    return response.data.user;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registration.pending, (store) => {
      store.authUser.isLoading = true;
    });
    builder.addCase(registration.fulfilled, (store, action) => {
      store.authUser.isLoading = false;
      store.authUser.error = undefined;
      store.authUser.isAuth = true;
      store.authUser = { ...store.authUser, ...action.payload };
    });
    builder.addCase(registration.rejected, (store) => {
      store.authUser.isLoading = false;
      console.warn("Failed to register");
      console.warn(store.authUser.error);
    });

    builder.addCase(login.pending, (store) => {
      store.authUser.isLoading = true;
    });
    builder.addCase(login.fulfilled, (store, action) => {
      store.authUser.isLoading = false;
      store.authUser.error = undefined;
      store.authUser.isAuth = true;
      store.authUser = { ...store.authUser, ...action.payload };
    });
    builder.addCase(login.rejected, (store) => {
      store.authUser.isLoading = false;
      console.warn("Failed to login");
    });

    builder.addCase(logout.pending, (store) => {
      store.authUser.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (store) => {
      store.authUser.isLoading = false;
      store.authUser.error = undefined;
      store.authUser.isAuth = false;
    });
    builder.addCase(logout.rejected, (store) => {
      store.authUser.isLoading = false;
      console.warn("Failed to logout");
    });

    builder.addCase(checkAuth.pending, (store) => {
      store.authUser.isLoading = true;
    });
    builder.addCase(checkAuth.fulfilled, (store, action) => {
      store.authUser.isLoading = false;
      store.authUser.error = undefined;
      store.authUser.isAuth = true;
      store.authUser = { ...store.authUser, ...action.payload };
    });
    builder.addCase(checkAuth.rejected, (store) => {
      store.authUser.isLoading = false;
      console.warn("Failed to check Auth");
    });
  },
});

export const userActions = {
  ...userSlice.actions,
  login,
  registration,
  logout,
  checkAuth,
};

export default userSlice.reducer;
