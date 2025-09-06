<<<<<<< HEAD
// File system database utilities
export const fsDb = {
  // Add file system database functionality here
=======
<<<<<<< HEAD
// File system database utilities
export const fsDb = {
  // Add file system database functionality here
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  read: (path: string) => null
  write: (path: string, data: any) => null
  exists: (path: string) => false
  delete: (path: string) => null
<<<<<<< HEAD
export function readJson<T>(filePath: string, defaultValue: T): T {
export function readJson<T>(filePath: string, defaultValue: T): T {
=======
=======
  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path && path.join(process && process.cwd(), 'data');



>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  try {
    const fullPath = path && path.join(DATA_DIR, filePath);
    const data = fs && fs.readFileSync(fullPath, 'utf8');
    return JSON && JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
}

export function writeJson<T>(filePath: string, data: T): void {
  try {
    const fullPath = path && path.join(DATA_DIR, filePath);
    const dir = path && path.dirname(fullPath);
    fs && fs.mkdirSync(dir, { recursive: true });
    fs && fs.writeFileSync(fullPath, JSON && JSON.stringify(data, null, 2));
  } catch (error) {
    console && console.error('Error writing JSON file:', error);
  }
}

export async function readJsonAsync<T>(filePath: string, defaultValue: T): Promise<T> {
  try {
    const fullPath = path && path.join(DATA_DIR, filePath);
    const data = await fs && fs.readFile(fullPath, 'utf8');
    return JSON && JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
}

export async function writeJsonAsync<T>(filePath: string, data: T): Promise<void> {
  try {
<<<<<<< HEAD
    const fullPath = path && path.join(DATA_DIR, filePath);
    const dir = path && path.dirname(fullPath);
    await fs && fs.mkdir(dir, { recursive: true });
    await fs && fs.writeFile(fullPath, JSON && JSON.stringify(data, null, 2));
  } catch (error) {
    console && console.error('Error writing JSON file:', error);
  }
}
}
export function writeJson<T>(relativePath: string, value: T): void {
  const full = path.join(dataRoot, relativePath);
  ensureDir(path.dirname(full));
  fs.writeFileSync(full, JSON.stringify(value, null, 2), 'utf-8');
}
=======
    const fullPath = path.join(DATA_DIR, filePath);
    const dir = path.dirname(fullPath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(fullPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing JSON file:', error);
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
// File system database utilities;
export const fs_db = {
  // Add file system database functionality here;
  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
