export interface TokenTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'earn' | 'spend' | 'transfer';
  description: string;
  timestamp: string;
}

export interface TokenConfig {
  name: string;
  symbol: string;
  totalSupply: number;
  circulatingSupply: number;
  exchangeRate: number;
}

// Mock data for development
const mockTransactions: TokenTransaction[] = [
  {
    id: '1',
    userId: 'user1',
    amount: 100,
    type: 'earn',
    description: 'Task completion reward',
    timestamp: new Date().toISOString()
  }
];

const mockConfig: TokenConfig = {
  name: 'Zion Token',
  symbol: 'ZION',
  totalSupply: 1000000,
  circulatingSupply: 500000,
  exchangeRate: 0.1
};

export function getAllTransactions(): TokenTransaction[] {
  return mockTransactions;
}

export function getConfig(): TokenConfig {
  return mockConfig;
}

export function issueTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const tx: TokenTransaction = {
    id: Date.now().toString(),
    userId,
    amount,
    type: 'earn',
    description: reason,
    timestamp: new Date().toISOString()
  };
  mockTransactions.push(tx);
  return tx;
}

export function revokeTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const tx: TokenTransaction = {
    id: Date.now().toString(),
    userId,
    amount: -amount,
    type: 'spend',
    description: reason,
    timestamp: new Date().toISOString()
  };
  mockTransactions.push(tx);
  return tx;
}