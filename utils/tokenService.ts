import { addTransaction, getAllTransactions, getUserBalance } from './tokenStore';
export function issueTokens(userId: string, amount: number, reason: string) {
  return addTransaction({
<<<<<<< HEAD
    userId
    type: 'earn'
    amount
    description: reason
  });
}
export function revokeTokens(userId: string, amount: number, reason: string) {
=======
    userId,
    type: 'earn',
    amount,
    description: reason;
  });
}

export function revokeTokens(userId: string, amount: number, reason: string) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const currentBalance = getUserBalance(userId);
  const actualAmount = Math.min(amount, currentBalance);
  return addTransaction({
    userId
    type: 'spend'
    amount: actualAmount
    description: reason
  });
}