// Sync helper utilities
export const generateSyncId = (): string => {
  return 'sync_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
};

export const formatSyncData = (data: any): string => {
  return JSON.stringify(data, null, 2);
};