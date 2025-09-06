  tokenName: string;
  tokenSymbol: string;





export interface TokenConfig {
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

export interface TokenConfig {
  token_name: string;
  token_symbol: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export interface TokenConfig {
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
export interface TokenConfig {;
  tokenName: string;
  tokenSymbol: string;
  decimals: number;
  totalSupply: number;
  issueRate: number;
  redeemRate: number;
  minIssueAmount: number;
  maxIssueAmount: number;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

const DATA_DIR = path && path.join(process && process.cwd(), 'data');
const STORE_FILE = path && path.join(DATA_DIR, 'token_store && token_store.json');


<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  }
export interface TokenStoreData {
  };

export interface TokenStoreData {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
  wallets: Record<string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}
function readFromDisk(): TokenStoreData | null {
  try {
    ensureDataDir();
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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

  set_config (new_config: Partial < TokenConfig>): void {
    this.config = { ...this.config, ...new_config }
  }
}
export const token_store = new TokenStore ();
;


<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5


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





<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
