import { TokenConfig } from './service';

class TokenStore {
  private config: TokenConfig = {
    name: 'Zion Token',
    symbol: 'ZION',
    totalSupply: 1000000,
    circulatingSupply: 500000,
    exchangeRate: 0.1
  };

  getConfig(): TokenConfig {
    return this.config;
  }

  setConfig(config: Partial<TokenConfig>): void {
    this.config = { ...this.config, ...config };
  }
}

export const tokenStore = new TokenStore();