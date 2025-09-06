<<<<<<< HEAD


=======
// File system database utilities
export const fsDb = {
  // Add file system database functionality here
  read: (path: string) => null
  write: (path: string, data: any) => null
  exists: (path: string) => false
  delete: (path: string) => null
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};
<<<<<<< HEAD


=======
  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

<<<<<<< HEAD


=======
export function readJson<T>(filePath: string, defaultValue: T): T {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  try {
    const fullPath = path && path.join(DATA_DIR, filePath);
    const data = fs && fs.readFileSync(fullPath, 'utf8');
    return JSON && JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
}

<<<<<<< HEAD


=======
=======
export function writeJson<T>(filePath: string, data: T): void {
  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const dir = path.dirname(fullPath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing JSON file:', error);
  }
}

export async function readJsonAsync<T>(filePath: string, defaultValue: T): Promise<T> {
  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const data = await fs.readFile(fullPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
}

export async function writeJsonAsync<T>(filePath: string, data: T): Promise<void> {
  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const dir = path.dirname(fullPath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(fullPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing JSON file:', error);
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
// File system database utilities;
export const fs_db = {
  // Add file system database functionality here;
  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
}

}

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
