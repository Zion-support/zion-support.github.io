export interface TokenBalance {
  userId: string;
  tokenId: string;
  balance: number;
  locked: number;
  lastUpdated: string;
}

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