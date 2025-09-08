import { TokenConfig } from './service';

// Mock storage - in production, this would use a real database
let config: TokenConfig = {
  tokenName: 'ZION Token',
  tokenSymbol: 'ZION',
  totalSupply: 1000000000,
  decimals: 18,
  initialPrice: 0.01
};

export const tokenStore = {
  getConfig(): TokenConfig {
    return { ...config };
  },
  
  setConfig(newConfig: Partial<TokenConfig>): void {
    config = { ...config, ...newConfig };
  }
};