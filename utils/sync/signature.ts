import crypto from 'crypto';

export interface SignatureResult {
  signature: string;
  timestamp: number;
  nonce: string;
}

export function signPayload(payload: any, privateKey?: string): SignatureResult {
  const timestamp = Date.now();
  const nonce = crypto.randomBytes(16).toString('hex');
  
  // Create a simple signature using the payload, timestamp, and nonce
  const dataToSign = JSON.stringify(payload) + timestamp + nonce;
  const signature = crypto.createHash('sha256').update(dataToSign).digest('hex');
  
  return {
    signature,
    timestamp,
    nonce
  };
}

export function verifySignature(payload: any, signature: string, timestamp: number, nonce: string): boolean {
  const dataToSign = JSON.stringify(payload) + timestamp + nonce;
  const expectedSignature = crypto.createHash('sha256').update(dataToSign).digest('hex');
  return signature === expectedSignature;
}

export function generateNonce(): string {
  return crypto.randomBytes(16).toString('hex');
}

export function hashData(data: string): string {
  return crypto.createHash('sha256').update(data).digest('hex');
}