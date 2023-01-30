import axios from "axios";

import { AuthResponse } from "../types";

export const API_URL = process.env.REACT_APP_SERVER_URL;

const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const instanceTest = async () => {
  try {
    const res = await instance.get("/api/transactions");
    console.log(res.data);
  } catch (e) {
    console.warn(e);
    console.log(API_URL);
  }
};

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config.isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(
          `${API_URL}/api/auth/refresh`,
          {
            withCredentials: true,
          }
        );
        localStorage.setItem("token", response.data.accessToken);
        return await instance.request(originalRequest);
      } catch (e) {
        console.log("Not authorized!");
        console.log(e);
      }
    }
    throw error;
  }
);

export default instance;
