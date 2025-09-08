export interface TokenTransaction {
  id: string;
  userId: string;
  amount: number;
  reason: string;
  timestamp: number;
  type: 'credit' | 'debit';
}

export interface TokenConfig {
  creditRate: number;
  debitRate: number;
  maxBalance: number;
  minBalance: number;
}

// In-memory storage for demo purposes
const transactions: TokenTransaction[] = [];
let config: TokenConfig = {
  creditRate: 1.0,
  debitRate: 1.0,
  maxBalance: 10000,
  minBalance: 0
};

export function issueTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: Math.random().toString(36).substr(2, 9),
    userId,
    amount,
    reason,
    timestamp: Date.now(),
    type: 'credit'
  };
  
  transactions.push(transaction);
  return transaction;
}

export function deductTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: Math.random().toString(36).substr(2, 9),
    userId,
    amount: -amount,
    reason,
    timestamp: Date.now(),
    type: 'debit'
  };
  
  transactions.push(transaction);
  return transaction;
}

export function getAllTransactions(): TokenTransaction[] {
  return [...transactions].sort((a, b) => b.timestamp - a.timestamp);
}

export function getTransactionsByUser(userId: string): TokenTransaction[] {
  return transactions.filter(t => t.userId === userId);
}

export function getUserBalance(userId: string): number {
  return transactions
    .filter(t => t.userId === userId)
    .reduce((sum, t) => sum + t.amount, 0);
}

export function getConfig(): TokenConfig {
  return { ...config };
}

export function setConfig(newConfig: Partial<TokenConfig>): void {
  config = { ...config, ...newConfig };
}