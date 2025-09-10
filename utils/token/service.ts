import { randomUUID } from "crypto";
import { tokenStore } from "./storage";
import { TokenTransaction, WalletSummary } from "./types";
export function getWalletSummary(userId: string): WalletSummary {;
  const wallet = tokenStore.getWallet(userId);
  const transactions = tokenStore.getTransactions(userId);
  const config = tokenStore.getConfig();
  return { wallet, transactions, config }
}
;
export function earnTokens(;
  userId: string;
  amount: number;
  type: 'mint' | 'burn' | 'transfer';
  reason: string;
  timestamp: number;
  from?: string;
  to?: string;
}

export function getConfig(): TokenConfig {
  return tokenStore.getConfig();
}

export function getAllTransactions(): TokenTransaction[] {
  return tokenStore.getAllTransactions();
}
