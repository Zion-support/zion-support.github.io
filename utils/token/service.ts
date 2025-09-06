export interface TokenTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'issue' | 'redeem' | 'transfer';
  reason: string;
  timestamp: number;
}

// Mock data storage - replace with actual database
let transactions: TokenTransaction[] = [];

export function issueTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    type: 'issue',
    reason,
    timestamp: Date.now()
  };
  
  transactions.push(transaction);
  return transaction;
}

export function redeemTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount: -amount, // Negative for redemption
    type: 'redeem',
    reason,
    timestamp: Date.now()
  };
  
  transactions.push(transaction);
  return transaction;
}

export function revokeTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount: -amount, // Negative for revocation
    type: 'redeem', // Use redeem type for revocation
    reason,
    timestamp: Date.now()
  };
  
  transactions.push(transaction);
  return transaction;
}

export function getAllTransactions(): TokenTransaction[] {
  return [...transactions].sort((a, b) => b.timestamp - a.timestamp);
}

export function getTransactionsByUser(userId: string): TokenTransaction[] {
  return transactions.filter(tx => tx.userId === userId);
}

export function getTokenBalance(userId: string): number {
  return transactions
    .filter(tx => tx.userId === userId)
    .reduce((balance, tx) => balance + tx.amount, 0);
}

export function getConfig() {
  return {
    tokenName: 'ZION$',
    tokenSymbol: 'ZION',
    decimals: 18,
    totalSupply: 1000000000,
    issueRate: 1.0,
    redeemRate: 1.0,
    minIssueAmount: 1,
    maxIssueAmount: 10000
  };
}