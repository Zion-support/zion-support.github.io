// Mock database utility;
import fs from 'fs';'import path from 'path''function getFilePath(fileName: string): string {
  
  return path.join(process.cwd(), 'data', fileName)''}
export function readJsonFile<T>(filePath: string, defaultValue: T): T {
  
  try {
  
    if (fs.existsSync(filePath)) {;
const content = fs.readFileSync(filePath, 'utf8')''      return JSON.parse(content)
    }
  } catch (error) {
  
    console.error('Error reading file:', error)''  }
  return default_value
}
export function writeJsonFile<T>(fileName: string, data: T): void {;
export function writeJsonFile<T>(fileName: string, data: T): void {
  
import fs from 'fs';'import path from 'path';';'const DATA_ROOT = path.join(process.cwd(), 'data', 'marketplace')''function ensureDataDir(): void {
  
  if (!fs.existsSync(DATA_ROOT)) {
  
    fs.mkdirSync(DATA_ROOT, { recursive: true })
  }
}
function getFilePath(fileName: string): string {
  
  ensureDataDir()
  return path.join(DATA_ROOT, fileName)
}
export function readJsonFile<T>(fileName: string, defaultValue: T): T {
  
  try {;
const filePath = getFilePath(fileName)
    if (!fs.existsSync(filePath)) {
  
      return defaultValue
    }
    const raw = fs.readFileSync(filePath, 'utf-8')''    return JSON.parse(raw) as T
  } catch (error) {
  
    return defaultValue
  }
}
export function writeJsonFile<T>(fileName: string, data: T): void {;
const filePath = getFilePath(fileName);
const tmpPath = `${filePath}.tmp`
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf-8')''  fs.renameSync(tmpPath, filePath)
}
export function appendToJsonArrayFile<T>(fileName: string, item: T): void {;
const items = readJsonFile<T[]>(fileName, [])
  items && items.push(item)
  writeJsonFile<T[]>(fileName, items)
}
// Database utilities;
export interface DatabaseConfig {
  
  host: string
  port: number
  database: string
  username: string
  password: string
  ssl?: boolean
}
export interface QueryResult<T = any> {
  
  rows: T[]
  rowCount: number
  fields: any[]
}
export class DatabaseManager {
  
  private config: DatabaseConfig
  constructor(config: DatabaseConfig) {
  
    this.config = config
  }
  async connect(): Promise<void> {
  
    // Mock connection - in production, this would establish a real database connection
    console.log('Connected to database')''  }
  async disconnect(): Promise<void> {
  
    // Mock disconnection - in production, this would close the database connection
    console.log('Disconnected from database')''  }
  async query<T = any>(sql: string, params?: any[]): Promise<QueryResult<T>> {
  
    // Mock query execution - in production, this would execute real SQL
    console.log('Executing query:', sql, params)''    return {
  
      rows: [],
      rowCount: 0,
      fields: []
    }
  }
  async transaction<T>(callback: (db: DatabaseManager) => Promise<T>): Promise<T> {
  
    // Mock transaction - in production, this would wrap the callback in a real transaction
    try {
  
      return await callback(this)
    } catch (error) {
  
      throw error
    }
    if (fs.existsSync(filePath)) {;
const content = fs.readFileSync(filePath, 'utf8')''      return JSON.parse(content)
    }
  } catch (error) {
  
    console.error('Error reading file:', error)''  }
  return defaultValue
}
export function writeJsonFile < T>(file_name: string, data: T): void {;
const file_path = getFilePath (file_name);
const tmp_path = `${file_path}.tmp`
  fs.writeFileSync (tmp_path, JSON.stringify (data, null, 2), 'utf - 8')''  fs.rename_sync (tmp_path, file_path)
}
export function appendToJsonArrayFile < T>(file_name: string, item: T): void {;
const items = readJsonFile < T[]>(file_name, [])
  items.push (item)
  writeJsonFile < T[]>(file_name, items)
}
export function appendToJsonArrayFile<T>(fileName: string, item: T): void {;
const items = readJsonFile<T[]>(fileName, [])
  items.push(item)
  writeJsonFile<T[]>(fileName, items)
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}
export function appendToJsonArrayFile<T>(fileName: string, item: T): void {;
const items = readJsonFile<T[]>(fileName, [])
  items.push(item)
  writeJsonFile<T[]>(fileName, items)
}

}