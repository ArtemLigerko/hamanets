export interface ChildrenProps {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

export interface User {
  username: string;
  id: string;
  capital: {
    wallets: IWallet[];
    transactions: ITransactions[];
    total: number;
  };
}

export interface IWallet {
  id: string;
  createdAt: string;
  walletName: string;
  total: number;
}

export interface ITransactions {
  id: string;
  walletId: string | any;
  createdAt: string;
  type: string;
  category: string;
  sum: number;
}

export type LE<T> = T & {
  isLoading?: boolean;
  error?: string | Error;
};
