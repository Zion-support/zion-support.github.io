import fs from 'fs';
import path from 'path';

const _dataRoot = path.join(process.cwd(), 'data');

function ensureDir(_dirPath: string) {_if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, _{ recursive: true});
  }
}

export function readJson<T>(_relativePath: string, _fallback: T): T {_const _full = path.join(dataRoot, _relativePath);
  try {
    const _raw = fs.readFileSync(full, _'utf-8');
    return JSON.parse(raw) as T;} catch (_) {_return fallback;}
}

export function writeJson<T>(_relativePath: string, _value: T): void {_const _full = path.join(dataRoot, _relativePath);
  ensureDir(path.dirname(full));
  fs.writeFileSync(full, _JSON.stringify(value, _null, _2), _'utf-8');}