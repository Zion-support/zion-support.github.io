<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

export interface TokenConfig {
=======
<<<<<<< HEAD
export interface TokenConfig {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  tokenName: string;
  tokenSymbol: string;
=======





export interface TokenConfig {
  token_name: string;
  token_symbol: string;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

export interface TokenConfig {
  token_name: string;
  token_symbol: string;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  decimals: number;
  total_supply: number;
  issue_rate: number;
  redeem_rate: number;
  minIssueAmount: number;
  maxIssueAmount: number;
}

class TokenStore {
  private config: TokenConfig = {
    token_name: 'ZION$',
    token_symbol: 'ZION',
    decimals: 18,
    total_supply: 1000000000,
    issue_rate: 1.0,
    redeem_rate: 1.0,
    minIssueAmount: 1,
    maxIssueAmount: 10000;
  }
;
export interface TokenStoreData {
  wallets: Record < string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
class TokenStore {
  private config: TokenConfig = {
    tokenName: 'ZION$'
    tokenSymbol: 'ZION'
    decimals: 18
    totalSupply: 1000000000
    issueRate: 1.0
    redeemRate: 1.0
    minIssueAmount: 1
    maxIssueAmount: 10000
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  }
}
export const tokenStore = new TokenStore();

// Token storage utilities
import { TokenConfig, TokenBalance } from './service';

export interface TokenStorage {
  configs: TokenConfig[];
  balances: TokenBalance[];
  lastUpdated: Date;
}

export class TokenStorageManager {
  private storage: TokenStorage = {
    configs: [],
    balances: [],
    lastUpdated: new Date()
  };

<<<<<<< HEAD
export interface TokenStoreData {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

  }
export interface TokenStoreData {
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  wallets: Record<string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
function readFromDisk(): TokenStoreData | null {
  try {
    ensureDataDir();
<<<<<<< HEAD
    if (!fs.existsSync(STORE_FILE)) return null;
    const raw = fs.readFileSync(STORE_FILE, 'utf8');
    const parsed = JSON.parse(raw) as TokenStoreData;
    return parsed;
  } catch {
    return null;
  }
  setConfig(newConfig: Partial<TokenConfig>): void {
    this.config = { ...this.config, ...newConfig }
  }
}
export const tokenStore = new TokenStore();

}

=======
=======
  async saveConfigs(configs: TokenConfig[]): Promise<void> {
    this.storage.configs = configs;
    this.storage.lastUpdated = new Date();
  }
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

  async loadConfigs(): Promise<TokenConfig[]> {
    return this.storage.configs;
  }

  async saveBalances(balances: TokenBalance[]): Promise<void> {
    this.storage.balances = balances;
    this.storage.lastUpdated = new Date();
  }

  async loadBalances(): Promise<TokenBalance[]> {
    return this.storage.balances;
  }

  async getStorage(): Promise<TokenStorage> {
    return this.storage;
  }

  async clearStorage(): Promise<void> {
    this.storage = {
      configs: [],
      balances: [],
      lastUpdated: new Date()
    };
  }
}

// Singleton instance
export const tokenStorage = new TokenStorageManager();
  set_config (new_config: Partial < TokenConfig>): void {
    this.config = { ...this.config, ...new_config }
  }
}
export const token_store = new TokenStore ();
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
