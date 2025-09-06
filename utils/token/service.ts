

  amount: number;
  type: 'issue' | 'redeem' | 'transfer';
  reason: string;
  timestamp: number;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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
  


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
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
  


  return transaction;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  transactions.push(transaction);
  return transaction;
}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


