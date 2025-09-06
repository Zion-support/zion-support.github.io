export interface TokenTransaction {
  id: string;
  userId: string;
  amount: number;
  reason: string;
  timestamp: number;
}

export interface TokenConfig {
  maxSupply: number;
  currentSupply: number;
  inflationRate: number;
}

const mockTransactions: TokenTransaction[] = [];
let mockConfig: TokenConfig = {
  maxSupply: 1000000,
  currentSupply: 0,
  inflationRate: 0.02
};

export function getConfig(): TokenConfig {
  return { ...mockConfig };
}

export function getAllTransactions(): TokenTransaction[] {
  return [...mockTransactions];
}

export function issueTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const tx: TokenTransaction = {
    id: Math.random().toString(36).substr(2, 9),
    userId,
    amount,
    reason,
    timestamp: Date.now()
  };
  mockTransactions.push(tx);
  mockConfig.currentSupply += amount;
  return tx;
}

export function revokeTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const tx: TokenTransaction = {
    id: Math.random().toString(36).substr(2, 9),
    userId,
    amount: -amount,
    reason,
    timestamp: Date.now()
  };
  mockTransactions.push(tx);
  mockConfig.currentSupply = Math.max(0, mockConfig.currentSupply - amount);
  return tx;
}