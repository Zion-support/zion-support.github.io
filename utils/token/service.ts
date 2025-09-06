
}

// Mock data storage - replace with actual database
let transactions: TokenTransaction[] = [];
export function issueTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {

  transactions.push(transaction);
  return transaction;
}
export function redeemTokens(userId: string, amount: number, reason: string): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    userId
    amount: -amount, // Negative for redemption

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

