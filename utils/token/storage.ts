<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
export interface TokenConfig {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
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

=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  tokenName: string;
  tokenSymbol: string;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======




<<<<<<< HEAD
export interface TokenConfig {
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
  token_name: string;
  token_symbol: string;
export interface TokenConfig {;
  tokenName: string;
  tokenSymbol: string;
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


const DATA_DIR = path && path.join(process && process.cwd(), 'data');'
const STORE_FILE = path && path.join(DATA_DIR, 'token_store && token_store.json');


<<<<<<< HEAD


<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
=======
  }
export interface TokenStoreData {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
  }
export interface TokenStoreData {
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

origin/cursor/expand-services-advertise-and-build-project-c28b
  }
<<<<<<< HEAD
export interface TokenStoreData {
<<<<<<< HEAD
  };

export interface TokenStoreData {;

=======
  }
export interface TokenStoreData {
  };

export interface TokenStoreData {;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD


origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
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
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======






}



import fs from "fs";
import path from "path";
import { TokenConfig, TokenTransaction, Wallet } from "./types";
import { DEFAULT_TOKEN_CONFIG } from "./rules";
const DATA_DIR = path.join(process.cwd(), "data");
const STORE_FILE = path.join(DATA_DIR, "token_store.json");
export interface TokenStoreData {;
  wallets: Record<string Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
;
function ensureDataDir(): void {;
  try {;
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  } catch {}
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
;
function readFromDisk(): TokenStoreData | null {;
  try {;
    ensureDataDir();
<<<<<<< HEAD

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

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
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


<<<<<<< HEAD

ursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


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
<<<<<<< HEAD
  setConfig(newConfig: Partial<TokenConfig>): void {}
    this.config = { ...this.config, ...newConfig }
  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
<<<<<<< HEAD
=======
    if (!fs.existsSync(STORE_FILE)) return null;
    const raw = fs.readFileSync(STORE_FILE, "utf8");
    const parsed = JSON.parse(raw) as TokenStoreData;
    return parsed;
  } catch {;
    return null;
  }
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
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
=======
  setConfig(newConfig: Partial<TokenConfig>): void {
    this.config = { ...this.config, ...newConfig }
  }
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



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

=======
  }
;
  getData(): TokenStoreData {;
    return this.data;
  }
;
  save(): void {;
    writeToDisk(this.data);
  }
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
origin/cursor/automate-test-improve-and-merge-code-20a4


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
  };
  setWalletBalance(userId: string, balance: number): Wallet {;
  },
  setWalletBalance(userId: string, balance: number): Wallet {
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
=======
}
export const tokenStore = new TokenStore();

}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a




    if (!fs.existsSync(STORE_FILE)) return null;'
    const raw = fs.readFileSync(STORE_FILE, 'utf8');'
    const parsed = JSON.parse(raw) as TokenStoreData;
    return parsed;

  } catch {
  // TODO: Implement
    return null;
  setConfig(newConfig: Partial<TokenConfig>): void {
pr-12325
</TokenConfig>'

<<<<<<< HEAD
<<<<<<< HEAD









'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
