export interface TokenTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'credit' | 'debit';
  reason: string;
  timestamp: string;
  balance: number;
}

export interface TokenConfig {
  creditRate: number;
  debitRate: number;
  maxBalance: number;
  minBalance: number;
}

const transactions: TokenTransaction[] = [];
let config: TokenConfig = {
  creditRate: 1.0,
  debitRate: 1.0,
  maxBalance: 10000,
  minBalance: 0
};

export function getConfig(): TokenConfig {
  return { ...config };
}

export function getAllTransactions(): TokenTransaction[] {
  return [...transactions];
}

export function issueTokens(userId: string, amount: number, reason: string): TokenTransaction {
  if (amount <= 0) {
    throw new Error('Amount must be positive');
  }

  const userTransactions = transactions.filter(t => t.userId === userId);
  const currentBalance = userTransactions.length > 0 ? userTransactions[userTransactions.length - 1].balance : 0;
  const newBalance = currentBalance + amount;

  if (newBalance > config.maxBalance) {
    throw new Error('Balance would exceed maximum allowed');
  }

  const transaction: TokenTransaction = {
    id: Date.now().toString(),
    userId,
    amount,
    type: 'credit',
    reason,
    timestamp: new Date().toISOString(),
    balance: newBalance
  };

  transactions.push(transaction);
  return transaction;
}

export function deductTokens(userId: string, amount: number, reason: string): TokenTransaction {
  if (amount <= 0) {
    throw new Error('Amount must be positive');
  }

  const userTransactions = transactions.filter(t => t.userId === userId);
  const currentBalance = userTransactions.length > 0 ? userTransactions[userTransactions.length - 1].balance : 0;
  const newBalance = currentBalance - amount;

  if (newBalance < config.minBalance) {
    throw new Error('Insufficient balance');
  }

  const transaction: TokenTransaction = {
    id: Date.now().toString(),
    userId,
    amount,
    type: 'debit',
    reason,
    timestamp: new Date().toISOString(),
    balance: newBalance
  };

  transactions.push(transaction);
  return transaction;
}

export function getBalance(userId: string): number {
  const userTransactions = transactions.filter(t => t.userId === userId);
  return userTransactions.length > 0 ? userTransactions[userTransactions.length - 1].balance : 0;
}

export function updateConfig(newConfig: Partial<TokenConfig>): void {
  config = { ...config, ...newConfig };
}