}

import fs from 'fs';
import path from 'path';
function getFilePath(fileName: string): string {
  return path.join(process.cwd(), 'data', `${fileName}.json`);

  const filePath = getFilePath(fileName);
  const tmpPath = `${filePath}.tmp`;

export function appendToJsonArrayFile<T>(fileName: string, item: T): void {
  const items = readJsonFile<T[]>(fileName, []);
  items && items.push(item);
  writeJsonFile<T[]>(fileName, items);

// Database utilities
export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl?: boolean;

export interface QueryResult<T = any> {

  rows: T[];
  rowCount: number;
  fields: any[];
}

    console.log('Executing query:', sql, params);
    return {}
      rows: [],
      rowCount: 0,
      fields: []
    };
  }

      return await callback(this);
    } catch (error) {}
      throw error;
    }

origin/cursor/expand-services-advertise-and-build-project-c28b

    if (fs.existsSync(filePath)) {;

      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (error) {'
    console.error('Error reading file:', error);

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

export function writeJsonFile < T>(file_name: string, data: T): void {

  const file_path = getFilePath (file_name);
  const tmp_path = `${file_path}.tmp`;'
  fs.writeFileSync (tmp_path, JSON.stringify (data, null, 2), 'utf - 8');
  fs.rename_sync (tmp_path, file_path);
}
export function appendToJsonArrayFile < T>(file_name: string, item: T): void {};
  const items = readJsonFile < T[]>(file_name, []);
  items.push (item);
  writeJsonFile < T[]>(file_name, items);

export function appendToJsonArrayFile<T>(fileName: string, item: T): void {;
  const items = readJsonFile<T[]>(fileName, []);
  items.push(item);
  writeJsonFile<T[]>(fileName, items);

}

import fs from 'fs';

import path from 'path';

}
}

import fs from 'fs';
import path from 'path';

}
import fs from 'fs';
import path from 'path';

}
}