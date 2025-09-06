



  id: string;
  userId: string;


  amount: number;
  type: 'issue' | 'redeem' | 'transfer';
  reason: string;
  timestamp: number;






>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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
}
export function redeemTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    userId
    amount: -amount, // Negative for redemption



;
export function issue_tokens (user_id: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`,
    user_id,
    amount,
    type: 'issue',
    reason,
    timestamp: Date.now ();
  }
;
  transactions.push (transaction);
  return transaction;
}
export function redeem_tokens (user_id: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now ()}_${Math.random ().to_string (36).substr (2, 9)}`,
    user_id,
    amount: -amount, // Negative for redemption;
    type: 'redeem',
    reason,
    timestamp: Date.now ();
  }
;
  transactions.push (transaction);


  return transaction;


  transactions.push(transaction);
  return transaction;
}






>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



