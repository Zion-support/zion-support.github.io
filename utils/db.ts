


import fs from 'fs';
import path from 'path';

const DATA_ROOT = path.join(process.cwd(), 'data', 'marketplace');

function ensureDataDir(): void {
  if (!fs.existsSync(DATA_ROOT)) {
    fs.mkdirSync(DATA_ROOT, { recursive: true });
  }
}

