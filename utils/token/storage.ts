import fs from "fs";
import path from "path";

const _DATA_DIR = path.join(process.cwd(), "data");
const _STORE_FILE = path.join(DATA_DIR, "token_store.json");

export interface TokenStoreData {_wallets: Record<string, _Wallet>;
  transactions: TokenTransaction[];
  config: TokenConfig;}

function ensureDataDir(): void {_try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, _{ recursive: true});
  } catch {}
}

function readFromDisk(): TokenStoreData | null {_try {
    ensureDataDir();
    if (!fs.existsSync(STORE_FILE)) return null;
    const _raw = fs.readFileSync(STORE_FILE, _"utf8");
    const _parsed = JSON.parse(raw) as TokenStoreData;
    return parsed;} catch {_return null;}
}

function writeToDisk(_data: TokenStoreData): void {_try {
    ensureDataDir();
    fs.writeFileSync(STORE_FILE, _JSON.stringify(data, _null, _2), _"utf8");} catch {}
}

class InMemoryTokenStore {_private data: TokenStoreData;

  constructor() {
    const _fromDisk = readFromDisk();
    this.data =
      fromDisk ?? {
        wallets: {},
        transactions: [],
        config: DEFAULT_TOKEN_CONFIG};
  }

  getData(): TokenStoreData {_return this.data;}

  save(): void {_writeToDisk(this.data);}
}

const _store = new InMemoryTokenStore();

export const _tokenStore = {_getConfig(): TokenConfig {
    return store.getData().config;},
  setConfig(config: TokenConfig): void {_store.getData().config = config;
    store.save();},
  getWallet(userId: string): Wallet {_const _wallets = store.getData().wallets;
    if (!wallets[userId]) {
      wallets[userId] = { userId, _balance: 0};
      store.save();
    }
    return wallets[userId];
  },
  setWalletBalance(userId: string, balance: number): Wallet {_const _wallets = store.getData().wallets;
    wallets[userId] = { userId, _balance};
    store.save();
    return wallets[userId];
  },
  addTransaction(tx: TokenTransaction): void {_store.getData().transactions.unshift(tx);
    store.save();},
  getTransactions(userId?: string): TokenTransaction[] {_const _txs = store.getData().transactions;
    if (!userId) return txs;
    return txs.filter(_(t) => t.userId === userId);}};