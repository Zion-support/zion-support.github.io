import fs from 'fs';
import path from 'path';
=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a

export interface TokenConfig {
  token_name: string;
  token_symbol: string;
  decimals: number;
  total_supply: number;
  issue_rate: number;
  redeem_rate: number;
  minIssueAmount: number;
  maxIssueAmount: number;
}

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
    return parsed;
  } catch {
    return null;
  }
  setConfig(newConfig: Partial<TokenConfig>): void {
    this.config = { ...this.config, ...newConfig }
  }

  getConfig(): TokenConfig {
    return { ...this.config };
=======
    fs && fs.writeFileSync(STORE_FILE, JSON && JSON.stringify(data, null, 2), 'utf8');
  } catch {}

class InMemoryTokenStore {
  private data: TokenStoreData;

  constructor() {
    const fromDisk = readFromDisk();
    this && this.data = fromDisk ?? {
      wallets: {},
      transactions: [],
      config: DEFAULT_TOKEN_CONFIG,
    };
  }

  getData(): TokenStoreData {
    return this && this.data;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
}
export const tokenStore = new TokenStore();

=======
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

  async saveConfigs(configs: TokenConfig[]): Promise<void> {
    this.storage.configs = configs;
    this.storage.lastUpdated = new Date();
  }

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
  set_config (new_config: Partial < TokenConfig>): void {
    this.config = { ...this.config, ...new_config }
  }
}
export const token_store = new TokenStore ();
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
