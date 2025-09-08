export interface TokenConfig {
  tokenName: string;
  tokenSymbol: string;
  totalSupply: number;
  decimals: number;
  initialPrice: number;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'mint' | 'burn' | 'transfer';
  amount: number;
  timestamp: number;
  description: string;
}

// Mock data - in production, this would connect to a real database
const mockConfig: TokenConfig = {
  tokenName: 'ZION Token',
  tokenSymbol: 'ZION',
  totalSupply: 1000000000,
  decimals: 18,
  initialPrice: 0.01
};

const mockTransactions: Transaction[] = [
  {
    id: '1',
    userId: 'user1',
    type: 'mint',
    amount: 1000,
    timestamp: Date.now() - 86400000,
    description: 'Initial token allocation'
  },
  {
    id: '2',
    userId: 'user2',
    type: 'mint',
    amount: 500,
    timestamp: Date.now() - 43200000,
    description: 'Reward for early participation'
  }
];

export function getConfig(): TokenConfig {
  return { ...mockConfig };
}

export function getAllTransactions(): Transaction[] {
  return [...mockTransactions];
}

export function issueTokens(userId: string, amount: number, reason: string): Transaction {
  const transaction: Transaction = {
    id: Math.random().toString(36).substr(2, 9),
    userId,
    type: 'mint',
    amount,
    timestamp: Date.now(),
    description: reason
  };
  mockTransactions.push(transaction);
  return transaction;
}

export function revokeTokens(userId: string, amount: number, reason: string): Transaction {
  const transaction: Transaction = {
    id: Math.random().toString(36).substr(2, 9),
    userId,
    type: 'burn',
    amount,
    timestamp: Date.now(),
    description: reason
  };
  mockTransactions.push(transaction);
  return transaction;
}