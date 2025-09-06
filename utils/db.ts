<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
const DATA_ROOT = path.join(process.cwd(), 'datamarketplace');
function ensureDataDir(): void {;
  if (!fs.existsSync(DATA_ROOT)) {;
    fs.mkdirSync(DATA_ROOT, { recursive: true });
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
<<<<<<< HEAD
;
function getFilePath(fileName: string): string {;
  ensureDataDir();
  return path.join(DATA_ROOT, fileName);
}
;
export function readJsonFile<T>(fileName: string, defaultValue: T): T {;
  try {;
    const filePath = getFilePath(fileName);
    if (!fs.existsSync(filePath)) {;
      return defaultValue;
    }
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as T;
  } catch (error) {;
    return defaultValue;
  }
}
;
export function writeJsonFile<T>(fileName: string, data: T): void {;
  const filePath = getFilePath(fileName);
  const tmpPath = `${filePath}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf-8');
  fs.renameSync(tmpPath, filePath);
}
;
=======

<<<<<<< HEAD
=======


export function writeJsonFile<T>(fileName: string, data: T): void {;


  const filePath = getFilePath(fileName);
  const tmpPath = `${filePath}.tmp`;

  fs && fs.writeFileSync(tmpPath, JSON && JSON.stringify(data, null, 2), 'utf-8');
  fs && fs.renameSync(tmpPath, filePath);


=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
  const items = readJsonFile<T[]>(fileName, []);
  items && items.push(item);
  writeJsonFile<T[]>(fileName, items);
<<<<<<< HEAD
// Database utilities
export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl?: boolean;
}
=======

}
// Database utilities
export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl?: boolean;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    if (fs.existsSync(filePath)) {;
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading file:', error);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
  return defaultValue;
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
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

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export function appendToJsonArrayFile<T>(fileName: string, item: T): void {;
  const items = readJsonFile<T[]>(fileName, []);
  items.push(item);
  writeJsonFile<T[]>(fileName, items);
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

}
}
=======

=======
import fs from 'fs';
import path from 'path';


}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
