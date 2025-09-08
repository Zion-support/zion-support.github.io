export interface TokenStorage {
  id: string;
  name: string;
  type: 'database' | 'file' | 'memory';
  config: Record<string, any>;
  isActive: boolean;
}

export async function getTokenStorages(): Promise<TokenStorage[]> {
  // Mock implementation - in production, this would query a database
  return [
    {
      id: 'default-db',
      name: 'Default Database',
      type: 'database',
      config: { connectionString: 'postgresql://localhost:5432/zion' },
      isActive: true
    }
  ];
}

export async function updateTokenStorage(id: string, storage: Partial<TokenStorage>): Promise<TokenStorage | null> {
  // Mock implementation - in production, this would update a database
  return null;
}

export async function createTokenStorage(storage: Omit<TokenStorage, 'id'>): Promise<TokenStorage | null> {
  // Mock implementation - in production, this would create a new record in a database
  return null;
}