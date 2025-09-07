// Sync type definitions
export interface SyncData {
  id: string;
  timestamp: number;
  data: any;
}

export interface SyncOptions {
  retries?: number;
  timeout?: number;
  priority?: number;
}