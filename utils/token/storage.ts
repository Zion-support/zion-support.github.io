import fs from 'fs';
import path from 'path';

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
    if (!fs.existsSync(STORE_FILE)) return null;
    const raw = fs.readFileSync(STORE_FILE, 'utf8');
    const parsed = JSON.parse(raw) as TokenStoreData;
    return parsed;
  } catch {
    return null;
  }
}

class TokenStore {
  private config: TokenConfig = {
    tokenName: 'ZION$',
    tokenSymbol: 'ZION',
    decimals: 18,
    totalSupply: 1000000000,
    issueRate: 1.0,
    redeemRate: 1.0,
    minIssueAmount: 1,
    maxIssueAmount: 10000
  };

  setConfig(newConfig: Partial<TokenConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  getConfig(): TokenConfig {
    return { ...this.config };
  }
}

export const tokenStore = new TokenStore();