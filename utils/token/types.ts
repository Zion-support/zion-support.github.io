<<<<<<< HEAD
export type TokenSymbol = "ZION$";
=======
export type TokenSymbol = "ZION$",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export type TokenTransactionType =;
  | "earn";
  | "burn";
  | "issue";
  | "revoke";
<<<<<<< HEAD
  | "redeem";
export interface TokenTransaction {id: string;
  userId: string;
  type: TokenTransactionType;
  amount: number, // positive integer tokens;
  reason: string;
  metadata?: Record<string, any>;
  createdAt: string, // ISO timestamp;
}
export interface Wallet {userId: string;
  balance: number, // current token balance;
}
export interface TokenConfig {symbol: TokenSymbol;
=======
  | "redeem",
export interface TokenTransaction {
  id: string,
  user_id: string,
  type: TokenTransactionType,
  amount: number, // positive integer tokens;
  reason: string,
  metadata?: Record < string any>,
  created_at: string, // ISO timestamp;
}
export interface Wallet {
  user_id: string,
  balance: number, // current token balance;
}
export interface TokenConfig {
  symbol: TokenSymbol,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;
  earn_rules: Record < string number>, // action -> tokens;
  burn_rules: Record < string number>, // feature -> tokens;
}
<<<<<<< HEAD
export interface WalletSummary {wallet: Wallet;
=======
export interface WalletSummary {
  wallet: Wallet,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  transactions: TokenTransaction[];
  config: TokenConfig;
}
