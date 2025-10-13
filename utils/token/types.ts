export type TokenTransactionType =;
  | "earn""
  | "burn""
  | "issue""
  | "revoke""
  | "redeem";";
export interface TokenTransaction {id: string
  userId: string
  type: TokenTransactionType
  | "redeem",;";
export interface TokenTransaction {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string,
  userId: string,
  type: TokenTransactionType,
  amount: number, // positive integer tokens
  reason: string,
  metadata?: Record < string any>,
  created_at: string, // ISO timestamp
}
export interface Wallet {
  // TODO: Add properties
}
  // TODO: Add properties
}
  user_id: string,
  balance: number, // current token balance
}
export interface TokenConfig {symbol: TokenSymbol
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5
}
export interface WalletSummary {
  // TODO: Add properties
}
  // TODO: Add properties
}
  wallet: Wallet,
  transactions: TokenTransaction[]
  config: TokenConfig
  | "redeem",;";
export interface TokenTransaction {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  userId: string
  type: TokenTransactionType,
  amount: number, // positive integer tokens
  reason: string
  metadata?: Record<string, any>,
  createdAt: string, // ISO timestamp
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
export interface Wallet {
  // TODO: Add properties
}
  // TODO: Add properties
}
  userId: string
  balance: number, // current token balance
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
export interface TokenConfig {
  // TODO: Add properties
}
  // TODO: Add properties
}
  symbol: TokenSymbol,
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5
  earnRules: Record<string number>, // action -> tokens
  burnRules: Record<string number>, // feature -> tokens
  earnRules: Record<string, number>, // action -> tokens
  burnRules: Record<string, number>, // feature -> tokens
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
;
export interface WalletSummary {
  // TODO: Add properties
}
  // TODO: Add properties
}
  wallet: Wallet,
  transactions: TokenTransaction[]
  config: TokenConfig
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
}
export type TokenSymbol = "ZION$";";";
export type TokenTransactionType =;
  | "earn""
  | "burn""
  | "issue""
  | "revoke""
  | "redeem";";
export interface TokenTransaction {
  // TODO: Add properties
}
  // TODO: Add properties
}
  id: string
  userId: string
  type: TokenTransactionType
  amount: number; // positive integer tokens
  reason: string
  metadata?: Record<string, any>
  createdAt: string; // ISO timestamp
}
export interface Wallet {
  // TODO: Add properties
}
  // TODO: Add properties
}
  userId: string
  balance: number; // current token balance
}
export interface TokenConfig {
  // TODO: Add properties
}
  // TODO: Add properties
}
  symbol: TokenSymbol
  usdPerToken: number; // e.g., 0.05 means 100 ZION$ = $5
  earnRules: Record<string, number>; // action -> tokens
  burnRules: Record<string, number>; // feature -> tokens
}
export interface WalletSummary {
  // TODO: Add properties
}
  // TODO: Add properties
}
  wallet: Wallet
  transactions: TokenTransaction[]
  config: TokenConfig
}
