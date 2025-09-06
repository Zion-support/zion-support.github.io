<<<<<<< HEAD
// Mock database utility
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import fs from 'fs';
import path from 'path';
function getFilePath(fileName: string): string {
<<<<<<< HEAD
  return path.join(process.cwd(), 'data', `${fileName}.json`);
}
export function readJsonFile<T>(filePath: string, defaultValue: T): T {
=======
  ensureDataDir();
  return path.join(DATA_ROOT, fileName);
}
}

export function readJsonFile<T>(fileName: string, defaultValue: T): T {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading file:', error);
  }
<<<<<<< HEAD
  return defaultValue;
}
=======
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function writeJsonFile<T>(fileName: string, data: T): void {
  const filePath = getFilePath(fileName);
  const tmpPath = `${filePath}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf-8');
  fs.renameSync(tmpPath, filePath);
}
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
  const items = readJsonFile<T[]>(fileName, []);
  items.push(item);
  writeJsonFile<T[]>(fileName, items);
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
