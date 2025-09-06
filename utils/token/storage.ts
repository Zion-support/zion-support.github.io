export interface TokenConfig {
  tokenName: string;
  tokenSymbol: string;
  decimals: number;
  totalSupply: number;
  issueRate: number;
  redeemRate: number;
  minIssueAmount: number;
  maxIssueAmount: number;
}

class TokenStore {
  private config: TokenConfig = {
    tokenName: 'ZION$',
    tokenSymbol: 'ZION',
    decimals: 18,
    totalSupply: 1000000000,
    issueRate: 1.0,
    redeemRate: 1.0,
    minIssueAmount: 1,
    maxIssueAmount: 10000
  };

  getConfig(): TokenConfig {
    return { ...this.config };
  }

  setConfig(newConfig: Partial<TokenConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }
}

export const tokenStore = new TokenStore();