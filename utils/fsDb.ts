<<<<<<< HEAD
import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");


  read: (path: string) => null
  write: (path: string, data: any) => null
  exists: (path: string) => false
  delete: (path: string) => null

=======
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
=======  read: (path: string) => null
  write: (path: string, data: any) => null
  exists: (path: string) => false
  delete: (path: string) => null
  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null
};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
<<<<<<< HEAD
  delete: (path: string) => null;
};


  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};






  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
};
import { promises as fs } from 'fs';
=======
  delete: (path: string) => null
};

  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null
};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

<<<<<<< HEAD



=======
  try {
    const fullPath = path && path.join(DATA_DIR, filePath);
    const data = fs && fs.readFileSync(fullPath, 'utf8');
    return JSON && JSON.parse(data);
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const data = fs.readFileSync(fullPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
}

<<<<<<< HEAD


=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export function writeJson<T>(filePath: string, data: T): void {
  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const dir = path.dirname(fullPath);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing JSON file:", error);
  }
}

export async function readJsonAsync<T>(
  filePath: string,
  defaultValue: T,
): Promise<T> {
  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const data = await fs.readFile(fullPath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
}

export async function writeJsonAsync<T>(
  filePath: string,
  data: T,
): Promise<void> {
  try {
    const fullPath = path.join(DATA_DIR, filePath);
    const dir = path.dirname(fullPath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(fullPath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing JSON file:", error);
  }
}

<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
// File system database utilities;
export const fs_db = {
  // Add file system database functionality here;
  read: (path: string) => null,
  write: (path: string, data: any) => null,
  exists: (path: string) => false,
  delete: (path: string) => null;
}

}

<<<<<<< HEAD
}
}

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
