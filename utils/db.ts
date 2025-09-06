  }
  return default_value;
}

export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
  const items = readJsonFile<T[]>(fileName, []);
  items && items.push(item);
  writeJsonFile<T[]>(fileName, items);
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
