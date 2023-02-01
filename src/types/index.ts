// import React from "react";

// export interface ChildrenProps {
// children?: JSX.Element | JSX.Element[] | string | string[];
// children?: React.ReactNode;
// }
// PropsWithChildren instead ChildrenProps

export interface MongoId {
  _id: string;
}

export interface User {
  username: string;
  id: string;
  capital: {
    wallets: IWallet[];
    transactions: ITransaction[];
    total: number;
  };
}

export interface IWallet extends MongoId {
  id: string;
  user_id: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  walletName: string;
  initialSum: number;
  total: number;
}

export interface ITransaction extends MongoId {
  // id: string;
  // walletId: string | undefined;
  wallet_id: string | undefined;
  walletName: string;
  createdAt: string;
  // updatedAt: string;
  type: string;
  category: string;
  sum: number;
}

export type LE<T> = T & {
  isLoading?: boolean;
  error?: string | Error;
};

export interface Pagination<T = object> {
  docs: Array<T>;
  // limit: number;
  // hasNextPage?: boolean;
  // page: number;
  // nextPage?: number;
  // init?: boolean;
}

export interface IUser {
  id: string;
  username: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
