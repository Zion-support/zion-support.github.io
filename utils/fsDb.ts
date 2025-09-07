
import { promises as fs } from "fs";""
import path from "path";""
const DATA_DIR = path.join(process.cwd(), "data");"
  read: (path: string) => null;,
  write: (path: string, data: any) => null;,
  exists: (path: string) => false;,
  delete: (path: string) => null;,
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






  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};"
import { promises as fs } from 'fs';''
import path from 'path';''
const DATA_DIR = path.join(process.cwd(), 'data');'
  try {

  // TODO: Implement
}
    const fullPath = path.join(DATA_DIR, filePath);'
    const data = fs.readFileSync(fullPath, "utf8");"
    return JSON.parse(data);
  } catch (error) {
    return defaultValue;

  }
}




export function writeJson<T>(filePath: string, data: T): void {
</T>
export async function readJsonAsync<T>(
</T>)
): Promise<T> {
</T>
export async function writeJsonAsync<T>(
</T>)
): Promise<void> {
</void>"

