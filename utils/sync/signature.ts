// Sync signature utilities
export const createSignature = (data: any): string => {
  return 'signature_' + JSON.stringify(data).length;
};

export const verifySignature = (data: any, signature: string): boolean => {
  return createSignature(data) === signature;
};