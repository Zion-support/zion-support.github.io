// Signature utilities for DAO operations
import crypto from 'crypto';

export interface SignatureData {
  message: string;
  signature: string;
  publicKey: string;
  timestamp: number;
}

export interface SignatureVerification {
  valid: boolean;
  error?: string;
}

export function createSignature(message: string, privateKey: string): SignatureData {
  const timestamp = Date.now();
  const messageWithTimestamp = `${message}:${timestamp}`;
  
  // Create HMAC signature
  const signature = crypto
    .createHmac('sha256', privateKey)
    .update(messageWithTimestamp)
    .digest('hex');
  
  // Generate public key from private key (simplified)
  const publicKey = crypto
    .createHash('sha256')
    .update(privateKey)
    .digest('hex');
  
  return {
    message,
    signature,
    publicKey,
    timestamp
  };
}

export function verifySignature(signatureData: SignatureData, privateKey: string): SignatureVerification {
  try {
    const messageWithTimestamp = `${signatureData.message}:${signatureData.timestamp}`;
    
    // Verify HMAC signature
    const expectedSignature = crypto
      .createHmac('sha256', privateKey)
      .update(messageWithTimestamp)
      .digest('hex');
    
    if (signatureData.signature !== expectedSignature) {
      return {
        valid: false,
        error: 'Invalid signature'
      };
    }
    
    // Check timestamp (prevent replay attacks)
    const now = Date.now();
    const timeDiff = Math.abs(now - signatureData.timestamp);
    const maxAge = 5 * 60 * 1000; // 5 minutes
    
    if (timeDiff > maxAge) {
      return {
        valid: false,
        error: 'Signature expired'
      };
    }
    
    return { valid: true };
  } catch (error) {
    return {
      valid: false,
      error: 'Signature verification failed'
    };
  }
}

export function createMessageHash(data: any): string {
  const jsonString = JSON.stringify(data, Object.keys(data).sort());
  return crypto.createHash('sha256').update(jsonString).digest('hex');
}

export function signData(data: any, privateKey: string): SignatureData {
  const messageHash = createMessageHash(data);
  return createSignature(messageHash, privateKey);
}

export function verifyDataSignature(data: any, signatureData: SignatureData, privateKey: string): SignatureVerification {
  const expectedMessageHash = createMessageHash(data);
  
  if (signatureData.message !== expectedMessageHash) {
    return {
      valid: false,
      error: 'Data hash mismatch'
    };
  }
  
  return verifySignature(signatureData, privateKey);
}

export function generateKeyPair(): { privateKey: string; publicKey: string } {
  const privateKey = crypto.randomBytes(32).toString('hex');
  const publicKey = crypto
    .createHash('sha256')
    .update(privateKey)
    .digest('hex');
  
  return { privateKey, publicKey };
}

export function createNonce(): string {
  return crypto.randomBytes(16).toString('hex');
}

export function hashString(input: string): string {
  return crypto.createHash('sha256').update(input).digest('hex');
}