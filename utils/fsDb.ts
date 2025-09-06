<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
// File system database utilities
export const fsDb = {
  // Add file system database functionality here
  read: (path: string) => null
  write: (path: string, data: any) => null
  exists: (path: string) => false
  delete: (path: string) => null
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

<<<<<<< HEAD


=======
export function readJson<T>(filePath: string, defaultValue: T): T {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const data = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
}

<<<<<<< HEAD


<<<<<<< HEAD
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

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
