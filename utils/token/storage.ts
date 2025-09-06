import { TokenConfig } from './service';

// In-memory storage for demo purposes
let config: TokenConfig = {
  creditRate: 1.0,
  debitRate: 1.0,
  maxBalance: 10000,
  minBalance: 0
};

export const tokenStore = {
  getConfig(): TokenConfig {
    return { ...config };
  },
  
  setConfig(newConfig: Partial<TokenConfig>): void {
    config = { ...config, ...newConfig };
  }
};