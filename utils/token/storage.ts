<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { TokenConfig, TokenTransaction, Wallet } from './types';
import { DEFAULT_TOKEN_CONFIG } from './rules';
=======
export interface TokenBalance {
  userId: string;
  tokenId: string;
  balance: number;
  locked: number;
  lastUpdated: string;
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export interface TokenTransaction {
  id: string;
  from: string;
  to: string;
  tokenId: string;
  amount: number;
  type: 'transfer' | 'mint' | 'burn' | 'lock' | 'unlock';
  status: 'pending' | 'completed' | 'failed';
  blockHash?: string;
  transactionHash?: string;
  createdAt: string;
  completedAt?: string;
}

// In-memory storage for development
const balances: TokenBalance[] = [];
const transactions: TokenTransaction[] = [];

export async function getBalance(userId: string, tokenId: string): Promise<TokenBalance | null> {
  return balances.find(b => b.userId === userId && b.tokenId === tokenId) || null;
}

export async function updateBalance(userId: string, tokenId: string, balance: number, locked: number = 0): Promise<TokenBalance> {
  const existingIndex = balances.findIndex(b => b.userId === userId && b.tokenId === tokenId);
  
  const tokenBalance: TokenBalance = {
    userId,
    tokenId,
    balance,
    locked,
    lastUpdated: new Date().toISOString()
  };
  
  if (existingIndex >= 0) {
    balances[existingIndex] = tokenBalance;
  } else {
    balances.push(tokenBalance);
  }
  
  return tokenBalance;
}

export async function createTransaction(transaction: Omit<TokenTransaction, 'id' | 'createdAt'>): Promise<TokenTransaction> {
  const tokenTransaction: TokenTransaction = {
    ...transaction,
    id: `tx-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString()
  };
  
  transactions.push(tokenTransaction);
  return tokenTransaction;
}

export async function getTransactions(userId: string, tokenId?: string): Promise<TokenTransaction[]> {
  return transactions.filter(tx => 
    (tx.from === userId || tx.to === userId) && 
    (!tokenId || tx.tokenId === tokenId)
  );
}

<<<<<<< HEAD
  constructor() {
    const fromDisk = readFromDisk();
    this.data = fromDisk ?? {
      wallets: {},
      transactions: [],
      config: DEFAULT_TOKEN_CONFIG,
    };
  }

  getData(): TokenStoreData {
    return this.data;
  }

  save(): void {
    writeToDisk(this.data);
  }

const store = new InMemoryTokenStore();

export const tokenStore = {
  getConfig(): TokenConfig {
    return store.getData().config;
  },
  setConfig(config: TokenConfig): void {
    store.getData().config = config;
    store.save();
  },
  getWallet(userId: string): Wallet {
    const wallets = store.getData().wallets;
    if (!wallets[userId]) {
      wallets[userId] = { userId, balance: 0 };
      store.save();
    }
    return wallets[userId];
  },
  setWalletBalance(userId: string, balance: number): Wallet {
    const wallets = store.getData().wallets;
    wallets[userId] = { userId, balance };
    store.save();
    return wallets[userId];
  },
  addTransaction(tx: TokenTransaction): void {
    store.getData().transactions.unshift(tx);
    store.save();
  },
  getTransactions(userId?: string): TokenTransaction[] {
    const txs = store.getData().transactions;
    if (!userId) return txs;
    return txs.filter(t => t.userId === userId);
  },
};
=======
// Token storage utilities
import { TokenConfig, TokenBalance } from './service';

export interface TokenStorage {
  configs: TokenConfig[];
  balances: TokenBalance[];
  lastUpdated: Date;
}

export class TokenStorageManager {
  private storage: TokenStorage = {
    configs: [],
    balances: [],
    lastUpdated: new Date()
  };

  async saveConfigs(configs: TokenConfig[]): Promise<void> {
    this.storage.configs = configs;
    this.storage.lastUpdated = new Date();
  }

  async loadConfigs(): Promise<TokenConfig[]> {
    return this.storage.configs;
  }

  async saveBalances(balances: TokenBalance[]): Promise<void> {
    this.storage.balances = balances;
    this.storage.lastUpdated = new Date();
  }

  async loadBalances(): Promise<TokenBalance[]> {
    return this.storage.balances;
  }

  async getStorage(): Promise<TokenStorage> {
    return this.storage;
  }

  async clearStorage(): Promise<void> {
    this.storage = {
      configs: [],
      balances: [],
      lastUpdated: new Date()
    };
  }
}

// Singleton instance
export const tokenStorage = new TokenStorageManager();
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export async function updateTransactionStatus(id: string, status: TokenTransaction['status'], transactionHash?: string): Promise<TokenTransaction | null> {
  const txIndex = transactions.findIndex(tx => tx.id === id);
  if (txIndex === -1) return null;
  
  transactions[txIndex] = {
    ...transactions[txIndex],
    status,
    transactionHash,
    completedAt: status === 'completed' ? new Date().toISOString() : transactions[txIndex].completedAt
  };
  
  return transactions[txIndex];
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
