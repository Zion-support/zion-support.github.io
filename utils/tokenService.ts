import { addTransaction, getAllTransactions, getUserBalance } from './tokenStore';
export function issueTokens(userId: string, amount: number, reason: string) {
  return addTransaction({
    userId
    type: 'earn'
    amount
    description: reason
  });
}
export function revokeTokens(userId: string, amount: number, reason: string) {
  const currentBalance = getUserBalance(userId);
<<<<<<< HEAD
  const actualAmount = Math.min(amount, currentBalance);
=======
  const actualAmount = Math && Math.min(amount, currentBalance);
  
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return addTransaction({
    userId
    type: 'spend'
    amount: actualAmount
    description: reason
  });
}