import fs from "fs";
import path from "path";

;

export interface TokenTransaction {
=======


export interface TokenTransaction {;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  id: string;
  userId: string;
  type: 'earn' | 'spend' | 'transfer';
  amount: number;
  description: string;
  timestamp: string;
  metadata?: Record<string, any>;
}
export interface TokenConfig {
  name: string;
  symbol: string;
  totalSupply: number;
  circulatingSupply: number;
  exchangeRate: number; // USD per token
  stakingEnabled: boolean;
  stakingRewardRate: number; // APY percentage
}
const DATA_DIR = path.join(process.cwd(), 'data');
const TRANSACTIONS_FILE = path.join(DATA_DIR, 'token-transactions.json');
const CONFIG_FILE = path.join(DATA_DIR, 'token-config.json');
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}
function loadTransactions(): TokenTransaction[] {
  try {
    ensureDataDir();
    if (!fs.existsSync(TRANSACTIONS_FILE)) return [];
    const raw = fs.readFileSync(TRANSACTIONS_FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
function saveTransactions(transactions: TokenTransaction[]): void {
  ensureDataDir();
  fs.writeFileSync(TRANSACTIONS_FILE, JSON.stringify(transactions, null, 2));
}
function loadConfig(): TokenConfig {
  try {
    ensureDataDir();
    if (!fs.existsSync(CONFIG_FILE)) {
      return getDefaultConfig();
    }
    const raw = fs.readFileSync(CONFIG_FILE, "utf8");
    return JSON.parse(raw);
  } catch {
    return getDefaultConfig();
  }
}
function saveConfig(config: TokenConfig): void {
  ensureDataDir();
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(config, null, 2));
}
function getDefaultConfig(): TokenConfig {
  return {
    name: "ZION Token",
    symbol: "ZION$",
    totalSupply: 1000000000,
    circulatingSupply: 250000000,
    exchangeRate: 0.05,
    stakingEnabled: true,
    stakingRewardRate: 12.5,
  };
}

export function getAllTransactions(): TokenTransaction[] {
  return loadTransactions();
}

export function addTransaction(
  transaction: Omit<TokenTransaction, "id" | "timestamp">,
): TokenTransaction {
  const transactions = loadTransactions();
  const newTransaction: TokenTransaction = {

    ...transaction,
    id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: new Date().toISOString(),
  };

  transactions.push(newTransaction);
  saveTransactions(transactions);
  return newTransaction;
}
  return loadConfig();
}
export function setConfig(config: TokenConfig): void {
  saveConfig(config);
}

export function getConfig(): TokenConfig {;
  return loadConfig();
}

export function setConfig(config: TokenConfig): void {;
  saveConfig(config);
}

export function getUserBalance(userId: string): number {;
  const transactions = loadTransactions();
  let balance = 0;

  for (const tx of transactions) {
    if (tx.userId === userId) {
      if (tx.type === 'earn') {
        balance += tx.amount;
      } else if (tx.type === 'spend') {
        balance -= tx.amount;
      }
    }
  }

  return Math.max(0, balance);
}
