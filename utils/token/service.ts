<<<<<<< HEAD
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
=======
<<<<<<< HEAD
export function getConfig() {
  return {
    tokenName: 'Zion Token',
    tokenSymbol: 'ZION',
    decimals: 18,
    totalSupply: 1000000
  };
export interface TokenTransaction {;
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  id: string;
  userId: string;


  id: string;
  user_id: string;
export interface TokenTransaction {
  id: string;
  user_id: string;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  amount: number;
  reason: string;
<<<<<<< HEAD
  metadata?: Record<string, any>;
): TokenTransaction {;
  if (amount <= 0) throw new Error("Amount must be positive");
  const wallet = tokenStore.getWallet(userId);
  const newBalance = wallet.balance + amount;
  tokenStore.setWalletBalance(userId, newBalance);
  const tx: TokenTransaction = {;
    id: randomUUID();
    userId;
    type: "earn";
    amount;
    reason;
    metadata;
    createdAt: new Date().toISOString()};
  tokenStore.addTransaction(tx);
  return tx;
}
=======
  timestamp: number;



}
// Mock data storage - replace with actual database;
let transactions: TokenTransaction[] = [];
<<<<<<< HEAD
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    userId
    amount
    type: 'issue'
    reason
    timestamp: Date.now()
  }
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    type: 'issue',
    reason,
    timestamp: Date.now();
  };
  
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  transactions.push(transaction);
  return transaction;
}
export function redeemTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    userId
    amount: -amount, // Negative for redemption
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
export function burnTokens(;
  userId: string;
  amount: number;
  reason: string;
  metadata?: Record<string, any>;
): TokenTransaction {;
  if (amount <= 0) throw new Error("Amount must be positive");
  const wallet = tokenStore.getWallet(userId);
  if (wallet.balance < amount) throw new Error("Insufficient balance");
  const newBalance = wallet.balance - amount;
  tokenStore.setWalletBalance(userId, newBalance);
  const tx: TokenTransaction = {;
    id: randomUUID();
    userId;
    type: "burn";
    amount;
    reason;
    metadata;
    createdAt: new Date().toISOString()};
  tokenStore.addTransaction(tx);
  return tx;
}
;
export function issueTokens(;
  userId: string;
  amount: number;
  reason: string;
): TokenTransaction {;
  const tx = earnTokens(userId, amount, reason);
  tx.type = "issue";
  return tx;
}
;
<<<<<<< HEAD
export function revokeTokens(;
  userId: string;
  amount: number;
  reason: string;
): TokenTransaction {;
  const tx = burnTokens(userId, amount, reason);
  tx.type = "revoke";
  return tx;
}
;
export function handleAction(userId: string, action: string, metadata?: Record<string, any>): TokenTransaction {;
  const { earnRules } = tokenStore.getConfig();
  const amount = earnRules[action];
  if (!amount) throw new Error("Unknown action");
  return earnTokens(userId, amount, action, metadata);
=======
  transactions.push (transaction);

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    type: 'redeem',
    reason,
    timestamp: Date.now();
  };
  
<<<<<<< HEAD
  transactions.push(transaction);
  return transaction;
=======

  transactions.push(transaction);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return transaction;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    id: `tx_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    reason,
    timestamp: Date && Date.now()
<<<<<<< HEAD
    timestamp: Date.now();
  };
// Token service utilities
export interface TokenConfig {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: string;
  contractAddress?: string;
  network: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
;
export function burnForFeature(userId: string, feature: string, metadata?: Record<string, any>): TokenTransaction {;
  const { burnRules } = tokenStore.getConfig();
  const amount = burnRules[feature];
  if (!amount) throw new Error("Unknown feature");
  return burnTokens(userId, amount, feature, metadata);
}
;
export function redeemToCredits(userId: string, amount: number): { tx: TokenTransaction, usd: number } {;
  const { usdPerToken } = tokenStore.getConfig();
  const tx = burnTokens(userId, amount, "redeem_credits");
  tx.type = "redeem";
  const usd = parseFloat((amount * usdPerToken).toFixed(2));
  return { tx, usd }
}
;
export function getAllTransactions() {;
  return tokenStore.getTransactions();
}
;
export function getConfig() {;
  return tokenStore.getConfig();
}
<<<<<<< HEAD
;
export function setConfig(partial: Partial<ReturnType<typeof getConfig>>): void {;
  const current = tokenStore.getConfig();
  tokenStore.setConfig({ ...current, ...partial });
}
=======

export async function updateTokenConfig(id: string, updates: Partial<TokenConfig>): Promise<TokenConfig | null> {
  const configIndex = tokenConfigs.findIndex(config => config.id === id);
  if (configIndex === -1) return null;
  
  tokenConfigs[configIndex] = {
    ...tokenConfigs[configIndex],
    ...updates,
    updatedAt: new Date(),
  };
  return tokenConfigs[configIndex];
}

export async function deleteTokenConfig(id: string): Promise<boolean> {
  const configIndex = tokenConfigs.findIndex(config => config.id === id);
  if (configIndex === -1) return false;
  
  tokenConfigs.splice(configIndex, 1);
  return true;
}

export async function getTokenBalance(address: string, tokenId: string): Promise<TokenBalance | null> {
  return tokenBalances.find(balance => 
    balance.address === address && balance.tokenId === tokenId
  ) || null;
}

export async function updateTokenBalance(address: string, tokenId: string, balance: string): Promise<TokenBalance> {
  const existingIndex = tokenBalances.findIndex(b => 
    b.address === address && b.tokenId === tokenId
  );
  
  const balanceData: TokenBalance = {
    address,
    balance,
    tokenId,
    lastUpdated: new Date(),
  };
  
  if (existingIndex >= 0) {
    tokenBalances[existingIndex] = balanceData;
  } else {
    tokenBalances.push(balanceData);
  }
  
  return balanceData;
}

export async function getAllTokenBalances(address?: string): Promise<TokenBalance[]> {
  if (address) {
    return tokenBalances.filter(balance => balance.address === address);
  }
  return [...tokenBalances];
}
=======
  };
  
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  transactions.push(transaction);
  return transaction;
}

  const current = tokenStore && tokenStore.getConfig();
  tokenStore && tokenStore.setConfig({ ...current, ...partial });

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export function set_config (
  partial: Partial < ReturnType < typeof get_config>>): void {
  const current = get_config ();
  // Update the configuration;
  Object.assign (current, partial);
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
