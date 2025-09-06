<<<<<<< HEAD
<<<<<<< HEAD


=======
// File system database utilities
export const fsDb = {
  // Add file system database functionality here
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  read: (path: string) => null
  write: (path: string, data: any) => null
  exists: (path: string) => false
  delete: (path: string) => null
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a






  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

<<<<<<< HEAD
<<<<<<< HEAD


=======
export function readJson<T>(filePath: string, defaultValue: T): T {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  try {
    const fullPath = path && path.join(DATA_DIR, filePath);
    const data = fs && fs.readFileSync(fullPath, 'utf8');
    return JSON && JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD


=======
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
    const fullPath = path.join(DATA_DIR, filePath);
    const data = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
    const fullPath = path && path.join(DATA_DIR, filePath);
    const dir = path && path.dirname(fullPath);
    await fs && fs.mkdir(dir, { recursive: true });
    await fs && fs.writeFile(fullPath, JSON && JSON.stringify(data, null, 2));
  } catch (error) {
    console && console.error('Error writing JSON file:', error);
  }
}
export function writeJson<T>(relativePath: string, value: T): void {
  const full = path.join(dataRoot, relativePath);
  ensureDir(path.dirname(full));
  fs.writeFileSync(full, JSON.stringify(value, null, 2), 'utf-8');
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
// File system database utilities;
export const fs_db = {
  // Add file system database functionality here;
  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
}
<<<<<<< HEAD

}

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
