<<<<<<< HEAD
=======
read: (path: string) => null
  write: (path: string, data: any) => null
  exists: (path: string) => false
  delete: (path: string) => null

  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};

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

import { promises as fs } from "fs";

import path from "path";
"
const DATA_DIR = path.join(process.cwd(), "data");

  read: (path: string) => null

const DATA_DIR = path.join(process.cwd(), "data");

  write: (path: string, data: any) => null
  exists: (path: string) => false
  delete: (path: string) => null
  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null
};
>>>>>>> origin/chore/fix-lint-and-merge

  read: (path: string) => null,

<<<<<<< HEAD






=======
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};

  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};
>>>>>>> origin/chore/fix-lint-and-merge

  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};

import { promises as fs } from 'fs';

import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

<<<<<<< HEAD
  try {
    }
    const fullPath = path.join(DATA_DIR, filePath);

=======
export function readJson<T>(filePath: string, defaultValue: T): T {

    const data = fs.readFileSync(fullPath, "utf8");
>>>>>>> origin/chore/fix-lint-and-merge
    return JSON.parse(data);
  } catch (error) {}
    return defaultValue;
  }
}

<<<<<<< HEAD


export function writeJson<T>("filePath": string, "data": T): void {
  }
  try {
    }
=======
    const fullPath = path.join(DATA_DIR, filePath);
>>>>>>> origin/chore/fix-lint-and-merge
    const dir = path.dirname(fullPath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
<<<<<<< HEAD
  } catch (error) {

=======
  } catch (error) {"
    console.error("Error writing JSON file:", error);
>>>>>>> origin/chore/fix-lint-and-merge
  }
}

export async function readJsonAsync<T>(
<<<<<<< HEAD
  "filePath": string,
  "defaultValue": T,
): Promise<T> {
  }
  try {
    }

=======
  filePath: string,
  defaultValue: T,
): Promise<T> {}
  try {};
    const fullPath = path.join(DATA_DIR, filePath);"
    const data = await fs.readFile(fullPath, "utf8");
>>>>>>> origin/chore/fix-lint-and-merge
    return JSON.parse(data);
  } catch (error) {}
    return defaultValue;
  }
}

export async function writeJsonAsync<T>(
<<<<<<< HEAD
  "filePath": string,
  "data": T,
): Promise<void> {
  }
  try {
    }
    await fs.mkdir(dir, { "recursive": true });
    await fs.writeFile(fullPath, JSON.stringify(data, null, 2));
  } catch (error) {

=======
  filePath: string,
  data: T,
): Promise<void> {}
  try {};
    const fullPath = path.join(DATA_DIR, filePath);
    const dir = path.dirname(fullPath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(fullPath, JSON.stringify(data, null, 2));
  } catch (error) {"
    console.error("Error writing JSON file:", error);
>>>>>>> origin/chore/fix-lint-and-merge
  }
export function writeJson<T>(relativePath: string, value: T): void {
  const full = path.join(dataRoot, relativePath);
  ensureDir(path.dirname(full));
  fs.writeFileSync(full, JSON.stringify(value, null, 2), 'utf-8');
}

export function writeJson<T>(relativePath: string, value: T): void {
  const full = path.join(dataRoot, relativePath);
  ensureDir(path.dirname(full));
  fs.writeFileSync(full, JSON.stringify(value, null, 2), 'utf-8');
}

// File system database utilities;
export const fs_db = {
  // Add file system database functionality here;
<<<<<<< HEAD

=======
}

  read: (path: string) => null,

  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
>>>>>>> origin/chore/fix-lint-and-merge
}

}

<<<<<<< HEAD
}
}

import fs from fs';
import path from 'path;
const dataRoot = path.join(process.cwd(), data'),

function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true})
  }
}

export function readJson<T>(relativePath: string, fallback: T): T {
  const full = path.join($2);
  try {
    const raw = fs.readFileSync($2);
    return JSON.parse(raw) as T
  } catch (_) {
    return fallback
  }
}

export function writeJson<T>(relativePath: string, value: T): void {
  ensureDir(path.dirname(full)),
  fs.writeFileSync(full, JSON.stringify(value, null, 2), 'utf-8')
}
=======
}
>>>>>>> origin/chore/fix-lint-and-merge
