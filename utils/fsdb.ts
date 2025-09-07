// File system database utilities
import fs from 'fs';
import path from 'path';

export interface FSDbConfig {
  dataDir: string;
  backupDir?: string;
  maxFileSize: number;
}

export class FSDatabase {
  private config: FSDbConfig;

  constructor(config: FSDbConfig) {
    this.config = config;
    this.ensureDirectoryExists(config.dataDir);
    if (config.backupDir) {
      this.ensureDirectoryExists(config.backupDir);
    }
  }

  private ensureDirectoryExists(dir: string): void {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  async read<T>(key: string): Promise<T | null> {
    try {
      const filePath = path.join(this.config.dataDir, `${key}.json`);
      if (!fs.existsSync(filePath)) {
        return null;
      }

      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Failed to read ${key}:`, error);
      return null;
    }
  }

  async write<T>(key: string, data: T): Promise<boolean> {
    try {
      const filePath = path.join(this.config.dataDir, `${key}.json`);
      const jsonData = JSON.stringify(data, null, 2);
      
      if (jsonData.length > this.config.maxFileSize) {
        throw new Error(`Data too large for ${key}`);
      }

      fs.writeFileSync(filePath, jsonData);
      return true;
    } catch (error) {
      console.error(`Failed to write ${key}:`, error);
      return false;
    }
  }

  async delete(key: string): Promise<boolean> {
    try {
      const filePath = path.join(this.config.dataDir, `${key}.json`);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      return true;
    } catch (error) {
      console.error(`Failed to delete ${key}:`, error);
      return false;
    }
  }

  async list(): Promise<string[]> {
    try {
      const files = fs.readdirSync(this.config.dataDir);
      return files
        .filter(file => file.endsWith('.json'))
        .map(file => file.replace('.json', ''));
    } catch (error) {
      console.error('Failed to list files:', error);
      return [];
    }
  }

  async backup(key: string): Promise<boolean> {
    if (!this.config.backupDir) {
      return false;
    }

    try {
      const sourcePath = path.join(this.config.dataDir, `${key}.json`);
      const backupPath = path.join(this.config.backupDir, `${key}-${Date.now()}.json`);
      
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, backupPath);
        return true;
      }
      return false;
    } catch (error) {
      console.error(`Failed to backup ${key}:`, error);
      return false;
    }
  }
}