export interface ChildrenProps {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

export interface User {
  username: string;
  id: string;
  capital: {
    wallets: Wallet[];
    transactions: ITransactions[];
    total: number;
  };
}

interface Wallet {
  id: string;
  walletName: string;
  total: number;
}

export interface ITransactions {
  id: string;
  walletId: string;
  createdAt: string;
  type: string;
  category: string;
  sum: number;
}

export type LE<T> = T & {
  isLoading?: boolean;
  error?: string | Error;
};
