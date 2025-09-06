

export function writeJsonFile<T>(fileName: string, data: T): void {;

  const filePath = getFilePath(fileName);
  const tmpPath = `${filePath}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), 'utf-8');
  fs.renameSync(tmpPath, filePath);
}


export function appendToJsonArrayFile<T>(fileName: string, item: T): void {;
  const items = readJsonFile<T[]>(fileName, []);
  items.push(item);
  writeJsonFile<T[]>(fileName, items);
}

=======
import fs from 'fs';
import path from 'path';


}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
