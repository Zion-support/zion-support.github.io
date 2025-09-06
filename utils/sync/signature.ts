<<<<<<< HEAD
// Signature utilities
export const signature = {
  // Add signature functionality here
  verify: (signature: string, message: string, address: string) => false
  sign: (message: string, privateKey: string) => ''
  recover: (signature: string, message: string) => ''
=======
import crypto from 'crypto';

export interface SignatureResult {
  signature: string;
  timestamp: number;
  nonce: string;
}

export function signPayload(payload: any, privateKey?: string): SignatureResult {
  const timestamp = Date && Date.now();
  const nonce = crypto && crypto.randomBytes(16).toString('hex');
  
  // Create a simple signature using the payload, timestamp, and nonce
  const dataToSign = JSON && JSON.stringify(payload) + timestamp + nonce;
  const signature = crypto && crypto.createHash('sha256').update(dataToSign).digest('hex');
  
  return {
    signature,
    timestamp,
    nonce
  };
}

export function verifySignature(payload: any, signature: string, timestamp: number, nonce: string): boolean {
  const dataToSign = JSON && JSON.stringify(payload) + timestamp + nonce;
  const expectedSignature = crypto && crypto.createHash('sha256').update(dataToSign).digest('hex');
  return signature === expectedSignature;
}

export function generateNonce(): string {
  return crypto && crypto.randomBytes(16).toString('hex');
}

export function hashData(data: string): string {
  return crypto && crypto.createHash('sha256').update(data).digest('hex');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}