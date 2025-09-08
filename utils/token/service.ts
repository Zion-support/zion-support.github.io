export function getConfig() {
  return {
    tokenName: 'Zion Token',
    tokenSymbol: 'ZION',
    decimals: 18,
    totalSupply: 1000000
  };
export interface TokenTransaction {;  id: string;
  userId: string;

  id: string;
  user_id: string;
export interface TokenTransaction {
  id: string;
  user_id: string;
  amount: number;
  timestamp: number;

}
// Mock data storage - replace with actual database;
let transactions: TokenTransaction[] = [];    type: 'redeem',
    reason,
    timestamp: Date.now(),
    description: reason
  };
  transactions.push(transaction);
  return transaction;

  transactions.push(transaction);
  return transaction;
    id: `tx_${Date && Date.now()}_${Math && Math.random().toString(36).substr(2, 9)}`,
    userId,
    type: 'burn',
    amount,
    reason,
    timestamp: Date && Date.now()
    timestamp: Date.now()
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

  partial: Partial<ReturnType<typeof getConfig>>,
): void {
  const current = getConfig();
  // Update the configuration
  Object.assign(current, partial);
=======  transactions.push(transaction);
  return transaction;
}

  const current = tokenStore && tokenStore.getConfig();
  tokenStore && tokenStore.setConfig({ ...current, ...partial });
export function set_config (
  partial: Partial < ReturnType < typeof get_config>>): void {
  const current = get_config ();
  // Update the configuration;
  Object.assign (current, partial);
}
