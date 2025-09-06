import { TokenConfig } from './service';

let config: TokenConfig = {
  totalSupply: 1000000,
  issued: 0,
  reserved: 100000
};

export const tokenStore = {
  getConfig(): TokenConfig {
    return { ...config };
  },
  
  setConfig(newConfig: Partial<TokenConfig>): void {
    config = { ...config, ...newConfig };
  }
};