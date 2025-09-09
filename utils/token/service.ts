import { tokenStore } from './storage';

export interface TokenConfig {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: number;
  maxSupply: number;
  mintingEnabled: boolean;
  burningEnabled: boolean;
  transferEnabled: boolean;
}

export interface TokenTransaction {
  id: string;
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

export function issueTokens(userId: string, amount: number, reason: string): TokenTransaction {
  return tokenStore.addTransaction({
    userId,
    amount,
    type: 'mint',
    reason
  });
}

export function revokeTokens(userId: string, amount: number, reason: string): TokenTransaction {
  return tokenStore.addTransaction({
    userId,
    amount: -amount, // negative amount for revocation
    type: 'burn',
    reason
  });
}