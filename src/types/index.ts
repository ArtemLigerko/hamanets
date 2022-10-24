export interface User {
  username: string;
  id: string;
  capital: {
    wallets: Wallet[];
    total: number;
  };
}

interface Wallet {
  walletName: string;
  total: number;
  transactions: Transactions[];
}

interface Transactions {
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
