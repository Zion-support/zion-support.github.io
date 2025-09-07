// Sync error utilities
export class SyncError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'SyncError';
  }
}

export const handleSyncError = (error: any): SyncError => {
  return new SyncError(error.message || 'Sync error occurred', error.code);
};