import { AxiosResponse } from "axios";

import { AuthResponse } from "../types";
import instance from "./api";

export const registrationService = async (
  username: string,
  password: string
): Promise<AxiosResponse<AuthResponse>> => {
  return instance.post<AuthResponse>("api/auth/registration", {
    username,
    password,
  });
};

export const loginService = async (
  username: string,
  password: string
): Promise<AxiosResponse<AuthResponse>> => {
  return instance.post<AuthResponse>("api/auth/login", { username, password });
};

export const logoutService = async (): Promise<void> => {
  return instance.post("api/auth/logout");
};
