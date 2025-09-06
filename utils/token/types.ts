export type TokenTransactionType =;
  | "earn";
  | "burn";
  | "issue";
  | "revoke";
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;




}

export interface WalletSummary {
  wallet: Wallet,

  transactions: TokenTransaction[];
  config: TokenConfig;



}

