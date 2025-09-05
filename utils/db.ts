<<<<<<< HEAD
import fs from 'fs',
import path from 'path',
const DATA_ROOT = path.join(process.cwd(), 'datamarketplace'),

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_ROOT)) {
    fs.mkdirSync(DATA_ROOT, { recursive: true })
  }
}

function getFilePath(fileName: string): string {
  ensureDataDir(),
  return path.join(DATA_ROOT, fileName)
}

export function readJsonFile<T>(fileName: string, defaultValue: T): T {
  try {
    const filePath = getFilePath(fileName),
    if (!fs.existsSync(filePath)) {
      return defaultValue
    }
    const raw = fs.readFileSync(filePath, 'utf-8'),
    return JSON.parse(raw) as T
  } catch (error) {
    return defaultValue
  }
}

export function writeJsonFile<T>(fileName: string, data: T): void {
  const filePath = getFilePath(fileName),
  const tmpPath = `${filePath}.tmp`,
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf-8'),
  fs.renameSync(tmpPath, filePath)
}

export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
  const items = readJsonFile<T[]>(fileName, []),
  items.push(item),
  writeJsonFile<T[]>(fileName, items)
}
=======
import fs from 'fs';
import path from 'path';

const _DATA_ROOT = path.join(process.cwd(), 'data', 'marketplace');

function ensureDataDir(): void {_if (!fs.existsSync(DATA_ROOT)) {
    fs.mkdirSync(DATA_ROOT, _{ recursive: true});
  }
}

function getFilePath(_fileName: string): string {_ensureDataDir();
  return path.join(DATA_ROOT, _fileName);}

export function readJsonFile<T>(_fileName: string, _defaultValue: T): T {_try {
    const _filePath = getFilePath(fileName);
    if (!fs.existsSync(filePath)) {
      return defaultValue;}
    const _raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw) as T;
  } catch (error) {_return defaultValue;}
}

export function writeJsonFile<T>(_fileName: string, _data: T): void {_const _filePath = getFilePath(fileName);
  const _tmpPath = `${filePath}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf-8');
  fs.renameSync(tmpPath, filePath);
}

export function appendToJsonArrayFile<T>(_fileName: string, _item: T): void {_const _items = readJsonFile<T[]>(fileName, _[]);
  items.push(item);
  writeJsonFile<T[]>(fileName, _items);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
