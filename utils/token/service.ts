export interface TokenConfig {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: number;
}

export const defaultTokenConfig: TokenConfig = {
  name: 'Zion Token',
  symbol: 'ZION',
  decimals: 18,
  totalSupply: 1000000
};

export interface TokenTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'mint' | 'burn' | 'transfer';
  status: 'pending' | 'completed' | 'failed';
  createdAt: number;
  metadata?: Record<string, any>;
}

export function createTokenTransaction(
  userId: string,
  amount: number,
  type: TokenTransaction['type'],
  metadata?: Record<string, any>
): TokenTransaction {
  return {
    id: `tx_${Date.now()}_${Math.random().toString(36).slice(2)}`,
    userId,
    amount,
    type,
    status: 'pending',
    createdAt: Date.now(),
    metadata
  };
}

export function processTokenTransaction(transaction: TokenTransaction): TokenTransaction {
  // Placeholder for token transaction processing
  return {
    ...transaction,
    status: 'completed'
  };
}