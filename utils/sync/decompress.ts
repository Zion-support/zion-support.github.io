// Sync decompression utilities
export const decompressSyncData = (compressed: string): any => {
  try {
    return JSON.parse(compressed);
  } catch {
    return null;
  }
};

export const validateDecompressedData = (data: any): boolean => {
  return data && typeof data === 'object';
};