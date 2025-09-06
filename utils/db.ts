// Mock database utility
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

function getFilePath(fileName: string): string {
  return path.join(process.cwd(), 'data', fileName);
}

=======
function getFilePath(fileName: string): string {
  return path.join(process.cwd(), 'data', `${fileName}.json`);
}
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export function readJsonFile<T>(filePath: string, defaultValue: T): T {
  try {
<<<<<<< HEAD
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
=======
    const fs = require('fs'),
    if (fs && fs.existsSync(filePath)) {
      const content = fs && fs.readFileSync(filePath, 'utf8');
      return JSON && JSON.parse(content);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }
  } catch (error) {
    console && console.error('Error reading file:', error);
  }
  return defaultValue;
}
export function writeJsonFile<T>(fileName: string, data: T): void {
  const filePath = getFilePath(fileName);
  const tmpPath = `${filePath}.tmp`;
<<<<<<< HEAD
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf-8');
  fs.renameSync(tmpPath, filePath);
}
<<<<<<< HEAD
=======
  fs && fs.writeFileSync(tmpPath, JSON && JSON.stringify(data, null, 2), 'utf-8');
  fs && fs.renameSync(tmpPath, filePath);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
  const items = readJsonFile<T[]>(fileName, []);
  items && items.push(item);
  writeJsonFile<T[]>(fileName, items);
}