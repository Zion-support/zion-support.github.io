<<<<<<< HEAD
import fs from 'fs',
import path from 'path',
const dataRoot = path.join(process.cwd(), 'data'),

function ensureDir(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

export function readJson<T>(relativePath: string, fallback: T): T {
  const full = path.join(dataRoot, relativePath),
  try {
    const raw = fs.readFileSync(full, 'utf-8'),
    return JSON.parse(raw) as T
  } catch (_) {
    return fallback
  }
}

export function writeJson<T>(relativePath: string, value: T): void {
  const full = path.join(dataRoot, relativePath),
  ensureDir(path.dirname(full)),
  fs.writeFileSync(full, JSON.stringify(value, null, 2), 'utf-8')
}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
