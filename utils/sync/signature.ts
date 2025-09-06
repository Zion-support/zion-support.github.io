// Signature utilities
export const signature = {
  // Add signature functionality here
  verify: (signature: string, message: string, address: string) => false
  sign: (message: string, privateKey: string) => ''
  recover: (signature: string, message: string) => ''
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
}
}
export function getSyncSecret(): string | null {
  const raw = process.env.ZION_SYNC_SECRET || '';
  return raw.length > 0 ? raw : null;
}

export function signPayload(payload: unknown): string | null {
  const secret = getSyncSecret();
  if (!secret) return null;
  const body = typeof payload === 'string' ? payload : JSON.stringify(payload);
  return crypto.createHmac('sha256', secret).update(body).digest('hex');
}

export function verifySignature(
  payload: unknown,
  signature?: string | null
): boolean {
  const secret = getSyncSecret();
  if (!secret) return true;
  if (!signature) return false;
  const body = typeof payload === 'string' ? payload : JSON.stringify(payload);
  const expected = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');
  try {
    // Constant-time comparison
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expected)
    );
  } catch {
    return false;
  }
}
// Signature utilities;
export const signature = {
  // Add signature functionality here
<<<<<<< HEAD
  verify: (signature: string, message: string, address: string) => false
  sign: (message: string, privateKey: string) => ''
  recover: (signature: string, message: string) => ''
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
  verify: (signature: string, message: string, address: string) => false,
  sign: (message: string, private_key: string) => '',
  recover: (signature: string, message: string) => '';
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
