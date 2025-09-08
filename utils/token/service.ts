export interface TokenTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'issue' | 'revoke' | 'transfer';
  reason: string;
  timestamp: number;
}

export interface TokenConfig {
  totalSupply: number;
  issued: number;
  reserved: number;
}

const transactions: TokenTransaction[] = [];
let config: TokenConfig = {
  totalSupply: 1000000,
  issued: 0,
  reserved: 100000
};

export function getConfig(): TokenConfig {
  return { ...config };
}

export function getAllTransactions(): TokenTransaction[] {
  return [...transactions];
}

export function issueTokens(userId: string, amount: number, reason: string): TokenTransaction {
  if (config.issued + amount > config.totalSupply - config.reserved) {
    throw new Error('Insufficient token supply');
  }
  
  const tx: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    type: 'issue',
    reason,
    timestamp: Date.now()
  };
  
  transactions.push(tx);
  config.issued += amount;
  
  return tx;
}

export function revokeTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const userBalance = getUserBalance(userId);
  if (userBalance < amount) {
    throw new Error('Insufficient user balance');
  }
  
  const tx: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount: -amount,
    type: 'revoke',
    reason,
    timestamp: Date.now()
  };
  
  transactions.push(tx);
  config.issued -= amount;
  
  return tx;
}

export function getUserBalance(userId: string): number {
  return transactions
    .filter(tx => tx.userId === userId)
    .reduce((sum, tx) => sum + tx.amount, 0);
}