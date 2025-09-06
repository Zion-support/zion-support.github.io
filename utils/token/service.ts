/**
 * Token service utilities
 */

export interface TokenConfig {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: number;
  contractAddress?: string;
  network: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TokenTransaction {
  id: string;
  from: string;
  to: string;
  amount: number;
  tokenId: string;
  type: 'mint' | 'burn' | 'transfer' | 'reward';
  status: 'pending' | 'confirmed' | 'failed';
  txHash?: string;
  blockNumber?: number;
  createdAt: string;
}

export class TokenService {
  private tokens: TokenConfig[] = [];
  private transactions: TokenTransaction[] = [];

  async createToken(config: Omit<TokenConfig, 'id' | 'createdAt' | 'updatedAt'>): Promise<TokenConfig> {
    const token: TokenConfig = {
      ...config,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    this.tokens.push(token);
    return token;
  }

  async getToken(id: string): Promise<TokenConfig | null> {
    return this.tokens.find(token => token.id === id) || null;
  }

  async getTokens(): Promise<TokenConfig[]> {
    return this.tokens.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async updateToken(id: string, updates: Partial<TokenConfig>): Promise<TokenConfig | null> {
    const tokenIndex = this.tokens.findIndex(token => token.id === id);
    if (tokenIndex === -1) return null;
    
    this.tokens[tokenIndex] = {
      ...this.tokens[tokenIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    return this.tokens[tokenIndex];
  }

  async deleteToken(id: string): Promise<boolean> {
    const tokenIndex = this.tokens.findIndex(token => token.id === id);
    if (tokenIndex === -1) return false;
    
    this.tokens.splice(tokenIndex, 1);
    return true;
  }

  async createTransaction(transaction: Omit<TokenTransaction, 'id' | 'createdAt'>): Promise<TokenTransaction> {
    const newTransaction: TokenTransaction = {
      ...transaction,
      id: this.generateId(),
      createdAt: new Date().toISOString()
    };
    
    this.transactions.push(newTransaction);
    return newTransaction;
  }

  async getTransactions(tokenId?: string): Promise<TokenTransaction[]> {
    let filteredTransactions = this.transactions;
    
    if (tokenId) {
      filteredTransactions = this.transactions.filter(tx => tx.tokenId === tokenId);
    }
    
    return filteredTransactions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getTokenStats(tokenId: string): Promise<{
    totalTransactions: number;
    totalVolume: number;
    uniqueUsers: number;
    transactionsByType: Record<string, number>;
  }> {
    const tokenTransactions = this.transactions.filter(tx => tx.tokenId === tokenId);
    
    const totalTransactions = tokenTransactions.length;
    const totalVolume = tokenTransactions.reduce((sum, tx) => sum + tx.amount, 0);
    const uniqueUsers = new Set(tokenTransactions.flatMap(tx => [tx.from, tx.to])).size;
    
    const transactionsByType = tokenTransactions.reduce((acc, tx) => {
      acc[tx.type] = (acc[tx.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    return {
      totalTransactions,
      totalVolume,
      uniqueUsers,
      transactionsByType
    };
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

// Export singleton instance
export const tokenService = new TokenService();