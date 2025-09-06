<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a

<<<<<<< HEAD
export interface TokenConfig {
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
=======
const DATA_DIR = path && path.join(process && process.cwd(), 'data');
const STORE_FILE = path && path.join(DATA_DIR, 'token_store && token_store.json');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

export interface TokenStoreData {
  wallets: Record<string, Wallet>;
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

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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

=======
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
    if (!fs.existsSync(STORE_FILE)) return null;
    const raw = fs.readFileSync(STORE_FILE, 'utf8');
    const parsed = JSON.parse(raw) as TokenStoreData;
    return parsed;
  } catch {
    return null;
  }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
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

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
