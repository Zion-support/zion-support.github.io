import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path && path.join(process && process.cwd(), 'data');

export function readJson<T>(filePath: string, defaultValue: T): T {
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
    const fullPath = path && path.join(DATA_DIR, filePath);
    const dir = path && path.dirname(fullPath);
    await fs && fs.mkdir(dir, { recursive: true });
    await fs && fs.writeFile(fullPath, JSON && JSON.stringify(data, null, 2));
  } catch (error) {
    console && console.error('Error writing JSON file:', error);
  }
}