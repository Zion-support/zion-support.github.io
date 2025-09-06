import { tokenService, TokenConfig, TokenTransaction } from './service';

// In-memory storage for demo purposes
// In production, this would connect to a database
let tokenConfigs: TokenConfig[] = [];
let tokenTransactions: TokenTransaction[] = [];

export const tokenStorage = {
  async getTokenConfigs(): Promise<TokenConfig[]> {
    return [...tokenConfigs];
  },

  async getTokenConfigById(id: string): Promise<TokenConfig | null> {
    return tokenConfigs.find(config => config.id === id) || null;
  },

  async createTokenConfig(config: Omit<TokenConfig, 'id' | 'created_at' | 'updated_at'>): Promise<TokenConfig> {
    const newConfig: TokenConfig = {
      ...config,
      id: Date.now().toString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    tokenConfigs.push(newConfig);
    return newConfig;
  },

  async updateTokenConfig(id: string, updates: Partial<TokenConfig>): Promise<TokenConfig | null> {
    const index = tokenConfigs.findIndex(config => config.id === id);
    if (index === -1) return null;
    
    tokenConfigs[index] = {
      ...tokenConfigs[index],
      ...updates,
      updated_at: new Date().toISOString()
    };
    return tokenConfigs[index];
  },

  async deleteTokenConfig(id: string): Promise<boolean> {
    const index = tokenConfigs.findIndex(config => config.id === id);
    if (index === -1) return false;
    
    tokenConfigs.splice(index, 1);
    return true;
  },

  async getTokenTransactions(tokenId?: string): Promise<TokenTransaction[]> {
    if (tokenId) {
      return tokenTransactions.filter(tx => tx.tokenId === tokenId);
    }
    return [...tokenTransactions];
  },

  async createTokenTransaction(transaction: Omit<TokenTransaction, 'id' | 'created_at'>): Promise<TokenTransaction> {
    const newTransaction: TokenTransaction = {
      ...transaction,
      id: Date.now().toString(),
      created_at: new Date().toISOString()
    };
    tokenTransactions.push(newTransaction);
    return newTransaction;
  }
};