  }
  return default_value;
}

export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
</T>
  const items = readJsonFile<T[]>(fileName, []);
</T>
  writeJsonFile<T[]>(fileName, items);
</T>
export interface QueryResult<T = any> {
</T>
  async connect(): Promise<void> {
</void>
  async disconnect(): Promise<void> {
</void>
  async query<T = any>(sql: string, params?: any[]): Promise<QueryResult<T>> {
</T>
  async transaction<T>(callback: (db: DatabaseManager) => Promise<T>): Promise<T> {
</T>
export function writeJsonFile < T>(file_name: string, data: T): void {
  // TODO: Implement
}
  const file_path = getFilePath (file_name);
  const tmp_path = `${file_path}.tmp`;
  fs.writeFileSync (tmp_path, JSON.stringify (data, null, 2), 'utf - 8');'
  fs.rename_sync (tmp_path, file_path);
}
export function appendToJsonArrayFile < T>(file_name: string, item: T): void {
  // TODO: Implement
}
  const items = readJsonFile < T[]>(file_name, []);
  items.push (item);
  writeJsonFile < T[]>(file_name, items);
}


export function appendToJsonArrayFile<T>(fileName: string, item: T): void {;
</T>
  const items = readJsonFile<T[]>(fileName, []);
</T>
  writeJsonFile<T[]>(fileName, items);
</T>'