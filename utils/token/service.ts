<<<<<<< HEAD
<<<<<<< HEAD
export function getConfig() {
  return {
    tokenName: 'Zion Token',
    tokenSymbol: 'ZION',
    decimals: 18,
    totalSupply: 1000000
  };
=======
export interface TokenTransaction {;
  id: string;
  userId: string;
  amount: number;
  type: 'issue' | 'redeem' | 'transfer';
  reason: string;
  timestamp: number;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}

// Mock data storage - replace with actual database
let transactions: TokenTransaction[] = [];
export function issueTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
<<<<<<< HEAD
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    userId
    amount
    type: 'issue'
    reason
    timestamp: Date.now()
  }
=======
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    type: 'issue',
    reason,
    timestamp: Date.now();
  };
  
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  transactions.push(transaction);
  return transaction;
}
export function redeemTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    userId
    amount: -amount, // Negative for redemption
<<<<<<< HEAD
    type: 'redeem'
    reason
    timestamp: Date.now()
  }
=======
    type: 'redeem',
    reason,
    timestamp: Date.now();
  };
  
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD

=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
