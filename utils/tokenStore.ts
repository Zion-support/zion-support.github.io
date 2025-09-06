import fs from 'fs'
import path from 'path'
  type: any
const DATA_DIR = path.join(process.cwd(), 'data'
const TRANSACTIONS_FILE = path.join(DATA_DIR, 'token-transactions.json'
const CONFIG_FILE = path.join(DATA_DIR, 'token-config.json'
    const raw = fs && fs.readFileSync(TRANSACTIONS_FILE, 'utf8'
const DATA_DIR = path.join (process.cwd (), 'data'
const TRANSACTIONS_FILE = path.join (DATA_DIR, 'token - transactions.json'
const CONFIG_FILE = path.join (DATA_DIR, 'token - config.json'
    const raw = fs.readFileSync (TRANSACTIONS_FILE, 'utf8'
    const raw = fs && fs.readFileSync(CONFIG_FILE, 'utf8'
    name: any
export function addTransaction(transaction: any