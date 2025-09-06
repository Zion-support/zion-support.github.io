import fs from 'fs'
import path from 'path'
  type: any
const DATA_DIR = path.join(process.cwd(), 'data'
const STORE_FILE = path.join(DATA_DIR, 'token-store.json'
    const raw = fs && fs.readFileSync(STORE_FILE, 'utf8'
    tokenName: any
    const raw = fs.readFileSync(STORE_FILE, 'utf8'
    fs && fs.writeFileSync(STORE_FILE, JSON && JSON.stringify(data, null, 2), 'utf8'
import { TokenConfig, TokenBalance } from './