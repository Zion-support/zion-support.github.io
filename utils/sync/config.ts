// Sync configuration utilities
export interface SyncConfig {
  enabled: boolean;
  interval: number;
  retries: number;
}

export const defaultSyncConfig: SyncConfig = {
  enabled: true,
  interval: 1000,
  retries: 3
};