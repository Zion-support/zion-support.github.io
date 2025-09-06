export interface TokenConfig {
  totalSupply: number;
  maxSupply: number;
  decimals: number;
  symbol: string;
  name: string;
}

export interface TokenTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'issue' | 'revoke' | 'transfer';
  reason: string;
  timestamp: number;
}

let config: TokenConfig = {
  totalSupply: 1000000,
  maxSupply: 10000000,
  decimals: 18,
  symbol: 'ZION',
  name: 'Zion Token'
};

let transactions: TokenTransaction[] = [];

export function getConfig(): TokenConfig {
  return { ...config };
}

export function setConfig(newConfig: Partial<TokenConfig>): void {
  config = { ...config, ...newConfig };
}

export function getAllTransactions(): TokenTransaction[] {
  return [...transactions];
}

export function issueTokens(userId: string, amount: number, reason: string): TokenTransaction {
  if (amount <= 0) throw new Error('Amount must be positive');
  if (config.totalSupply + amount > config.maxSupply) throw new Error('Exceeds max supply');
  
  const tx: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    type: 'issue',
    reason,
    timestamp: Date.now()
  };
  
  transactions.push(tx);
  config.totalSupply += amount;
  
  return tx;
}

export function revokeTokens(userId: string, amount: number, reason: string): TokenTransaction {
  if (amount <= 0) throw new Error('Amount must be positive');
  
  const tx: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    type: 'revoke',
    reason,
    timestamp: Date.now()
  };
  
  transactions.push(tx);
  config.totalSupply = Math.max(0, config.totalSupply - amount);
  
  return tx;
}