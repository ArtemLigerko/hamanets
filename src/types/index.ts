export interface ChildrenProps {
  children: JSX.Element | JSX.Element[] | string | string[];
}

export interface Users {
  users: User[];
}

export interface User {
  username: string;
  id: string;
  capital: {
    wallets: Wallet[];
    total: number;
  };
}

interface Wallet {
  id: string;
  walletName: string;
  total: number;
  transactions: Transactions[];
}

interface Transactions {
  id: string;
  createdAt: string;
  type: "витрати" | "прибуток";
  category:
    | "продукти"
    | "комунальні послуги"
    | "одежа"
    | "обув"
    | "гігієна"
    | "побутова хімія"
    | "";
  sum: number;
}

export type LE<T> = T & {
  isLoading?: boolean;
  error?: string | Error;
};
