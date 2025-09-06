import { TokenConfig } from './service';

class TokenStore {
  private config: TokenConfig = {
    enabled: true,
    maxTokens: 1000,
    resetInterval: 24 * 60 * 60 * 1000,
    costPerToken: 0.01
  };

  getConfig(): TokenConfig {
    return { ...this.config };
  }

  setConfig(newConfig: Partial<TokenConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  getUserTokens(userId: string): number {
    // In a real implementation, this would fetch from a database
    return 1000;
  }

  setUserTokens(userId: string, tokens: number): void {
    // In a real implementation, this would save to a database
    console.log(`Setting tokens for user ${userId}: ${tokens}`);
  }

  consumeTokens(userId: string, amount: number): boolean {
    const currentTokens = this.getUserTokens(userId);
    if (currentTokens >= amount) {
      this.setUserTokens(userId, currentTokens - amount);
      return true;
    }
    return false;
  }
}

export const tokenStore = new TokenStore();