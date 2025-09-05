import fs from &quot;fs&quot;;
import path from &quot;path&quot;;
import { TokenConfig, TokenTransaction, Wallet } from &quot;./types&quot;;
import { DEFAULT_TOKEN_CONFIG } from &quot;./rules&quot;;

const DATA_DIR = path.join(process.cwd(), &quot;data&quot;);
const STORE_FILE = path.join(DATA_DIR, &quot;token_store.json&quot;);

export interface TokenStoreData {
  wallets: Record<string, Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;
}

function ensureDataDir(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  } catch {}
}

function readFromDisk(): TokenStoreData | null {
  try {
    ensureDataDir();
    if (!fs.existsSync(STORE_FILE)) return null;
    const raw = fs.readFileSync(STORE_FILE, &quot;utf8&quot;);
    const parsed = JSON.parse(raw) as TokenStoreData;
    return parsed;
  } catch {
    return null;
  }
}

function writeToDisk(data: TokenStoreData): void {
  try {
    ensureDataDir();
    fs.writeFileSync(STORE_FILE, JSON.stringify(data, null, 2), &quot;utf8&quot;);
  } catch {}
}

class InMemoryTokenStore {
  private data: TokenStoreData;

  constructor() {
    const fromDisk = readFromDisk();
    this.data =
      fromDisk ?? {
        wallets: {},
        transactions: [],
        config: DEFAULT_TOKEN_CONFIG};
  }

  getData(): TokenStoreData {
    return this.data;
  }

  save(): void {
    writeToDisk(this.data);
  }
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
    return txs.filter((t) => t.userId === userId);
  }};