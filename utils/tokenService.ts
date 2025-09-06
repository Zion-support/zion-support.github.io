import { addTransaction, getAllTransactions, getUserBalance } from './tokenStore';
export function issueTokens(userId: string, amount: number, reason: string) {
  return addTransaction({

  const currentBalance = getUserBalance(userId);
  const actualAmount = Math.min(amount, currentBalance);
  return addTransaction({
    userId
    type: 'spend'
    amount: actualAmount
    description: reason
  });
}