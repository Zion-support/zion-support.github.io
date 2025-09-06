<<<<<<< HEAD
export interface TokenTransaction {;
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
    timestamp: Date.now();
  };
  
  transactions.push(transaction);
  return transaction;
}
export function redeemTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    userId
    amount: -amount, // Negative for redemption
    type: 'redeem',
    reason,
    timestamp: Date.now();
  };
  
  transactions.push(transaction);
  return transaction;
}
export function setConfig(
  partial: Partial<ReturnType<typeof getConfig>>
): void {;
  const current = getConfig();
  // Update the configuration
  Object.assign(current, partial);
}
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
