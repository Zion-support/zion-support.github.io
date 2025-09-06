// File system database utility functions
import { promises as fs } from 'fs';
import path from 'path';

export interface FSDocument {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export async function readFSDB<T extends FSDocument>(filePath: string): Promise<T[]> {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function writeFSDB<T extends FSDocument>(filePath: string, data: T[]): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function findFSDB<T extends FSDocument>(filePath: string, id: string): Promise<T | null> {
  const data = await readFSDB<T>(filePath);
  return data.find(item => item.id === id) || null;
}

export async function upsertFSDB<T extends FSDocument>(filePath: string, item: T): Promise<T> {
  const data = await readFSDB<T>(filePath);
  const index = data.findIndex(i => i.id === item.id);
  
  if (index >= 0) {
    data[index] = { ...item, updatedAt: new Date().toISOString() };
  } else {
    data.push({ ...item, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
  }
  
  await writeFSDB(filePath, data);
  return data[index >= 0 ? index : data.length - 1];
}