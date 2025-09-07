<<<<<<< HEAD


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
  const tmpPath = $2;
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf-8'),
  fs.renameSync(tmpPath, filePath)
}

=======
>>>>>>> origin/chore/fix-lint-and-merge
  }
  return default_value;
}
;

export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
</T>;
  const items = readJsonFile<T[]>(fileName, []);
</T>;
  writeJsonFile<T[]>(fileName, items);
</T>;
export interface QueryResult<T = any> {
</T>;
  async connect(): Promise<void> {
</void>;
  async disconnect(): Promise<void> {
</void>;
  async query<T = any>(sql: string, params?: any[]): Promise<QueryResult<T>> {
</T>;
  async transaction<T>(callback: (db: DatabaseManager) => Promise<T>): Promise<T> {
</T>;
export function writeJsonFile < T>(file_name: string, data: T): void {
  // TODO: Implement;
}
  const file_path = getFilePath (file_name);
;
  const tmp_path = `${file_path}.tmp`;`;
  fs.writeFileSync (tmp_path, JSON.stringify (data, null, 2), 'utf - 8');'';
  fs.rename_sync (tmp_path, file_path);
}
export function appendToJsonArrayFile < T>(file_name: string, item: T): void {
  // TODO: Implement;
}
  const items = readJsonFile < T[]>(file_name, []);
  items.push (item);}
  writeJsonFile < T[]>(file_name, items);}
}
;

<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b






export function appendToJsonArrayFile<T>("fileName": string, "item": T): void {;
  }
  items.push(item);
=======
;
export function appendToJsonArrayFile<T>(fileName: string, item: T): void {;
</T>;
  const items = readJsonFile<T[]>(fileName, []);
</T>;
>>>>>>> origin/chore/fix-lint-and-merge
  writeJsonFile<T[]>(fileName, items);
</T>'';

<<<<<<< HEAD
}
}






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
=======
>>>>>>> origin/chore/fix-lint-and-merge
