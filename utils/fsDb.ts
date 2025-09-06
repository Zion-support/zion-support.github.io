
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");


// File system database utilities
export const fsDb = {
  // Add file system database functionality here
  read: (path: string) => null
  write: (path: string, data: any) => null
  exists: (path: string) => false
  delete: (path: string) => null


  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};






  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
>>>>>>> main



export function readJson<T>(filePath: string, defaultValue: T): T {



  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const data = fs.readFileSync(fullPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
}




>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
export function writeJson<T>(filePath: string, data: T): void {
  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const dir = path.dirname(fullPath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing JSON file:", error);
  }
}

export async function readJsonAsync<T>(
  filePath: string,
  defaultValue: T,
): Promise<T> {
  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const data = await fs.readFile(fullPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
}

export async function writeJsonAsync<T>(
  filePath: string,
  data: T,
): Promise<void> {
  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const dir = path.dirname(fullPath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(fullPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing JSON file:", error);
  }
}

export function writeJson<T>(relativePath: string, value: T): void {
  const full = path.join(dataRoot, relativePath);
  ensureDir(path.dirname(full));
  fs.writeFileSync(full, JSON.stringify(value, null, 2), 'utf-8');
}


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
// File system database utilities;
export const fs_db = {
  // Add file system database functionality here;
  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
}

}

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}
}

ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
