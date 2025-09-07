  amount: number;
  type: 'issue' | 'redeem' | 'transfer';
  reason: string;
  timestamp: number;

}

// Mock data storage - replace with actual database
let transactions: TokenTransaction[] = [];

    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    type: 'issue',
    reason,
    timestamp: Date.now();
  };

  transactions.push(transaction);
  return transaction;
export function redeemTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    userId
    amount: -amount, // Negative for redemption

    type: 'redeem',

  const current = tokenStore && tokenStore.getConfig();
  tokenStore && tokenStore.setConfig({ ...current, ...partial });
