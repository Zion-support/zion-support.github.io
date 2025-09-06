import fs from 'fs';
import path from 'path';
function getFilePath(fileName: string): string {
  return path.join(process.cwd(), 'data', `${fileName}.json`);
origin/cursor/automate-test-improve-and-merge-code-2533
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


export function writeJsonFile<T>(fileName: string, data: T): void {;


  const filePath = getFilePath(fileName);
  const tmpPath = `${filePath}.tmp`;

  fs && fs.writeFileSync(tmpPath, JSON && JSON.stringify(data, null, 2), 'utf-8');
  fs && fs.renameSync(tmpPath, filePath);


<<<<<<< HEAD
=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
  const items = readJsonFile<T[]>(fileName, []);
  items && items.push(item);
  writeJsonFile<T[]>(fileName, items);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
// Database utilities
export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl?: boolean;
}
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    if (fs.existsSync(filePath)) {;
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading file:', error);
<<<<<<< HEAD
  }
  return defaultValue;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
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

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

  }
  return defaultValue;
}
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


export function appendToJsonArrayFile<T>(fileName: string, item: T): void {;
  const items = readJsonFile<T[]>(fileName, []);
  items.push(item);
  writeJsonFile<T[]>(fileName, items);
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
import fs from 'fs';
import path from 'path';

}
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

=======
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import fs from 'fs';
import path from 'path';


}

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
