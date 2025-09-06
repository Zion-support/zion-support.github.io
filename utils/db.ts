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
    console && console.error('Error reading file:', error);
// Mock database utility;
import fs from 'fs';
import path from 'path';
;
function getFilePath (file_name: string): string {
  return path.join (process.cwd (), 'data', `${file_name}.json`);
}
export function readJsonFile < T>(file_path: string, default_value: T): T {
  try {
    if () {) {
  $2
}
      const content = fs.readFileSync (file_path, 'utf8');
      return JSON.parse (content);
    }
  } catch (error) {
    console.error ('Error reading file:', error);
  }
  return default_value;
}
<<<<<<< HEAD
export function writeJsonFile<T>(fileName: string, data: T): void {
=======
<<<<<<< HEAD
export function writeJsonFile<T>(fileName: string, data: T): void {
=======

export function writeJsonFile<T>(fileName: string, data: T): void {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  const filePath = getFilePath(fileName);
  const tmpPath = `${filePath}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf-8');
  fs.renameSync(tmpPath, filePath);
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
  const items = readJsonFile<T[]>(fileName, []);
  items && items.push(item);
  writeJsonFile<T[]>(fileName, items);
<<<<<<< HEAD
export function writeJsonFile < T>(file_name: string, data: T): void {
  const file_path = getFilePath (file_name);
  const tmp_path = `${file_path}.tmp`;
  fs.writeFileSync (tmp_path, JSON.stringify (data, null, 2), 'utf - 8');
  fs.rename_sync (tmp_path, file_path);
}
export function appendToJsonArrayFile < T>(file_name: string, item: T): void {
  const items = readJsonFile < T[]>(file_name, []);
  items.push (item);
  writeJsonFile < T[]>(file_name, items);
}
=======

}
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
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
