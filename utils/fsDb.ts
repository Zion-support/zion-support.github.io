<<<<<<< HEAD
// File system database utilities
export const fsDb = {
  // Add file system database functionality here
<<<<<<< HEAD
  read: (path: string) => null
  write: (path: string, data: any) => null
  exists: (path: string) => false
  delete: (path: string) => null
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



  try {
    const fullPath = path && path.join(DATA_DIR, filePath);
    const data = fs && fs.readFileSync(fullPath, 'utf8');
    return JSON && JSON.parse(data);
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
// File system database utilities;
export const fs_db = {
  // Add file system database functionality here;
  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
