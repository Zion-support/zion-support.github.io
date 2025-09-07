<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { randomUUID } from 'crypto';
import { tokenStore } from './storage';
import { TokenTransaction, WalletSummary } from './types';

export function getWalletSummary(userId: string): WalletSummary {
  const wallet = tokenStore.getWallet(userId);
  const transactions = tokenStore.getTransactions(userId);
  const config = tokenStore.getConfig();
  return { wallet, transactions, config };

export function earnTokens(
  userId: string,
  amount: number,
  reason: string,
  metadata?: Record<string, any>
): TokenTransaction {
  if (amount <= 0) throw new Error('Amount must be positive');
  const wallet = tokenStore.getWallet(userId);
  const newBalance = wallet.balance + amount;
  tokenStore.setWalletBalance(userId, newBalance);
  const tx: TokenTransaction = {
    id: randomUUID(),
    userId,
    type: 'earn',
    amount,
    reason,
    metadata,
    createdAt: new Date().toISOString(),
  };
  tokenStore.addTransaction(tx);
  return tx;

export function burnTokens(
  userId: string,
  amount: number,
  reason: string,
  metadata?: Record<string, any>
): TokenTransaction {
  if (amount <= 0) throw new Error('Amount must be positive');
  const wallet = tokenStore.getWallet(userId);
  if (wallet.balance < amount) throw new Error('Insufficient balance');
  const newBalance = wallet.balance - amount;
  tokenStore.setWalletBalance(userId, newBalance);
  const tx: TokenTransaction = {
    id: randomUUID(),
    userId,
    type: 'burn',
    amount,
    reason,
    metadata,
    createdAt: new Date().toISOString(),
  };
  tokenStore.addTransaction(tx);
  return tx;

export function issueTokens(
  userId: string,
  amount: number,
  reason: string
): TokenTransaction {
  const tx = earnTokens(userId, amount, reason);
  tx.type = 'issue';
  return tx;

export function revokeTokens(
  userId: string,
  amount: number,
  reason: string
): TokenTransaction {
  const tx = burnTokens(userId, amount, reason);
  tx.type = 'revoke';
  return tx;

export function handleAction(
  userId: string,
  action: string,
  metadata?: Record<string, any>
): TokenTransaction {
  const { earnRules } = tokenStore.getConfig();
  const amount = earnRules[action];
  if (!amount) throw new Error('Unknown action');
  return earnTokens(userId, amount, action, metadata);

export function burnForFeature(
  userId: string,
  feature: string,
  metadata?: Record<string, any>
): TokenTransaction {
  const { burnRules } = tokenStore.getConfig();
  const amount = burnRules[feature];
  if (!amount) throw new Error('Unknown feature');
  return burnTokens(userId, amount, feature, metadata);

export function redeemToCredits(
  userId: string,
  amount: number
): { tx: TokenTransaction; usd: number } {
  const { usdPerToken } = tokenStore.getConfig();
  const tx = burnTokens(userId, amount, 'redeem_credits');
  tx.type = 'redeem';
  const usd = parseFloat((amount * usdPerToken).toFixed(2));
  return { tx, usd };

export function getAllTransactions() {
  return tokenStore.getTransactions();

<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function getConfig() {
  return {
    tokenName: 'Zion Token',
    tokenSymbol: 'ZION',
    decimals: 18,
    totalSupply: 1000000
  };
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export interface TokenTransaction {;  id: string;
=======
<<<<<<< HEAD
export interface TokenTransaction {;
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export interface TokenTransaction {;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  id: string;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  userId: string;

  id: string;
  user_id: string;
export interface TokenTransaction {};
  id: string;
  user_id: string;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  amount: number;
<<<<<<< HEAD
=======
  type: "issue" | "redeem" | "transfer";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
<<<<<<< HEAD
let transactions: TokenTransaction[] = [];    type: 'redeem',
    reason,
    timestamp: Date.now(),
  };
=======
let transactions: TokenTransaction[] = [];

<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b

main

=======
export function issueTokens(
  userId: string,
  amount: number,
  reason: string,
<<<<<<< HEAD
): TokenTransaction {}
  const transaction: TokenTransaction = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    userId
    amount
    type: 'issue'
    reason
    timestamp: Date.now()
  }
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,"
    type: "issue",
    reason,
    timestamp: Date.now(),;
  };
<<<<<<< HEAD
  


origin/cursor/expand-services-advertise-and-build-project-c28b

main

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======


>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  transactions.push(transaction);
  return transaction;
<<<<<<< HEAD
}

export function redeemTokens(
  userId: string,
  amount: number,
  reason: string,
<<<<<<< HEAD
): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    userId
    amount: -amount, // Negative for redemption
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
): TokenTransaction {}
  const transaction: TokenTransaction = {}`
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    userId;
    amount: -amount, // Negative for redemption"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    type: "redeem",
    reason,
    timestamp: Date.now(),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  };

=======
<<<<<<< HEAD
    type: "redeem",
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

;
export function issue_tokens (user_id: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`,
    user_id,
    amount,
    type: 'issue',
    reason,
    timestamp: Date.now ();
  }
;
  transactions.push (transaction);
  return transaction;
}
export function redeem_tokens (user_id: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`,
    user_id,
    amount: -amount, // Negative for redemption;
    type: 'redeem',
    reason,
    timestamp: Date.now ();
  }
;
  transactions.push (transaction);


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    type: 'redeem',

    reason,
    timestamp: Date.now(),
  };
  
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
  transactions.push(transaction);
  return transaction;
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

  transactions.push(transaction);
  return transaction;


  transactions.push(transaction);
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
  return transaction;
origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

  return transaction;

`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
    type: "redeem",
    reason,
    timestamp: Date.now(),
  };

    type: "redeem",
    type: 'redeem',
    reason,
    timestamp: Date.now(),
  };

  transactions.push(transaction);
  return transaction;

  transactions.push(transaction);
  return transaction;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    id: `tx_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    reason,
    timestamp: Date && Date.now()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    timestamp: Date.now()
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
<<<<<<< HEAD
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
=======

  partial: Partial<ReturnType<typeof getConfig>>,
): void {
  const current = getConfig();
  // Update the configuration
  Object.assign(current, partial);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export interface TokenBalance {
  address: string;
  balance: string;
  tokenId: string;
  lastUpdated: Date;
}

// Mock database - in production, this would connect to a real database
const tokenConfigs: TokenConfig[] = [];
const tokenBalances: TokenBalance[] = [];

export async function createTokenConfig(config: Omit<TokenConfig, 'id' | 'createdAt' | 'updatedAt'>): Promise<TokenConfig> {
  const newConfig: TokenConfig = {
    ...config,
    id: `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  tokenConfigs.push(newConfig);
  return newConfig;
}

export async function getTokenConfig(id: string): Promise<TokenConfig | null> {
  return tokenConfigs.find(config => config.id === id) || null;
}

export async function getAllTokenConfigs(): Promise<TokenConfig[]> {
  return [...tokenConfigs];
}

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
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  };
  

=======
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
}

export function setConfig(
  partial: Partial<ReturnType<typeof getConfig>>,
): void {
  const current = getConfig();
  // Update the configuration
  Object.assign(current, partial);
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  transactions.push(transaction);
=======
=======  transactions.push(transaction);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return transaction;
}

  const current = tokenStore && tokenStore.getConfig();
  tokenStore && tokenStore.setConfig({ ...current, ...partial });
<<<<<<< HEAD
=======

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export function set_config (
  partial: Partial < ReturnType < typeof get_config>>): void {
  const current = get_config ();
  // Update the configuration;
  Object.assign (current, partial);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

main
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
}
origin/cursor/automate-test-improve-and-merge-code-20a4

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
}
  const current = tokenStore.getConfig();
  tokenStore.setConfig({ ...current, ...partial });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

}
  const current = tokenStore.getConfig();
  tokenStore.setConfig({ ...current, ...partial });
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======



"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
}

>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export interface TokenTransaction {;



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
