import { TokenConfig } from './service';

interface TokenTransaction {
  id: string;
  userId: string;
  amount: number;
  type: 'mint' | 'burn' | 'transfer';
  reason: string;
  timestamp: number;
  from?: string;
  to?: string;
}

class TokenStore {
  private config: TokenConfig = {
    name: 'Zion Token',
    symbol: 'ZION',
    decimals: 18,
    totalSupply: 1000000000,
    maxSupply: 10000000000,
    mintingEnabled: true,
    burningEnabled: true,
    transferEnabled: true
  };

  private transactions: TokenTransaction[] = [];

  getConfig(): TokenConfig {
    return { ...this.config };
  }

  setConfig(config: Partial<TokenConfig>): void {
    this.config = { ...this.config, ...config };
  }

  getAllTransactions(): TokenTransaction[] {
    return [...this.transactions];
  }

  addTransaction(transaction: Omit<TokenTransaction, 'id' | 'timestamp'>): TokenTransaction {
    const newTransaction: TokenTransaction = {
      ...transaction,
      id: Date.now().toString(),
      timestamp: Date.now()
    };
    this.transactions.push(newTransaction);
    return newTransaction;
  }

  getTransactionsByUser(userId: string): TokenTransaction[] {
    return this.transactions.filter(t => t.userId === userId);
  }
}

export const tokenStore = new TokenStore();