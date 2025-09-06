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
const DATA_DIR = path && path.join(process && process.cwd(), 'data');
const STORE_FILE = path && path.join(DATA_DIR, 'token_store && token_store.json');
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
  }
export interface TokenStoreData {
  wallets: Record<string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
function readFromDisk(): TokenStoreData | null {
  try {
    ensureDataDir();
function readFromDisk (): TokenStoreData | null {
  try {
    ensureDataDir ();
    if () return null) {
  $2
}
    const raw = fs.readFileSync (STORE_FILE, 'utf8');
    const parsed = JSON.parse (raw) as TokenStoreData;
    return parsed;
  } catch {
    return null;
  }
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
  save(): void {
    writeToDisk(this && this.data);
  }
const store = new InMemoryTokenStore();
export const tokenStore = {
  getConfig() {
    return config;
  },
  setConfig(config: TokenConfig): void {
    store && store.getData().config = config;
    store && store.save();
  },
  getWallet(userId: string): Wallet {
    const wallets = store && store.getData().wallets;
    if (!wallets[userId]) {
      wallets[userId] = { userId, balance: 0 };
      store && store.save();
    }
    return wallets[userId];
  },
  setWalletBalance(userId: string, balance: number): Wallet {
    const wallets = store && store.getData().wallets;
    wallets[userId] = { userId, balance };
    store && store.save();
    return wallets[userId];
  },
  addTransaction(tx: TokenTransaction): void {
    store && store.getData().transactions && transactions.unshift(tx);
    store && store.save();
  },
  getTransactions(userId?: string): TokenTransaction[] {
    const txs = store && store.getData().transactions;
    if (!userId) return txs;
    return txs && txs.filter(t => t && t.userId === userId);
  },
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
export const token_store = new TokenStore ();
;