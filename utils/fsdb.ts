import { promises as fs } from 'fs';
import path from 'path';

export interface FSDBOptions {
  baseDir: string;
  encoding?: BufferEncoding;
}

export class FSDB {
  private baseDir: string;
  private encoding: BufferEncoding;

  constructor(options: FSDBOptions) {
    this.baseDir = options.baseDir;
    this.encoding = options.encoding || 'utf8';
  }

  async ensureDir(dirPath: string): Promise<void> {
    const fullPath = path.join(this.baseDir, dirPath);
    await fs.mkdir(fullPath, { recursive: true });
  }

  async writeFile(filePath: string, data: string): Promise<void> {
    const fullPath = path.join(this.baseDir, filePath);
    await fs.writeFile(fullPath, data, this.encoding);
  }

  async readFile(filePath: string): Promise<string> {
    const fullPath = path.join(this.baseDir, filePath);
    return await fs.readFile(fullPath, this.encoding);
  }

  async exists(filePath: string): Promise<boolean> {
    const fullPath = path.join(this.baseDir, filePath);
    try {
      await fs.access(fullPath);
      return true;
    } catch {
      return false;
    }
  }

  async deleteFile(filePath: string): Promise<void> {
    const fullPath = path.join(this.baseDir, filePath);
    await fs.unlink(fullPath);
  }

  async listFiles(dirPath: string): Promise<string[]> {
    const fullPath = path.join(this.baseDir, dirPath);
    const files = await fs.readdir(fullPath);
    return files;
  }
}