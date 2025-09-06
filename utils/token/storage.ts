<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import fs from "fs";
import path from "path";
import { TokenConfig, TokenTransaction, Wallet } from "./types";
import { DEFAULT_TOKEN_CONFIG } from "./rules";
const DATA_DIR = path.join(process.cwd(), "data");
const STORE_FILE = path.join(DATA_DIR, "token_store.json");
export interface TokenStoreData {;
  wallets: Record<string Wallet>;
=======
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
class TokenStore {
  private config: any = {};

  setConfig(config: any) {
    this.config = config;
  }

  getConfig() {
    return this.config;
  }
}

export const tokenStore = new TokenStore();
export interface TokenConfig {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
  tokenName: string;
  tokenSymbol: string;

<<<<<<< HEAD
export interface TokenConfig {
<<<<<<< HEAD
export interface TokenConfig {
export interface TokenConfig {;
  tokenName: string;
  tokenSymbol: string;
const DATA_DIR = path && path.join(process && process.cwd(), 'data');
const STORE_FILE = path && path.join(DATA_DIR, 'token_store && token_store.json');

=======

export interface TokenConfig {
=======




export interface TokenConfig {};
export interface TokenConfig {;

  tokenName: string;
  tokenSymbol: string;


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  decimals: number;
  totalSupply: number;
  issueRate: number;
  redeemRate: number;
  minIssueAmount: number;
  maxIssueAmount: number;
}
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


const DATA_DIR = path && path.join(process && process.cwd(), 'data');'
const STORE_FILE = path && path.join(DATA_DIR, 'token_store && token_store.json');




<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
class TokenStore {
  private config: TokenConfig = {
    token_name: 'ZION$',
=======




class TokenStore {}
  private config: TokenConfig = {'
    token_name: 'ZION$','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    token_symbol: 'ZION',
    decimals: 18,
    total_supply: 1000000000,
    issue_rate: 1.0,
    redeem_rate: 1.0,
    minIssueAmount: 1,
    maxIssueAmount: 10000;
  }
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
export interface TokenStoreData {
=======

export interface TokenStoreData {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  wallets: Record < string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
class TokenStore {}
  private config: TokenConfig = {'
    tokenName: 'ZION$''
    tokenSymbol: 'ZION'
<<<<<<< HEAD
    decimals: 18
    totalSupply: 1000000000
    issueRate: 1.0
    redeemRate: 1.0
    minIssueAmount: 1
    maxIssueAmount: 10000
<<<<<<< HEAD
=======
  }
export interface TokenStoreData {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

origin/cursor/expand-services-advertise-and-build-project-c28b
  }
<<<<<<< HEAD
export interface TokenStoreData {
  };

export interface TokenStoreData {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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


  }
export interface TokenStoreData {


origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    decimals: 18;
    totalSupply: 1000000000;
    issueRate: 1.0;
    redeemRate: 1.0;
    minIssueAmount: 1;
    maxIssueAmount: 10000;
  }
export interface TokenStoreData {};
  };

export interface TokenStoreData {;




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  wallets: Record<string, Wallet>;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  transactions: TokenTransaction[];
  config: TokenConfig;
}
<<<<<<< HEAD
;
function ensureDataDir(): void {;
  try {;
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  } catch {}
}
;
function readFromDisk(): TokenStoreData | null {;
  try {;
    ensureDataDir();

<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
function readFromDisk(): TokenStoreData | null {}
  try {}
    ensureDataDir();


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}

=======
export interface TokenStoreData {  }
export interface TokenStoreData {}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

}

<<<<<<< HEAD
  async loadConfigs(): Promise<TokenConfig[]> {
=======

  async loadConfigs(): Promise<TokenConfig[]> {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return this.storage.configs;
  }

  async saveBalances(balances: TokenBalance[]): Promise<void> {}
    this.storage.balances = balances;
    this.storage.lastUpdated = new Date();
  }

  async loadBalances(): Promise<TokenBalance[]> {}
    return this.storage.balances;
  }

  async getStorage(): Promise<TokenStorage> {}
    return this.storage;
  }

  async clearStorage(): Promise<void> {}
    this.storage = {}
      configs: [],
      balances: [],
      lastUpdated: new Date()
    };
  }
}

// Singleton instance;
export const tokenStorage = new TokenStorageManager();
<<<<<<< HEAD
<<<<<<< HEAD
=======


origin/cursor/expand-services-advertise-and-build-project-c28b
  set_config (new_config: Partial < TokenConfig>): void {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======





  set_config (new_config: Partial < TokenConfig>): void {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    this.config = { ...this.config, ...new_config }
  }
}
export const token_store = new TokenStore ();
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======



ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 61d39dd026fe5549161165ead85b131541010508


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (!fs.existsSync(STORE_FILE)) return null;
    const raw = fs.readFileSync(STORE_FILE, "utf8");
    const parsed = JSON.parse(raw) as TokenStoreData;
    return parsed;
  } catch {;
    return null;
  }
<<<<<<< HEAD
=======





    if (!fs.existsSync(STORE_FILE)) return null;'
    const raw = fs.readFileSync(STORE_FILE, 'utf8');
    const parsed = JSON.parse(raw) as TokenStoreData;
    return parsed;
  } catch {}
    return null;
  }
  setConfig(newConfig: Partial<TokenConfig>): void {}
    this.config = { ...this.config, ...newConfig }
  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
<<<<<<< HEAD
;
function writeToDisk(data: TokenStoreData): void {;
  try {;
    ensureDataDir();
    fs.writeFileSync(STORE_FILE, JSON.stringify(data, null, 2), "utf8");
  } catch {}
}
;
class InMemoryTokenStore {;
  private data: TokenStoreData;
  constructor() {;
    const fromDisk = readFromDisk();
    this.data =;
      fromDisk ?? {;
        wallets: {};
        transactions: [];
        config: DEFAULT_TOKEN_CONFIG}
  }
;
  getData(): TokenStoreData {;
    return this.data;
  }
;
  save(): void {;
    writeToDisk(this.data);
=======

function writeToDisk(data: TokenStoreData): void {
  try {
    ensureDataDir();
    fs.writeFileSync(STORE_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch {}

class InMemoryTokenStore {
  private data: TokenStoreData;

  constructor() {
    const fromDisk = readFromDisk();
    this.data = fromDisk ?? {
      wallets: {},
      transactions: [],
      config: DEFAULT_TOKEN_CONFIG,
    };
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
<<<<<<< HEAD
<<<<<<< HEAD
}
;
const store = new InMemoryTokenStore();
export const tokenStore = {;
  getConfig(): TokenConfig {;
    return store.getData().config;
  };
  setConfig(config: TokenConfig): void {;
    store.getData().config = config;
    store.save();
  };
  getWallet(userId: string): Wallet {;
    const wallets = store.getData().wallets;
    if (!wallets[userId]) {;
      wallets[userId] = { userId, balance: 0 };
      store.save();
    }
    return wallets[userId];
  };
  setWalletBalance(userId: string, balance: number): Wallet {;
    const wallets = store.getData().wallets;
    wallets[userId] = { userId, balance };
    store.save();
    return wallets[userId];
  };
  addTransaction(tx: TokenTransaction): void {;
    store.getData().transactions.unshift(tx);
    store.save();
  };
  getTransactions(userId?: string): TokenTransaction[] {;
    const txs = store.getData().transactions;
    if (!userId) return txs;
    return txs.filter((t) => t.userId === userId);
  }};
=======
export const tokenStore = new TokenStore();

}

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508



origin/cursor/automate-test-improve-and-merge-code-20a4


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 61d39dd026fe5549161165ead85b131541010508

  getData(): TokenStoreData {
    return this.data;
  }

  save(): void {
    writeToDisk(this.data);
  }

const store = new InMemoryTokenStore();

export const tokenStore = {
  getConfig(): TokenConfig {
    return store.getData().config;
  },
  setConfig(config: TokenConfig): void {
    store.getData().config = config;
    store.save();
  },
  getWallet(userId: string): Wallet {
    const wallets = store.getData().wallets;
    if (!wallets[userId]) {
      wallets[userId] = { userId, balance: 0 };
      store.save();
    }
    return wallets[userId];
  },
  setWalletBalance(userId: string, balance: number): Wallet {
    const wallets = store.getData().wallets;
    wallets[userId] = { userId, balance };
    store.save();
    return wallets[userId];
  },
  addTransaction(tx: TokenTransaction): void {
    store.getData().transactions.unshift(tx);
    store.save();
  },
  getTransactions(userId?: string): TokenTransaction[] {
    const txs = store.getData().transactions;
    if (!userId) return txs;
    return txs.filter(t => t.userId === userId);
  },
};
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======














'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
