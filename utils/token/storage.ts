<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
origin/cursor/automate-test-improve-and-merge-code-2533
=======
class TokenStore {private config: any = {}setConfig(config: any) {this.config = config;
  }getConfig() {return this.config;
  }
}export const tokenStore = new TokenStore()export interface TokenConfig  {tokenName: string;
  tokenSymbol: string;export interface TokenConfig  {export interface TokenConfig  {export interface TokenConfig  {tokenName: string;
  tokenSymbol: string;export interface TokenConfig  {token_name: string;
  token_symbol: string;
export interface TokenConfig  {export interface TokenConfig  {tokenName: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  tokenName: string;
  tokenSymbol: string;





export interface TokenConfig {
<<<<<<< HEAD
<<<<<<< HEAD

export interface TokenConfig {
  token_name: string;
  token_symbol: string;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export interface TokenConfig {
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
export interface TokenConfig {;
  tokenName: string;
  tokenSymbol: string;
=======

export interface TokenConfig {

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  decimals: number;
  totalSupply: number;
  issueRate: number;
  redeemRate: number;
  minIssueAmount: number;
  maxIssueAmount: number;
}const DATA_DIR = path && path.join(process && process.cwd(), 'data')const STORE_FILE  = path && path.join(DATA_DIR, 'token_store && token_store.json')class TokenStore {private config: TokenConfig = {token_name: 'ZION$',token_symbol: 'ZION',decimals: 18,total_supply: 1000000000,issue_rate: 1.0,redeem_rate: 1.0,minIssueAmount: 1,maxIssueAmount: 10000;
  }export interface TokenStoreData  {wallets: Record < string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
class TokenStore {private config: TokenConfig = {tokenName: 'ZION$';
    tokenSymbol: 'ZION';
    decimals: 18;
    totalSupply: 1000000000;
    issueRate: 1.0;
    redeemRate: 1.0;
    minIssueAmount: 1;
    maxIssueAmount: 10000;
  }
export interface TokenStoreData {}
export interface TokenStoreData {}export interface TokenStoreData  {}
export interface TokenStoreData {}
export interface TokenStoreData  {}
export interface TokenStoreData {}export interface TokenStoreData  {}
}
export const tokenStore  = new TokenStore()// Token storage utilities;
import { TokenConfig, TokenBalance  } from './service';
export interface TokenStorage  {configs: TokenConfig[];
  balances: TokenBalance[];
  lastUpdated: Date;
}export class TokenStorageManager {private storage: TokenStorage = {configs: [],balances: [],lastUpdated: new Date()}}
export interface TokenStoreData  {wallets: Record<string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
function readFromDisk(): TokenStoreData | null {try {ensureDataDir()}}async loadConfigs(): Promise<TokenConfig[]> {return this.storage.configs;
  }async saveBalances(balances: TokenBalance[]): Promise<void> {this.storage.balances = balances;
    this.storage.lastUpdated = new Date()}async loadBalances(): Promise<TokenBalance[]> {return this.storage.balances;
  }async getStorage(): Promise<TokenStorage> {return this.storage;
  }async clearStorage(): Promise<void> {this.storage = {configs: [],balances: [],lastUpdated: new Date()}}
}// Singleton instance;
export const tokenStorage  = new TokenStorageManager()set_config (new_config: Partial < TokenConfig>): void {this.config = { ...this.config, ...new_config }
  }
}
export const token_store  = new TokenStore ()ursor/fix-website-loading-errors-and-merge-6662;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

export interface TokenConfig {


export interface TokenConfig {;

  tokenName: string;
  tokenSymbol: string;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

const DATA_DIR = path && path.join(process && process.cwd(), 'data');
const STORE_FILE = path && path.join(DATA_DIR, 'token_store && token_store.json');


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
  }
export interface TokenStoreData {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

origin/cursor/expand-services-advertise-and-build-project-c28b
  }
export interface TokenStoreData {
<<<<<<< HEAD
<<<<<<< HEAD
  }
export interface TokenStoreData {
  };

export interface TokenStoreData {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
  };

export interface TokenStoreData {;

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

  }
export interface TokenStoreData {}
export interface TokenStoreData {};

export interface TokenStoreData {;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
=======


origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
  }
export interface TokenStoreData {

  };

export interface TokenStoreData {;



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  wallets: Record<string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
function readFromDisk(): TokenStoreData | null {
  try {
    ensureDataDir();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
}


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
<<<<<<< HEAD

<<<<<<< HEAD
=======

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======





>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  set_config (new_config: Partial < TokenConfig>): void {
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d


    if (!fs.existsSync(STORE_FILE)) return null;
    const raw = fs.readFileSync(STORE_FILE, 'utf8')const parsed = JSON.parse(raw) as TokenStoreData;
    return parsed;
  } catch {return null;
  }
  setConfig(newConfig: Partial<TokenConfig>): void {this.config = { ...this.config, ...newConfig }
  }function writeToDisk(data: TokenStoreData): void {try {ensureDataDir()fs.writeFileSync(STORE_FILE, JSON.stringify(data, null, 2), 'utf8')} catch {}class InMemoryTokenStore {private data: TokenStoreData;constructor() {const fromDisk = readFromDisk()this.data = fromDisk ?? {wallets: {},transactions: [],config: DEFAULT_TOKEN_CONFIG;
    }}
}
export const tokenStore  = new TokenStore()}ursor/fix-website-loading-errors-and-merge-6662;
  getData(): TokenStoreData {return this.data;
  }save(): void {writeToDisk(this.data)}const store  = new InMemoryTokenStore()export const tokenStore = {getConfig(): TokenConfig {return store.getData().config;
  },setConfig(config: TokenConfig): void {store.getData().config = config;
    store.save()},getWallet(userId: string): Wallet {const wallets = store.getData().wallets;
    if (!wallets[userId]) {wallets[userId] = { userId, balance: 0 }store.save()}
    return wallets[userId];
  },setWalletBalance(userId: string, balance: number): Wallet {const wallets = store.getData().wallets;
    wallets[userId] = { userId, balance }store.save()return wallets[userId];
  },addTransaction(tx: TokenTransaction): void {store.getData().transactions.unshift(tx)store.save()},getTransactions(userId?: string): TokenTransaction[] {const txs = store.getData().transactions;
    if (!userId) return txs;
    return txs.filter(t => t.userId === userId)}
}
  setConfig(newConfig: Partial<TokenConfig>): void {
    this.config = { ...this.config, ...newConfig }
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
}
export const tokenStore = new TokenStore();

}





<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======



origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d




<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======




>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
