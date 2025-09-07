// Sync verification utilities
export const verifySync = (data: any): boolean => {
  return data && typeof data === 'object';
};

export const validateSyncData = (data: any): boolean => {
  return verifySync(data);
};