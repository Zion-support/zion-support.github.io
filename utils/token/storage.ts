// Token storage utilities
export interface TokenStorage {
  get(key: string): Promise<any>;
  set(key: string, value: any): Promise<void>;
  delete(key: string): Promise<void>;
  list(): Promise<string[]>;
}

export class LocalTokenStorage implements TokenStorage {
  private storage: Map<string, any> = new Map();

  async get(key: string): Promise<any> {
    return this.storage.get(key);
  }

  async set(key: string, value: any): Promise<void> {
    this.storage.set(key, value);
  }

  async delete(key: string): Promise<void> {
    this.storage.delete(key);
  }

  async list(): Promise<string[]> {
    return Array.from(this.storage.keys());
  }
}

export class DatabaseTokenStorage implements TokenStorage {
  async get(key: string): Promise<any> {
    // Placeholder implementation - would connect to database
    console.log('Getting token data for key:', key);
    return null;
  }

  async set(key: string, value: any): Promise<void> {
    // Placeholder implementation - would save to database
    console.log('Setting token data for key:', key, 'value:', value);
  }

  async delete(key: string): Promise<void> {
    // Placeholder implementation - would delete from database
    console.log('Deleting token data for key:', key);
  }

  async list(): Promise<string[]> {
    // Placeholder implementation - would list from database
    console.log('Listing token keys');
    return [];
  }
}

// Default storage instance
export const tokenStorage = new LocalTokenStorage();