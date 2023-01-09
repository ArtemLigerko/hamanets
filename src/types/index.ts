export interface ChildrenProps {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

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

export interface IWallet {
  id: string;
  createdAt: string;
  updatedAt: string;
  walletName: string;
  initialSum: number;
  total: number;
}

export interface ITransaction extends MongoArtifacts {
  id: string;
  walletId: string | any;
  walletName: string;
  createdAt: string;
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
