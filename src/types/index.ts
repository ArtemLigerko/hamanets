export interface UserInterface {
  username: string;
  id: string;
  capital: {
    wallets: WalletInterface[];
    total?: number;
  };
}

interface WalletInterface {
  walletName?: string;
  total?: number;
  transactions: TransactionsInterface[];
}

interface TransactionsInterface {
  createdAt?: string;
  type?: "витрати" | "прибуток";
  category?:
    | "продукти"
    | "комунальні послуги"
    | "одежа"
    | "обув"
    | "гігієна"
    | "побутова хімія";
  total?: number;
}
