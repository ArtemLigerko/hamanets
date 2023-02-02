import { AxiosResponse } from "axios";

import { IUser } from "../types";
import instance from "./api";

export const fetchUsersService = async (): Promise<AxiosResponse<IUser[]>> => {
  return instance.get<IUser[]>("/users");
};
