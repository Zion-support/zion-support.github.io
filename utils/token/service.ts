<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
export function getConfig() {
  return {
    tokenName: 'Zion Token',
    tokenSymbol: 'ZION',
    decimals: 18,
    totalSupply: 1000000
  };
<<<<<<< HEAD
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
  amount: number;
  type: "issue" | "redeem" | "transfer";
  reason: string;
  timestamp: number;



}
// Mock data storage - replace with actual database;
let transactions: TokenTransaction[] = [];
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main

export function issueTokens(
  userId: string,
  amount: number,
  reason: string,
): TokenTransaction {
  const transaction: TokenTransaction = {
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    userId
    amount
    type: 'issue'
    reason
    timestamp: Date.now()
  }
<<<<<<< HEAD
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    type: "issue",
    reason,
    timestamp: Date.now(),
  };
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  transactions.push(transaction);
  return transaction;
}

export function redeemTokens(
  userId: string,
  amount: number,
  reason: string,
): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    userId
    amount: -amount, // Negative for redemption
<<<<<<< HEAD
=======
<<<<<<< HEAD
    type: "redeem",
    reason,
    timestamp: Date.now(),
  };

=======
<<<<<<< HEAD
    type: "redeem",
=======
<<<<<<< HEAD
=======

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

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    type: 'redeem',
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    reason,
    timestamp: Date.now(),
  };
<<<<<<< HEAD

=======
  
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
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
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
export function setConfig(
  partial: Partial<ReturnType<typeof getConfig>>,
): void {
  const current = getConfig();
  // Update the configuration
  Object.assign(current, partial);
<<<<<<< HEAD
=======
=======
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
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export function set_config (
  partial: Partial < ReturnType < typeof get_config>>): void {
  const current = get_config ();
  // Update the configuration;
  Object.assign (current, partial);
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
}
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
}
  const current = tokenStore.getConfig();
  tokenStore.setConfig({ ...current, ...partial });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
