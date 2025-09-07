import fs from "fs";
import path from "path";
import { TokenConfig, TokenTransaction, Wallet } from "./types";
import { DEFAULT_TOKEN_CONFIG } from "./rules";

const DATA_DIR = path.join(process.cwd(), "data");
const STORE_FILE = path.join(DATA_DIR, "tokens.json");

export interface TokenStoreData {
  wallets: Record<string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}

function ensureDataDir(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  } catch {}
}

function readFromDisk(): TokenStoreData | null {
  try {
    ensureDataDir();
    if (!fs.existsSync(STORE_FILE)) return null;
    const raw = fs.readFileSync(STORE_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return parsed;
  } catch {
    return null;
  }
}

function writeToDisk(data: TokenStoreData): void {
  try {
    ensureDataDir();
    fs.writeFileSync(STORE_FILE, JSON.stringify(data, null, 2), "utf8");
  } catch {}
}

class InMemoryTokenStore {
  private data: TokenStoreData;

  constructor() {
    const fromDisk = readFromDisk();
    this.data = fromDisk || {
      wallets: {},
      transactions: [],
      config: DEFAULT_TOKEN_CONFIG
    };
  }

  getData(): TokenStoreData {
    return this.data;
  }

  save(): void {
    writeToDisk(this.data);
  }

  setConfig(config: TokenConfig): void {
    this.data.config = config;
    this.save();
  }

  getWallet(userId: string): Wallet {
    const wallets = this.data.wallets;
    if (!wallets[userId]) {
      wallets[userId] = { userId, balance: 0 };
      this.save();
    }
    return wallets[userId];
  }

  setWalletBalance(userId: string, balance: number): Wallet {
    const wallets = this.data.wallets;
    wallets[userId] = { userId, balance };
    this.save();
    return wallets[userId];
  }

  addTransaction(transaction: TokenTransaction): void {
    this.data.transactions.push(transaction);
    this.save();
  }

  getTransactions(userId?: string): TokenTransaction[] {
    if (userId) {
      return this.data.transactions.filter(t => t.userId === userId);
    }
    return this.data.transactions;
  }

  getConfig(): TokenConfig {
    return this.data.config;
  }
}

const store = new InMemoryTokenStore();

export const tokenStore = {
  setConfig: (config: TokenConfig) => store.setConfig(config),
  getWallet: (userId: string) => store.getWallet(userId),
  setWalletBalance: (userId: string, balance: number) => store.setWalletBalance(userId, balance),
  addTransaction: (transaction: TokenTransaction) => store.addTransaction(transaction),
  getTransactions: (userId?: string) => store.getTransactions(userId),
  getConfig: () => store.getConfig(),
};