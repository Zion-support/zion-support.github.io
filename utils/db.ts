// Mock database utility
import fs from 'fs';
import path from 'path';

function getFilePath(fileName: string): string {
  return path.join(process.cwd(), 'data', fileName);
}

export function readJsonFile<T>(filePath: string, defaultValue: T): T {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading file:', error);
  }
  return defaultValue;
}

export function writeJsonFile<T>(fileName: string, data: T): void {
  try {
    const filePath = getFilePath(fileName);
    const dir = path.dirname(filePath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing file:', error);
  }
}

const DATA_ROOT = path.join(process.cwd(), 'data', 'marketplace');

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_ROOT)) {
    fs.mkdirSync(DATA_ROOT, { recursive: true });
  }
}

export function readMarketplaceData<T>(fileName: string, defaultValue: T): T {
  ensureDataDir();
  const filePath = path.join(DATA_ROOT, fileName);
  return readJsonFile(filePath, defaultValue);
}

export function writeMarketplaceData<T>(fileName: string, data: T): void {
  ensureDataDir();
  const filePath = path.join(DATA_ROOT, fileName);
  writeJsonFile(filePath, data);
}
