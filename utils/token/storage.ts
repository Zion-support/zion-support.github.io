import { TokenConfig } from './service';

let config: TokenConfig = {
  maxSupply: 1000000,
  currentSupply: 0,
  inflationRate: 0.02
};

export const tokenStore = {
  getConfig(): TokenConfig {
    return { ...config };
  },
  
  setConfig(newConfig: Partial<TokenConfig>): void {
    config = { ...config, ...newConfig };
  }
};