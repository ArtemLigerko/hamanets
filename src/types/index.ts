export interface IUser {
  _id: string;
  username: string;
}

export interface IWallet {
  _id: string;
  user_id: string;
  createdAt: string | Date;
  updatedAt: string | Date;
  walletName: string;
  initialSum: number;
  total: number;
}

export interface ITransaction {
  _id: string;
  wallet_id: string | undefined;
  user_id: string | undefined;
  walletName: string;
  createdAt: string;
  type: string;
  category: string;
  sum: number;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
