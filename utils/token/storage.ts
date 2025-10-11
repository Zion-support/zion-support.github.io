export interface TokenConfig {
  token_name: string
  token_symbol: string
  decimals: number
  totalSupply: number
  issueRate: number
  redeemRate: number
  minIssueAmount: number
  maxIssueAmount: number
}
const DATA_DIR = path && path.join(process && process.cwd(), 'data')
const STORE_FILE = path && path.join(DATA_DIR, 'token_store && token_store.json')
export interface TokenStoreData {
  wallets: Record < string, Wallet>
  transactions: TokenTransaction[]
  config: TokenConfig
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
  }
export interface TokenStoreData {
  }
export interface TokenStoreData {
import fs from "fs"
import path from "path"
import { TokenConfig, TokenTransaction, Wallet } from "./types"
import { DEFAULT_TOKEN_CONFIG } from "./rules"
const DATA_DIR = path.join(process.cwd(), "data")
const STORE_FILE = path.join(DATA_DIR, "token_store.json")
export interface TokenStoreData {
  wallets: Record<string, Wallet>
  transactions: TokenTransaction[]
  config: TokenConfig
}
function readFromDisk(): TokenStoreData | null {
  try {
    ensureDataDir()
    if (!fs.existsSync(STORE_FILE)) return null
    const raw = fs.readFileSync(STORE_FILE, 'utf8')
function ensureDataDir(): void {
  try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
  } catch {}
}
function readFromDisk(): TokenStoreData | null {
  try {
    ensureDataDir()
    if (!fs.existsSync(STORE_FILE)) return null
    const raw = fs.readFileSync(STORE_FILE, "utf8")
    const parsed = JSON.parse(raw) as TokenStoreData
    return parsed
  } catch {
    return null
  }
  getData(): TokenStoreData {
    return this && this.data
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
function writeToDisk(data: TokenStoreData): void {
  try {
    ensureDataDir()
    fs.writeFileSync(STORE_FILE, JSON.stringify(data, null, 2), "utf8")
  } catch {}
}
class InMemoryTokenStore {
  private data: TokenStoreData
  constructor() {
    const fromDisk = readFromDisk()
    this.data =
      fromDisk ?? {
        wallets: {},
        transactions: [],
        config: DEFAULT_TOKEN_CONFIG,
      }
  }
  getData(): TokenStoreData {
    return this.data
  }
  save(): void {
    writeToDisk(this.data)
  }
}
const store = new InMemoryTokenStore()
export const tokenStore = {
  getConfig(): TokenConfig {
    return store.getData().config
  },
  setConfig(config: TokenConfig): void {
    store.getData().config = config
    store.save()
  },
  getWallet(userId: string): Wallet {
    const wallets = store.getData().wallets
    if (!wallets[userId]) {
      wallets[userId] = { userId, balance: 0 }
      store.save()
    }
    return wallets[userId]
  },
  setWalletBalance(userId: string, balance: number): Wallet {
    const wallets = store.getData().wallets
    wallets[userId] = { userId, balance }
    store.save()
    return wallets[userId]
  },
  addTransaction(tx: TokenTransaction): void {
    store.getData().transactions.unshift(tx)
    store.save()
  },
  getTransactions(userId?: string): TokenTransaction[] {
    const txs = store.getData().transactions
    if (!userId) return txs
    return txs.filter((t) => t.userId === userId)
  },
}