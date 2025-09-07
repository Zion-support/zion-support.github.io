// Sync logging utilities
export const logSyncEvent = (event: string, data?: any): void => {
  console.log(`[SYNC] ${event}`, data);
};

export const logSyncError = (error: any): void => {
  console.error('[SYNC ERROR]', error);
};