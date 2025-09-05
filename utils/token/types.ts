export type TokenSymbol = "ZION$";

export type TokenTransactionType =
  | "earn"
  | "burn"
  | "issue"
  | "revoke"
  | "redeem";

export interface TokenTransaction {_id: string;
  userId: string;
  type: TokenTransactionType;
  amount: number; // positive integer tokens
  reason: string;
  metadata?: Record<string, _any>;
  createdAt: string; // ISO timestamp}

export interface Wallet {_userId: string;
  balance: number; // current token balance}

export interface TokenConfig {_symbol: TokenSymbol;
  usdPerToken: number; // e.g., _0.05 means 100 ZION$ = $5
  earnRules: Record<string, _number>; // action -> tokens
  burnRules: Record<string, _number>; // feature -> tokens}

export interface WalletSummary {_wallet: Wallet;
  transactions: TokenTransaction[];
  config: TokenConfig;}