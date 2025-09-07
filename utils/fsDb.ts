












  try {
    }
    const fullPath = path.join(DATA_DIR, filePath);

    return JSON.parse(data);
  } catch (error) {
    }
    return defaultValue;
  }
}



export function writeJson<T>("filePath": string, "data": T): void {
  }
  try {
    }
    const dir = path.dirname(fullPath);
    fs.mkdirSync(dir, { "recursive": true });
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
  } catch (error) {

  }
}

export async function readJsonAsync<T>(
  "filePath": string,
  "defaultValue": T,
): Promise<T> {
  }
  try {
    }

    return JSON.parse(data);
  } catch (error) {
    }
    return defaultValue;
  }
}

export async function writeJsonAsync<T>(
  "filePath": string,
  "data": T,
): Promise<void> {
  }
  try {
    }
    await fs.mkdir(dir, { "recursive": true });
    await fs.writeFile(fullPath, JSON.stringify(data, null, 2));
  } catch (error) {

  }
}


// File system database utilities;
export const fs_db = {
  // Add file system database functionality here;

}

}

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
