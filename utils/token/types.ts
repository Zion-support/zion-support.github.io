<<<<<<< HEAD



export type TokenSymbol = "ZION$",




=======
export type TokenSymbol = "ZION$";
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
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

  | "redeem",;
export interface TokenTransaction {;
  id: string,;
  userId: string,;
  type: TokenTransactionType,;
=======
  | "redeem";
export interface TokenTransaction {;
  id: string;
  userId: string;
  type: TokenTransactionType;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
  amount: number, // positive integer tokens;
  reason: string;
  metadata?: Record<string, any>;
  createdAt: string, // ISO timestamp;
}
<<<<<<< HEAD
export interface Wallet {userId: string;
  balance: number, // current token balance;
}
export interface TokenConfig {symbol: TokenSymbol;






}
export interface TokenConfig {symbol: TokenSymbol;


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
export interface Wallet {
  user_id: string,
  balance: number, // current token balance;

  | "redeem",;
export interface TokenTransaction {;

}
export interface TokenConfig {
  symbol: TokenSymbol,
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;
  earn_rules: Record < string number>, // action -> tokens;
  burn_rules: Record < string number>, // feature -> tokens;
}
  transactions: TokenTransaction[];
  config: TokenConfig;
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
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
;
export interface Wallet {;
  userId: string;
  balance: number, // current token balance;
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface TokenConfig {;
  symbol: TokenSymbol,;
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;
  earnRules: Record<string number>, // action -> tokens;
  burnRules: Record<string number>, // feature -> tokens;
  earnRules: Record<string, number>, // action -> tokens;
  burnRules: Record<string, number>, // feature -> tokens;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface WalletSummary {;
  wallet: Wallet,;
  transactions: TokenTransaction[];
  config: TokenConfig;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}


=======
}
;
export interface TokenConfig {;
  symbol: TokenSymbol;
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;
  earnRules: Record<string, number>, // action -> tokens;
  burnRules: Record<string, number>, // feature -> tokens;
}
;
export interface WalletSummary {;
  wallet: Wallet;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
