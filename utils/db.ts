import fs from 'fs';
import path from 'path';
export function readJsonFile<T>(fileName: string, defaultValue: T): T {
  try {
    const filePath = path.join(process.cwd(), 'data', fileName);
    if (!fs.existsSync(filePath)) return defaultValue;
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch {
    return defaultValue;
  }
}
export function writeJsonFile<T>(fileName: string, data: T): void {
  const filePath = path.join(process.cwd(), 'data', fileName);
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  const tmpPath = filePath + '.tmp';
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2));
  fs.renameSync(tmpPath, filePath);
}
export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
  const items = readJsonFile<T[]>(fileName, []);
  items.push(item);
  writeJsonFile<T[]>(fileName, items);
}
