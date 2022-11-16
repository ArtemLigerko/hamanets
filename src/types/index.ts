export interface ChildrenProps {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

export interface User {
  username: string;
  id: string;
  capital: {
    wallets: Wallet[];
    transactions: Transactions[];
    total: number;
  };
}

interface Wallet {
  id: string;
  walletName: string;
  total: number;
}

export interface Transactions {
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
