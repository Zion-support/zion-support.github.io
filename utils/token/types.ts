<<<<<<< HEAD
export type TokenSymbol = "ZION$";
=======
<<<<<<< HEAD
export type TokenSymbol = "ZION$";
=======
<<<<<<< HEAD
export type TokenSymbol = "ZION$",;
=======
export type TokenSymbol = "ZION$";
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export type TokenTransactionType =;
  | "earn";
  | "burn";
  | "issue";
  | "revoke";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  | "redeem";
export interface TokenTransaction {id: string;
  userId: string;
  type: TokenTransactionType;
<<<<<<< HEAD
=======
=======
  | "redeem",;
export interface TokenTransaction {;
<<<<<<< HEAD
  id: string,;
  userId: string,;
  type: TokenTransactionType,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  amount: number, // positive integer tokens;
  reason: string;
  metadata?: Record<string, any>;
  createdAt: string, // ISO timestamp;
<<<<<<< HEAD
}
export interface Wallet {userId: string;
  balance: number, // current token balance;
}
=======
}
export interface Wallet {userId: string;
  balance: number, // current token balance;
<<<<<<< HEAD
}
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export interface TokenConfig {symbol: TokenSymbol;
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;
  earn_rules: Record < string number>, // action -> tokens;
  burn_rules: Record < string number>, // feature -> tokens;
}
export interface WalletSummary {wallet: Wallet;
  transactions: TokenTransaction[];
  config: TokenConfig;
<<<<<<< HEAD
}
=======
=======
  | "redeem",;
export interface TokenTransaction {;
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  balance: number, // current token balance;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
export interface TokenConfig {;
  symbol: TokenSymbol,;
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  earnRules: Record<string number>, // action -> tokens;
  burnRules: Record<string number>, // feature -> tokens;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  earnRules: Record<string, number>, // action -> tokens;
  burnRules: Record<string, number>, // feature -> tokens;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
export interface WalletSummary {;
  wallet: Wallet,;
  transactions: TokenTransaction[];
  config: TokenConfig;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
