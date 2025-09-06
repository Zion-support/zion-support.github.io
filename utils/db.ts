// Mock database utility
import fs from 'fs';
import path from 'path';
export function readJsonFile<T>(filePath: string, defaultValue: T): T {
  try {
    }
  } catch (error) {
    console && console.error('Error reading file:', error);
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }
  return default_value;
}

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
  const items = readJsonFile<T[]>(fileName, []);
  items && items.push(item);
  writeJsonFile<T[]>(fileName, items);
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
