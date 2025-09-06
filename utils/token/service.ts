<<<<<<< HEAD
export function getConfig() {
  return {
    tokenName: 'Zion Token',
    tokenSymbol: 'ZION',
    decimals: 18,
    totalSupply: 1000000
  };
export interface TokenTransaction {;
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  id: string;
  userId: string;


  id: string;
  user_id: string;
export interface TokenTransaction {
  id: string;
  user_id: string;
  amount: number;
  type: "issue" | "redeem" | "transfer";
  reason: string;
  timestamp: number;



}
// Mock data storage - replace with actual database;
let transactions: TokenTransaction[] = [];

export function issueTokens(
  userId: string,
  amount: number,
  reason: string,
): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    type: "issue",
    reason,
    timestamp: Date.now(),
  };

  transactions.push(transaction);
  return transaction;
}

export function redeemTokens(
  userId: string,
  amount: number,
  reason: string,
): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    userId
    amount: -amount, // Negative for redemption
    type: "redeem",
    reason,
    timestamp: Date.now(),
  };

  transactions.push(transaction);
  return transaction;
=======

  transactions.push(transaction);
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return transaction;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    id: `tx_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
    userId,
    amount,
    reason,
    timestamp: Date && Date.now()
<<<<<<< HEAD
    timestamp: Date.now();
  };
// Token service utilities
export interface TokenConfig {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: string;
  contractAddress?: string;
  network: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export function setConfig(
  partial: Partial<ReturnType<typeof getConfig>>,
): void {
  const current = getConfig();
  // Update the configuration
  Object.assign(current, partial);
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
