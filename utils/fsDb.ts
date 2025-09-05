<<<<<<< HEAD
import fs from 'fs',;
import path from 'path',;
;
const dataRoot = path.join(process.cwd(), 'data'),;
;
function ensureDir(dirPath:string) {;
  if (!fs.existsSync(dirPath)) {;
    fs.mkdirSync(dirPath, { recursive:true }),;
  }
}
;
export function readJson<T>(relativePath:string, fallback:T):T {;
  const full = path.join(dataRoot, relativePath),;
  try {;
    const raw = fs.readFileSync(full, 'utf-8'),;
    return JSON.parse(raw) as T,;
  } catch (_) {;
    return fallback,;
  }
}
;
export function writeJson<T>(relativePath:string, value:T):void {;
  const full = path.join(dataRoot, relativePath),;
  ensureDir(path.dirname(full)),;
  fs.writeFileSync(full, JSON.stringify(value, null, 2), 'utf-8'),;
=======
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}