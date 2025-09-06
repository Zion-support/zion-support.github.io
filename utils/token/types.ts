
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export type TokenSymbol = "ZION$",



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

export type TokenSymbol = "ZION$";
export type TokenSymbol = "ZION$",;
export type TokenSymbol = "ZION$";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
export type TokenSymbol = "ZION$",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export type TokenTransactionType =;
  | "earn";
  | "burn";
  | "issue";
  | "revoke";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
  | "redeem";
export interface TokenTransaction {id: string;
  userId: string;
  type: TokenTransactionType;
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
export interface TokenConfig {symbol: TokenSymbol;

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
export interface Wallet {
  user_id: string,
  balance: number, // current token balance;
<<<<<<< HEAD
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

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
;
export interface Wallet {;
  userId: string;
  balance: number, // current token balance;
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======



}

}
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
