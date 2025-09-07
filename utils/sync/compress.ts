// Sync compression utilities
export const compressData = (data: any): string => {
  return JSON.stringify(data);
};

export const decompressData = (compressed: string): any => {
  try {
    return JSON.parse(compressed);
  } catch {
    return null;
  }
};