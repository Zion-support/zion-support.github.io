  };

export interface TokenStoreData {;
  wallets: Record<string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
function readFromDisk(): TokenStoreData | null {
  try {
    ensureDataDir();

  getConfig(): TokenConfig {
    return { ...this.config };
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
  }
}
export const tokenStore = new TokenStore();

};
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
  set_config (new_config: Partial < TokenConfig>): void {
    this.config = { ...this.config, ...new_config }
  }
}
export const tokenStore = new TokenStore();
}

