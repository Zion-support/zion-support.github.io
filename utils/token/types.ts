<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type TokenSymbol = "ZION$";
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f



export type TokenSymbol = "ZION$",




export type TokenSymbol = "ZION$";

export type TokenSymbol = "ZION$";
export type TokenSymbol = "ZION$",;
export type TokenSymbol = "ZION$";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======


=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export type TokenSymbol = "ZION$",



<<<<<<< HEAD



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
export type TokenSymbol = "ZION$",



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export type TokenTransactionType =;
  | "earn";
  | "burn";
  | "issue";
  | "revoke";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  | "redeem";
export interface TokenTransaction {;
  id: string;
  userId: string;
  type: TokenTransactionType;
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


;
export type TokenTransactionType =;"
  | "earn";"
  | "burn";"
  | "issue";"
  | "revoke";
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======



  | "redeem";
export interface TokenTransaction {id: string;
  userId: string;
  type: TokenTransactionType;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  | "redeem";
export interface TokenTransaction {;
  id: string;
  userId: string;
  type: TokenTransactionType;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  amount: number, // positive integer tokens;
  reason: string;

  metadata?: Record<string, any>;
  createdAt: string, // ISO timestamp;
}
<<<<<<< HEAD
=======
export interface Wallet {userId: string;
  balance: number, // current token balance;
<<<<<<< HEAD
<<<<<<< HEAD
=======



"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
export interface TokenConfig {symbol: TokenSymbol;


<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======




}
export interface TokenConfig {symbol: TokenSymbol;


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  | "redeem",
export interface TokenTransaction {}
  id: string,
  user_id: string,
  type: TokenTransactionType,;
  amount: number, // positive integer tokens;
  reason: string,
  metadata?: Record < string any>,
  created_at: string, // ISO timestamp;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

}
export interface Wallet {}
  user_id: string,;
  balance: number, // current token balance;

=======
=======





>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
export interface Wallet {
  user_id: string,
  balance: number, // current token balance;
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;



<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======


  | "redeem",;
export interface TokenTransaction {;

}
export interface TokenConfig {
  symbol: TokenSymbol,



  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

export interface WalletSummary {}
  wallet: Wallet,
;
  transactions: TokenTransaction[];
  config: TokenConfig;

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}

<<<<<<< HEAD



}
export interface Wallet {}
  user_id: string,;
  balance: number, // current token balance;
"
=======
}

}
</string>
  metadata?: Record < string any>,
  created_at: string, // ISO timestamp;
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



}
}
}

  // TODO: Implement
"


}
  user_id: string,
  balance: number, // current token balance;

<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  | "redeem",;
=======
"
  | "redeem",;"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export interface TokenTransaction {;

}
}
}
<<<<<<< HEAD
export interface TokenConfig {}
  symbol: TokenSymbol,;
=======
export interface TokenConfig {
  // TODO: Implement
  symbol: TokenSymbol,
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  earn_rules: Record < string number>, // action -> tokens;
  burn_rules: Record < string number>, // feature -> tokens;
  id: string;,
  userId: string;
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
<<<<<<< HEAD
  createdAt: string, // ISO timestamp;
<<<<<<< HEAD
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
export interface Wallet {;
  userId: string;
  balance: number, // current token balance;
<<<<<<< HEAD
<<<<<<< HEAD
=======
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
;
export interface TokenConfig {;
  symbol: TokenSymbol;
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;
  earnRules: Record<string, number>, // action -> tokens;
  burnRules: Record<string, number>, // feature -> tokens;
<<<<<<< HEAD
=======
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
;
export interface WalletSummary {;
  wallet: Wallet;
  transactions: TokenTransaction[];
  config: TokenConfig;
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
  } catch (error) {
    console.error("Error:", error);
=======
  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export interface TokenConfig {;
  symbol: TokenSymbol,;
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return res.status(500).json({ error: "Internal server error" });
  }
}
}


<<<<<<< HEAD

<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
</string>"
pr-12325

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}

}

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
