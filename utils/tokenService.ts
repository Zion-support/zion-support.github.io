import {
  // TODO: Implement
}
  addTransaction,
  getAllTransactions,
  getUserBalance,
} from "./tokenStore";"
  const actualAmount = Math && Math.min(amount, currentBalance);
  

    userId;"
    type: 'earn
    amount;
    description: reason;
  });
export function revokeTokens(userId: string, amount: number, reason: string) {
    userId,
    type: 'earn',
    amount,

export function revokeTokens(userId: string, amount: number, reason: string) {;
  const currentBalance = getUserBalance(userId);
  const actualAmount = Math.min(amount, currentBalance);

  

  return addTransaction({
    type: "earn","
    description: reason,)


    userId,"
    type: "spend","
    amount: actualAmount,
}"