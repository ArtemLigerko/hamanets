// import React from "react";

// export interface ChildrenProps {
// children?: JSX.Element | JSX.Element[] | string | string[];
// children?: React.ReactNode;
// }
// PropsWithChildren instead ChildrenProps

export interface MongoArtifacts {
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

export interface IWallet extends MongoArtifacts {
  id: string;
  createdAt: string;
  updatedAt: string;
  walletName: string;
  initialSum: number;
  total: number;
}

export interface ITransaction extends MongoArtifacts {
  id: string;
  walletId: string | undefined;
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
