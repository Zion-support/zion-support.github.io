// Sync validation utilities
export const validateSyncRequest = (data: any): boolean => {
  return data && typeof data === 'object';
};

export const validateSyncResponse = (data: any): boolean => {
  return data && typeof data === 'object';
};