

export type TokenSymbol = "ZION$";
export type TokenSymbol = "ZION$",;
export type TokenSymbol = "ZION$";
export type TokenTransactionType =;
  | "earn";
  | "burn";
  | "issue";
  | "revoke";
  | "redeem",;
export interface TokenTransaction {;
  id: string,;
  userId: string,;
  type: TokenTransactionType,;
  amount: number, // positive integer tokens;
  reason: string;
  metadata?: Record<string, any>;
  createdAt: string, // ISO timestamp;
}
export interface Wallet {userId: string;
  balance: number, // current token balance;
  | "redeem",
export interface TokenTransaction {
  id: string,
  userId: string,
  type: TokenTransactionType,
  amount: number, // positive integer tokens
  reason: string,
  metadata?: Record < string any>,
  created_at: string, // ISO timestamp;

}

export interface WalletSummary {
  wallet: Wallet,

  transactions: TokenTransaction[];
  config: TokenConfig;

}

}

}