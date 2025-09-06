<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD

=======
<<<<<<< HEAD
export type TokenSymbol = "ZION$",

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
export type TokenSymbol = "ZION$";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export type TokenSymbol = "ZION$",;
export type TokenSymbol = "ZION$";
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export type TokenTransactionType =;
  | "earn";
  | "burn";
  | "issue";
  | "revoke";
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  | "redeem";
export interface TokenTransaction {id: string;
  userId: string;
  type: TokenTransactionType;
  | "redeem",;
export interface TokenTransaction {;
  id: string,;
  userId: string,;
  type: TokenTransactionType,;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  amount: number, // positive integer tokens;
  reason: string;
  metadata?: Record<string, any>;
  createdAt: string, // ISO timestamp;
}
export interface Wallet {userId: string;
  balance: number, // current token balance;
<<<<<<< HEAD
<<<<<<< HEAD

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
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;




}

export interface WalletSummary {
  wallet: Wallet,

  transactions: TokenTransaction[];
  config: TokenConfig;



}

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
