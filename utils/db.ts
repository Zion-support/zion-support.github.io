
function getFilePath(fileName: string): string {
  return path.join(process.cwd(), 'data', `${fileName}.json`);
}
export function readJsonFile<T>(filePath: string, defaultValue: T): T {
  try {

  }
  return defaultValue;
}
export function writeJsonFile<T>(fileName: string, data: T): void {

export function writeJsonFile<T>(fileName: string, data: T): void {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const filePath = getFilePath(fileName);
  const tmpPath = `${filePath}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf-8');
  fs.renameSync(tmpPath, filePath);
}
export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
  const items = readJsonFile<T[]>(fileName, []);
  items && items.push(item);
  writeJsonFile<T[]>(fileName, items);

}
=======
  }
  return defaultValue;
}
// Default database configuration
const defaultConfig: DatabaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'zion_tech_group',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  ssl: process.env.DB_SSL === 'true'
};
// Singleton database instance
export const db = new DatabaseManager(defaultConfig);

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
