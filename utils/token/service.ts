// Token service utility functions
export interface TokenConfig {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: string;
}

export async function getTokenConfig(): Promise<TokenConfig> {
  // Mock implementation
  return {
    id: 'zion-token',
    name: 'Zion Token',
    symbol: 'ZION',
    decimals: 18,
    totalSupply: '1000000000'
  };
}

export async function updateTokenConfig(config: Partial<TokenConfig>): Promise<TokenConfig> {
  // Mock implementation
  return {
    id: 'zion-token',
    name: config.name || 'Zion Token',
    symbol: config.symbol || 'ZION',
    decimals: config.decimals || 18,
    totalSupply: config.totalSupply || '1000000000'
  };
}