

export type TokenSymbol = "ZION$";
export type TokenSymbol = "ZION$",;
export type TokenSymbol = "ZION$";
export type TokenTransactionType =;
  | "earn";
  | "burn";
  | "issue";
  | "revoke";
  | "redeem",;
export type TokenSymbol = "ZION$",""
export type TokenSymbol = "ZION$";""
export type TokenSymbol = "ZION$",;""
export type TokenSymbol = "ZION$","
export type TokenTransactionType =;"
  | "earn";""
  | "burn";""
  | "issue";""
  | "revoke";""
  | "redeem",;"
pr-12325
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
  user_id: string,
  type: TokenTransactionType,
  amount: number, // positive integer tokens;
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
</string>
  metadata?: Record < string any>,
  created_at: string, // ISO timestamp;
}
export interface Wallet {
  // TODO: Implement
  user_id: string,
  balance: number, // current token balance;
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;





export interface WalletSummary {
  // TODO: Implement
  wallet: Wallet,

  transactions: TokenTransaction[];,
  config: TokenConfig;




  // TODO: Implement
"


export interface TokenConfig {
  // TODO: Implement
  symbol: TokenSymbol,
  earn_rules: Record < string number>, // action -> tokens;
  burn_rules: Record < string number>, // feature -> tokens;
  id: string;,
  userId: string;
  metadata?: Record<string, any>,;
  earnRules: Record<string number>, // action -> tokens;
  burnRules: Record<string number>, // feature -> tokens;
  earnRules: Record<string, number>, // action -> tokens;
  burnRules: Record<string, number>, // feature -> tokens;
</string>"
pr-12325
