// Sync decryption utilities
export const decryptSyncData = (encrypted: string): any => {
  try {
    return JSON.parse(atob(encrypted));
  } catch {
    return null;
  }
};

export const validateDecryptedData = (data: any): boolean => {
  return data && typeof data === 'object';
};