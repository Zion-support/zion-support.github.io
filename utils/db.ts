<<<<<<< HEAD
<<<<<<< HEAD
// Mock database utility
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

function getFilePath(fileName: string): string {
  return path.join(process.cwd(), 'data', fileName);
}

=======
function getFilePath(fileName: string): string {
  return path.join(process.cwd(), 'data', `${fileName}.json`);
}
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export function readJsonFile<T>(filePath: string, defaultValue: T): T {
  try {
<<<<<<< HEAD
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
=======
    const fs = require('fs'),
    if (fs && fs.existsSync(filePath)) {
      const content = fs && fs.readFileSync(filePath, 'utf8');
      return JSON && JSON.parse(content);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  } catch (error) {
    console && console.error('Error reading file:', error);
=======
// Mock database utility;
import fs from 'fs';
import path from 'path';
;
function getFilePath (file_name: string): string {
  return path.join (process.cwd (), 'data', `${file_name}.json`);
}
export function readJsonFile < T>(file_path: string, default_value: T): T {
  try {
    if () {) {
  $2
}
      const content = fs.readFileSync (file_path, 'utf8');
      return JSON.parse (content);
    }
  } catch (error) {
    console.error ('Error reading file:', error);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  return default_value;
}
<<<<<<< HEAD
export function writeJsonFile<T>(fileName: string, data: T): void {
  const filePath = getFilePath(fileName);
  const tmpPath = `${filePath}.tmp`;
<<<<<<< HEAD
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf-8');
  fs.renameSync(tmpPath, filePath);
}
<<<<<<< HEAD
=======
  fs && fs.writeFileSync(tmpPath, JSON && JSON.stringify(data, null, 2), 'utf-8');
  fs && fs.renameSync(tmpPath, filePath);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
  const items = readJsonFile<T[]>(fileName, []);
  items && items.push(item);
  writeJsonFile<T[]>(fileName, items);
}
=======
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
export function writeJsonFile < T>(file_name: string, data: T): void {
  const file_path = getFilePath (file_name);
  const tmp_path = `${file_path}.tmp`;
  fs.writeFileSync (tmp_path, JSON.stringify (data, null, 2), 'utf - 8');
  fs.rename_sync (tmp_path, file_path);
}
export function appendToJsonArrayFile < T>(file_name: string, item: T): void {
  const items = readJsonFile < T[]>(file_name, []);
  items.push (item);
  writeJsonFile < T[]>(file_name, items);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
