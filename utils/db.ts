import fs from 'fs';
import path from 'path';

// Database utilities
export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl?: boolean;
}

export interface QueryResult<T = any> {
  rows: T[];
  rowCount: number;
  fields: any[];
}

export class DatabaseManager {
  private config: DatabaseConfig;

  constructor(config: DatabaseConfig) {
    this.config = config;
  }

  async connect(): Promise<void> {
    // Mock connection - in production, this would establish a real database connection
    console.log('Connected to database');
  }

  async disconnect(): Promise<void> {
    // Mock disconnection - in production, this would close the database connection
    console.log('Disconnected from database');
  }

  async query<T = any>(sql: string, params?: any[]): Promise<QueryResult<T>> {
    // Mock query execution - in production, this would execute real SQL
    console.log('Executing query:', sql, params);
    return {
      rows: [],
      rowCount: 0,
      fields: []
    };
  }

  async transaction<T>(callback: (db: DatabaseManager) => Promise<T>): Promise<T> {
    // Mock transaction - in production, this would wrap the callback in a real transaction
    try {
      return await callback(this);
    } catch (error) {
      throw error;
    }
  }
}

// File system utilities
function getFilePath(fileName: string): string {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  return path.join(dataDir, fileName);
}

export function readJsonFile<T>(fileName: string, defaultValue: T): T {
  try {
    const filePath = getFilePath(fileName);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading file:', error);
  }
  return defaultValue;
}

export function writeJsonFile<T>(fileName: string, data: T): void {
  const filePath = getFilePath(fileName);
  const tmpPath = `${filePath}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf8');
  fs.renameSync(tmpPath, filePath);
}

export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
  const items = readJsonFile<T[]>(fileName, []);
  items.push(item);
  writeJsonFile<T[]>(fileName, items);
}

// Default database configuration
const defaultConfig: DatabaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'zion_tech_group',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  ssl: process.env.DB_SSL === 'true'
};

// Singleton database instance
export const db = new DatabaseManager(defaultConfig);