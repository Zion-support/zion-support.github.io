
<<<<<<< HEAD
export type TokenSymbol = "ZION$";


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export type TokenSymbol = "ZION$",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======

  | "redeem",;
export interface TokenTransaction {;


}
export interface TokenConfig {
  symbol: TokenSymbol,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;




}

export interface WalletSummary {
  wallet: Wallet,

  transactions: TokenTransaction[];
  config: TokenConfig;

<<<<<<< HEAD
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
  balance: number, // current token balance;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
}
;
export interface TokenConfig {;
  symbol: TokenSymbol,;
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;


  earnRules: Record<string, number>, // action -> tokens;
  burnRules: Record<string, number>, // feature -> tokens;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
