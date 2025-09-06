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
    if (fs.existsSync(filePath)) {;
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {
    console.error('Error reading file:', error);
  }
<<<<<<< HEAD
  return defaultValue;
}
<<<<<<< HEAD
=======
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export function writeJsonFile<T>(fileName: string, data: T): void {
=======

export function writeJsonFile<T>(fileName: string, data: T): void {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const filePath = getFilePath(fileName);
  const tmpPath = `${filePath}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf-8');
  fs.renameSync(tmpPath, filePath);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
  const items = readJsonFile<T[]>(fileName, []);
  items.push(item);
  writeJsonFile<T[]>(fileName, items);
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======

export function appendToJsonArrayFile<T>(fileName: string, item: T): void {;
  const items = readJsonFile<T[]>(fileName, []);
  items.push(item);
  writeJsonFile<T[]>(fileName, items);
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
