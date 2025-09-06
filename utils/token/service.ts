export function getConfig() {
  return {
    tokenName: 'Zion Token',
    tokenSymbol: 'ZION',
    decimals: 18,
    totalSupply: 1000000
  };
}

export async function issueTokens(userId: string, amount: number, reason: string) {
  // Mock implementation
  return {
    id: Date.now().toString(),
    userId,
    amount,
    reason,
    timestamp: new Date().toISOString()
  };
}

export async function revokeTokens(userId: string, amount: number, reason: string) {
  // Mock implementation
  return {
    id: Date.now().toString(),
    userId,
    amount,
    reason,
    timestamp: new Date().toISOString()
  };
}
