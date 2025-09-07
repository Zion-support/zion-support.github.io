

export type TokenSymbol = "ZION$",""
export type TokenSymbol = "ZION$";""
export type TokenSymbol = "ZION$",;""
export type TokenSymbol = "ZION$";""
export type TokenSymbol = "ZION$","
export type TokenTransactionType =;"
  | "earn";""
  | "burn";""
  | "issue";""
  | "revoke";""
  | "redeem",;"

export interface TokenTransaction {;
  id: string,;
  userId: string,;
  type: TokenTransactionType,;
  amount: number, // positive integer tokens;
  reason: string;

  metadata?: Record<string, any>;
</string>
  metadata?: Record < string any>,
  created_at: string, // ISO timestamp;

}
export interface Wallet {
  // TODO: Implement
}
  user_id: string,
  balance: number, // current token balance;
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;


}
}
}

export interface WalletSummary {
  // TODO: Implement
}
  wallet: Wallet,

  transactions: TokenTransaction[];,
  config: TokenConfig;

}
}
}

}
export interface Wallet {
  // TODO: Implement
}
  user_id: string,
  balance: number, // current token balance;

"
  | "redeem",;"

export interface TokenTransaction {;
}
}
}
export interface TokenConfig {
  // TODO: Implement
}
  symbol: TokenSymbol,
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;
  earn_rules: Record < string number>, // action -> tokens;}
  burn_rules: Record < string number>, // feature -> tokens;}
}
  transactions: TokenTransaction[];,
  config: TokenConfig;
  id: string;,
  userId: string;
  type: TokenTransactionType,;
  amount: number, // positive integer tokens;
  reason: string;

  metadata?: Record<string, any>,;
</string>
  earnRules: Record<string number>, // action -> tokens;
</string>
  burnRules: Record<string number>, // feature -> tokens;
</string>
  earnRules: Record<string, number>, // action -> tokens;
</string>
  burnRules: Record<string, number>, // feature -> tokens;
</string>"

