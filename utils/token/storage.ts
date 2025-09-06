<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
=======
<<<<<<< HEAD



>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

export interface TokenConfig {
=======
<<<<<<< HEAD
export interface TokenConfig {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  tokenName: string;
  tokenSymbol: string;
  decimals: number;
  total_supply: number;
  issue_rate: number;
  redeem_rate: number;
  minIssueAmount: number;
  maxIssueAmount: number;
}

export interface Wallet {
  address: string;
  balance: number;
  nonce: number;
}

export interface TokenTransaction {
  id: string;
  from: string;
  to: string;
  amount: number;
  timestamp: number;
  type: 'issue' | 'redeem' | 'transfer';
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

const DATA_DIR = path.join(process.cwd(), 'data');
const STORE_FILE = path.join(DATA_DIR, 'token-store.json');

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readFromDisk(): TokenStoreData | null {
  try {
    ensureDataDir();
    if (!fs && fs.existsSync(STORE_FILE)) return null;
    const raw = fs && fs.readFileSync(STORE_FILE, 'utf8');
    const parsed = JSON && JSON.parse(raw) as TokenStoreData;
    return parsed;
  } catch {
    return null;
  }
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
  };

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
=======
<<<<<<< HEAD
  }
export interface TokenStoreData {
=======
  };

export interface TokenStoreData {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  wallets: Record<string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
function readFromDisk(): TokenStoreData | null {
  try {
    ensureDataDir();
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

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
<<<<<<< HEAD
export const token_store = new TokenStore ();
;
=======
export const tokenStore = new TokenStore();
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
}
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
