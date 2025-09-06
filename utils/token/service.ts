<<<<<<< HEAD
<<<<<<< HEAD
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
=======
export interface TokenConfig {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: number;
  maxSupply?: number;
  description: string;
  iconUrl?: string;
  website?: string;
  whitepaper?: string;
  socials?: {
    twitter?: string;
    discord?: string;
    telegram?: string;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  };
  createdAt: string;
  updatedAt: string;
}

export interface TokenIssue {
  id: string;
  tokenId: string;
  recipient: string;
  amount: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  createdAt: string;
  processedAt?: string;
  adminNotes?: string;
}

// In-memory storage for development
const tokenConfigs: TokenConfig[] = [];
const tokenIssues: TokenIssue[] = [];

export async function createTokenConfig(config: Omit<TokenConfig, 'id' | 'createdAt' | 'updatedAt'>): Promise<TokenConfig> {
  const tokenConfig: TokenConfig = {
    ...config,
    id: `token-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  tokenConfigs.push(tokenConfig);
  return tokenConfig;
}

export async function getTokenConfigs(): Promise<TokenConfig[]> {
  return [...tokenConfigs];
}

export async function getTokenConfigById(id: string): Promise<TokenConfig | null> {
  return tokenConfigs.find(config => config.id === id) || null;
}

export async function updateTokenConfig(id: string, updates: Partial<TokenConfig>): Promise<TokenConfig | null> {
  const configIndex = tokenConfigs.findIndex(config => config.id === id);
  if (configIndex === -1) return null;
  
  tokenConfigs[configIndex] = {
    ...tokenConfigs[configIndex],
    ...updates,
    updatedAt: new Date().toISOString()
  };
  
  return tokenConfigs[configIndex];
}

export async function deleteTokenConfig(id: string): Promise<boolean> {
  const configIndex = tokenConfigs.findIndex(config => config.id === id);
  if (configIndex === -1) return false;
  
  tokenConfigs.splice(configIndex, 1);
  return true;
}

export async function createTokenIssue(issue: Omit<TokenIssue, 'id' | 'createdAt'>): Promise<TokenIssue> {
  const tokenIssue: TokenIssue = {
    ...issue,
    id: `issue-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString()
  };
  
  tokenIssues.push(tokenIssue);
  return tokenIssue;
}

export async function getTokenIssues(): Promise<TokenIssue[]> {
  return [...tokenIssues];
}

export async function getTokenIssueById(id: string): Promise<TokenIssue | null> {
  return tokenIssues.find(issue => issue.id === id) || null;
}

<<<<<<< HEAD
export function setConfig(
  partial: Partial<ReturnType<typeof getConfig>>
): void {
  const current = tokenStore.getConfig();
  tokenStore.setConfig({ ...current, ...partial });
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export async function updateTokenIssue(id: string, updates: Partial<TokenIssue>): Promise<TokenIssue | null> {
  const issueIndex = tokenIssues.findIndex(issue => issue.id === id);
  if (issueIndex === -1) return null;
  
  tokenIssues[issueIndex] = {
    ...tokenIssues[issueIndex],
    ...updates,
    processedAt: updates.status === 'completed' ? new Date().toISOString() : tokenIssues[issueIndex].processedAt
  };
  
  return tokenIssues[issueIndex];
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
