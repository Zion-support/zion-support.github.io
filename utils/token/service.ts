// Mock token service utility
export interface TokenTransaction {
  id: string;
  userId: string;
  amount: number;
  reason: string;
  timestamp: number,
}

const transactions: TokenTransaction[] = [];

export function getAllTransactions(): TokenTransaction[] {
  return transactions,
}

export function issueTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    reason,
    timestamp: Date.now()
  };
  transactions.push(transaction);
  return transaction;
}

export function getConfig() {
  return {
    enabled: true,
    rate: 1.0,
    maxPerDay: 1000
  };
}

export function setConfig(config: any) {
  // Mock implementation
}

export function revokeTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount: -amount, // Negative amount for revocation
    reason,
    timestamp: Date.now()
  };
  transactions.push(transaction);
  return transaction;
}