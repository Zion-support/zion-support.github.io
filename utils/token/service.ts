export interface TokenConfig {
  tokenName: string;
  tokenSymbol: string;
  totalSupply: number;
  decimals: number;
  initialPrice: number;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'mint' | 'burn' | 'transfer';
  amount: number;
  timestamp: number;
  description: string;
}

// Mock data - in production, this would connect to a real database
const mockConfig: TokenConfig = {
  tokenName: 'ZION Token',
  tokenSymbol: 'ZION',
  totalSupply: 1000000000,
  decimals: 18,
  initialPrice: 0.01
};

const mockTransactions: Transaction[] = [
  {
    id: '1',
    userId: 'user1',
    type: 'mint',
    amount: 1000,
    timestamp: Date.now() - 86400000,
    description: 'Initial token allocation'
  },
  {
    id: '2',
    userId: 'user2',
    type: 'mint',
    amount: 500,
    timestamp: Date.now() - 43200000,
    description: 'Reward for early participation'
  }
];

export function issueTokens(
  userId: string,
  amount: number,
  reason: string,
): TokenTransaction {
  const transaction: TokenTransaction = {
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    userId,
    type: 'mint',
    amount,
    timestamp: Date.now(),
    description: reason
  };

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return transaction;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    id: `tx_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
    userId,
    type: 'burn',
    amount,
    timestamp: Date.now(),
    description: reason
  };
  mockTransactions.push(transaction);
  return transaction;
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
