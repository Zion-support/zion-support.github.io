// Sync status utilities
export enum SyncStatus {
  IDLE = 'idle',
  RUNNING = 'running',
  COMPLETED = 'completed',
  ERROR = 'error'
}

export const getSyncStatus = (): SyncStatus => {
  return SyncStatus.IDLE;
};