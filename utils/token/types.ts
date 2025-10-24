export type TokenTransactionType =
  | "earn"
  | "burn"
  | "issue"
  | "revoke"
  | "redeem"
export interface TokenTransaction {id: string
  userId: string
  type: TokenTransactionType
  | "redeem",
export interface TokenTransaction {
  id: string,
  userId: string,
  type: TokenTransactionType,
  amount: number, // positive integer tokens
  reason: string,
  metadata?: Record < string any>,
  created_at: string, // ISO timestamp
}
export interface Wallet {
  user_id: string,
  balance: number, // current token balance
}
export interface TokenConfig {symbol: TokenSymbol
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5
}
export interface WalletSummary {
  wallet: Wallet,
  transactions: TokenTransaction[]
  config: TokenConfig
  | "redeem",
export interface TokenTransaction {
  id: string
  userId: string
  type: TokenTransactionType,
  amount: number, // positive integer tokens
  reason: string
  metadata?: Record<string, any>,
  createdAt: string, // ISO timestamp
  } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}

export interface Wallet {
  userId: string
  balance: number, // current token balance
  } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}

export interface TokenConfig {
  symbol: TokenSymbol,
  usdPerToken: number, // e.g., 0.05 means 100 ZION$ = $5
  earnRules: Record<string number>, // action -> tokens
  burnRules: Record<string number>, // feature -> tokens
  earnRules: Record<string, number>, // action -> tokens
  burnRules: Record<string, number>, // feature -> tokens
  } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}

export interface WalletSummary {
  wallet: Wallet,
  transactions: TokenTransaction[]
  config: TokenConfig
  } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}
}
}
export type TokenSymbol = "ZION$"
export type TokenTransactionType =
  | "earn"
  | "burn"
  | "issue"
  | "revoke"
  | "redeem"
export interface TokenTransaction {
  id: string
  userId: string
  type: TokenTransactionType
  amount: number; // positive integer tokens
  reason: string
  metadata?: Record<string, any>
  createdAt: string; // ISO timestamp
}
export interface Wallet {
  userId: string
  balance: number; // current token balance
}
export interface TokenConfig {
  symbol: TokenSymbol
  usdPerToken: number; // e.g., 0.05 means 100 ZION$ = $5
  earnRules: Record<string, number>; // action -> tokens
  burnRules: Record<string, number>; // feature -> tokens
}
export interface WalletSummary {
  wallet: Wallet
  transactions: TokenTransaction[]
  config: TokenConfig
}
