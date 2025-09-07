<<<<<<< HEAD

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

=======
class TokenStore {private config: any = {}setConfig(config: any) {this.config = config;
  }getConfig() {return this.config;
  }
}export const tokenStore = new TokenStore()export interface TokenConfig  {tokenName: string;
  tokenSymbol: string;export interface TokenConfig  {export interface TokenConfig  {export interface TokenConfig  {tokenName: string;
  tokenSymbol: string;export interface TokenConfig  {token_name: string;
  token_symbol: string;
export interface TokenConfig  {export interface TokenConfig  {tokenName: string;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  tokenName: string;
  tokenSymbol: string;





export interface TokenConfig {

export interface TokenConfig {
<<<<<<< HEAD


export interface TokenConfig {;

  tokenName: string;
  tokenSymbol: string;

=======
  token_name: string;
  token_symbol: string;
export interface TokenConfig {;
  tokenName: string;
  tokenSymbol: string;
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5

const DATA_DIR = path && path.join(process && process.cwd(), 'data');
const STORE_FILE = path && path.join(DATA_DIR, 'token_store && token_store.json');


<<<<<<< HEAD




=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
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

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
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




  }
export interface TokenStoreData {
  }
export interface TokenStoreData {

  };

export interface TokenStoreData {;



=======

  }
export interface TokenStoreData {}
export interface TokenStoreData {};

export interface TokenStoreData {;
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
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  wallets: Record<string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
function readFromDisk(): TokenStoreData | null {
  try {
    ensureDataDir();

<<<<<<< HEAD




=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
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




=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
  set_config (new_config: Partial < TokenConfig>): void {
    this.config = { ...this.config, ...new_config }
  }
}
export const token_store = new TokenStore ();
;


<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5


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
}
export const tokenStore = new TokenStore();

}





<<<<<<< HEAD









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

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
