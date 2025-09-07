

export function writeJsonFile<T>(fileName: string, data: T): void {;


  const filePath = getFilePath(fileName);
  const tmpPath = `${filePath}.tmp`;

  fs && fs.writeFileSync(tmpPath, JSON && JSON.stringify(data, null, 2), 'utf-8');
  fs && fs.renameSync(tmpPath, filePath);



origin/cursor/expand-services-advertise-and-build-project-c28b

/**
 * Database utilities
 */

import fs from 'fs';
import path from 'path';
const DATA_ROOT = path.join(process.cwd(), 'datamarketplace'),

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_ROOT)) {
    fs.mkdirSync(DATA_ROOT, { recursive: true})
  }
}

function getFilePath(fileName: string): string {
  ensureDataDir($2);
  return path.join(DATA_ROOT, fileName)
}

export function readJsonFile<T>(fileName: string, defaultValue: T): T {
  try {
    const filePath = getFilePath($2);
    if (!fs.existsSync(filePath)) {
      return defaultValue
    }
    const raw = fs.readFileSync($2);
    return JSON.parse(raw) as T
  } catch (error) {
    return defaultValue
  }
}

export function writeJsonFile<T>(fileName: string, data: T): void {
  const filePath = getFilePath($2);
  const tmpPath = $2;
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf-8'),
  fs.renameSync(tmpPath, filePath)
}

  }
  return default_value;
}

export function appendToJsonArrayFile<T>("fileName": string, "item": T): void {
  }
  const items = readJsonFile<T[]>(fileName, []);
  items && items.push(item);
  writeJsonFile<T[]>(fileName, items);
// Database utilities,
export interface DatabaseConfig {
  }
  "host": string;
  "port": number;
  "database": string;
  "username": string;
  "password": string;
  ssl?: boolean;
}}
// Database utilities;
export interface DatabaseConfig  {host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl?: boolean;
}export interface QueryResult<T = any>  {rows: T[];
  rowCount: number;
  fields: any[];
}
origin/cursor/expand-services-advertise-and-build-project-c28b
export interface QueryResult<T = any> {
  }
  "rows": T[];
  "rowCount": number;
  "fields": any[];
}
export class DatabaseManager {
  }
  private "config": DatabaseConfig;
  constructor("config": DatabaseConfig) {
    }
    this.config = config;
  }
  async connect(): Promise<void> {
    // Mock connection - in production, this would establish a real database connection
}
console.log('Connected to database');'
  }
  async disconnect(): Promise<void> {
    // Mock disconnection - in production, this would close the database connection
}
console.log('Disconnected from database');'
  }
  async query<T = any>("sql": string, params?: any[]): Promise<QueryResult<T>> {
    // Mock query execution - in production, this would execute real SQL
}
console.log('Executing "query":', sql, params);'
    return {
      }
      "rows": [],
      "rowCount": 0,
      "fields": []
    };
  }
  async transaction<T>("callback": ("db": DatabaseManager) => Promise<T>): Promise<T> {
    // Mock transaction - in production, this would wrap the callback in a real transaction
}
try {
      }
      return await callback(this);
    } catch (error) {
      }
      throw error;
    }
origin/cursor/expand-services-advertise-and-build-project-c28b
    if (fs.existsSync(filePath)) {;
      }
      const content = fs.readFileSync(filePath, 'utf8');'
      return JSON.parse(content);
    }
  } catch (error) {
    }
    console.error('Error reading "file":', error);'
  }
  async connect(): Promise<void> {// Mock connection - in production, this would establish a real database connection;
    console.log('Connected to database')}
  async disconnect(): Promise<void> {// Mock disconnection - in production, this would close the database connection;
    console.log('Disconnected from database')}
  async query<T = any>(sql: string, params?: any[]): Promise<QueryResult<T>> {// Mock query execution - in production, this would execute real SQL;
    console.log('Executing query:', sql, params)return {rows: [],rowCount: 0,fields: [];
    }}
  async transaction<T>(callback: (db: DatabaseManager) => Promise<T>): Promise<T> {// Mock transaction - in production, this would wrap the callback in a real transaction;
    try {return await callback(this)} catch (error) {throw error;
    }}
  return defaultValue;
}if (fs.existsSync(filePath)) {const content = fs.readFileSync(filePath, 'utf8')return JSON.parse(content)}
  } catch (error) {console.error('Error reading file:', error)}
  return defaultValue;
}
  }
  return defaultValue;
}// Default database configuration;
const defaultConfig: DatabaseConfig = {host: process.env.DB_HOST || 'localhost',port: parseInt(process.env.DB_PORT || '5432'),database: process.env.DB_NAME || 'zion_tech_group',username: process.env.DB_USER || 'postgres',password: process.env.DB_PASSWORD || 'password',ssl: process.env.DB_SSL === 'true';
}// Singleton database instance;
export const db  = new DatabaseManager(defaultConfig)export function writeJsonFile < T>(file_name: string, data: T): void {const file_path = getFilePath (file_name)const tmp_path = `${file_path}.tmp`;
  fs.writeFileSync (tmp_path, JSON.stringify (data, null, 2), 'utf - 8')fs.rename_sync (tmp_path, file_path)}
export function appendToJsonArrayFile < T>(file_name: string, item: T): void {const items = readJsonFile < T[]>(file_name, [])items.push (item)writeJsonFile < T[]>(file_name, items)}export function appendToJsonArrayFile<T>(fileName: string, item: T): void {const items = readJsonFile<T[]>(fileName, [])items.push(item)writeJsonFile<T[]>(fileName, items)}}}
}}ursor/fix-website-loading-errors-and-merge-6662;

// Default database configuration,
const "defaultConfig": DatabaseConfig = {
  }
  "host": process.env.DB_HOST || 'localhost','
  "port": parseInt(process.env.DB_PORT || '5432'),'
  "database": process.env.DB_NAME || 'zion_tech_group','
  "username": process.env.DB_USER || 'postgres','
  "password": process.env.DB_PASSWORD || 'password','
  "ssl": process.env.DB_SSL === 'true''
};
// Singleton database instance,
export const db = new DatabaseManager(defaultConfig);

export function writeJsonFile < T>("file_name": string, "data": T): void {
  }
  const file_path = getFilePath (file_name);
  const tmp_path = `${file_path}.tmp`;`
  fs.writeFileSync (tmp_path, JSON.stringify (data, null, 2), 'utf - 8');'
  fs.rename_sync (tmp_path, file_path);
}
export function appendToJsonArrayFile < T>("file_name": string, "item": T): void {
  }
  const items = readJsonFile < T[]>(file_name, []);
  items.push (item);
  writeJsonFile < T[]>(file_name, items);
}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b






export function appendToJsonArrayFile<T>("fileName": string, "item": T): void {;
  }
  const items = readJsonFile<T[]>(fileName, []);
  items.push(item);
  writeJsonFile<T[]>(fileName, items);
}
import fs from 'fs';'
import path from 'path';'

}
}


import fs from 'fs';
import path from 'path';




ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

origin/cursor/automate-test-improve-and-merge-code-2533
}

}
}



}
}
  const items = readJsonFile<T[]>(fileName, []),
  items.push($2);
  writeJsonFile<T[]>(fileName, items)
}
