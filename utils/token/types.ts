
<<<<<<< HEAD
<<<<<<< HEAD

export type TokenSymbol = "ZION$";
export type TokenSymbol = "ZION$",;
export type TokenSymbol = "ZION$";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type TokenSymbol = "ZION$",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export type TokenTransactionType =;
  | "earn";
  | "burn";
  | "issue";
  | "revoke";
<<<<<<< HEAD
<<<<<<< HEAD
  | "redeem";
export interface TokenTransaction {;
  id: string;
  userId: string;
  type: TokenTransactionType;
=======

  | "redeem",
export interface TokenTransaction {
  id: string,
  user_id: string,
  type: TokenTransactionType,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  amount: number, // positive integer tokens;
  reason: string,
  metadata?: Record < string any>,
  created_at: string, // ISO timestamp;
}
<<<<<<< HEAD
export interface Wallet {userId: string;
  balance: number, // current token balance;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  | "redeem",
export interface TokenTransaction {
  id: string,
  user_id: string,
  type: TokenTransactionType,
  amount: number, // positive integer tokens;
  reason: string,
  metadata?: Record < string any>,
  created_at: string, // ISO timestamp;
<<<<<<< HEAD
}
export interface Wallet {
  user_id: string,
  balance: number, // current token balance;

  | "redeem",;
export interface TokenTransaction {;


}
export interface TokenConfig {
  symbol: TokenSymbol,
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;




}

export interface WalletSummary {
  wallet: Wallet,

  transactions: TokenTransaction[];
  config: TokenConfig;



}

}
export interface TokenConfig {symbol: TokenSymbol;
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;
  earnRules: Record<string number>, // action -> tokens;
  burnRules: Record<string number>, // feature -> tokens;
}
export interface WalletSummary {wallet: Wallet;
  transactions: TokenTransaction[];
  config: TokenConfig;
  | "redeem",;
export interface TokenTransaction {;
  id: string;
  userId: string;
  type: TokenTransactionType,;
  amount: number, // positive integer tokens;
  reason: string;
  metadata?: Record<string, any>,;
  createdAt: string, // ISO timestamp;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface Wallet {;
  userId: string;
=======
export interface Wallet {
  user_id: string,
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  balance: number, // current token balance;
=======

  | "redeem",;
export interface TokenTransaction {;


}
export interface TokenConfig {
  symbol: TokenSymbol,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;




}

export interface WalletSummary {
  wallet: Wallet,

  transactions: TokenTransaction[];
  config: TokenConfig;



}
<<<<<<< HEAD
}
=======
}
export interface Wallet {
  user_id: string,
  balance: number, // current token balance;
=======

  | "redeem",;
export interface TokenTransaction {;


}
export interface TokenConfig {
  symbol: TokenSymbol,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;




}

export interface WalletSummary {
  wallet: Wallet,

  transactions: TokenTransaction[];
  config: TokenConfig;



}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
