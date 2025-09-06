export type TokenTransactionType =;
  | "earn";
  | "burn";
  | "issue";
  | "revoke";
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;
  earn_rules: Record < string number>, // action -> tokens;
  burn_rules: Record < string number>, // feature -> tokens;
}
  transactions: TokenTransaction[];
  config: TokenConfig;
}
