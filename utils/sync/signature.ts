

}
=======export function getSyncSecret(): string | null {
  const raw = process.env.ZION_SYNC_SECRET || '';
  return raw.length > 0 ? raw : null;
}
// Signature utilities;
export const signature = {
  // Add signature functionality here;
  verify: (signature: string, message: string, address: string) => false,
  sign: (message: string, privateKey: string) => '',
  recover: (signature: string, message: string) => '';

export function signPayload(
  payload: any,
  privateKey?: string,
): SignatureResult {
  const timestamp = Date.now();
  const nonce = crypto.randomBytes(16).toString("hex");

  // Create a simple signature using the payload, timestamp, and nonce
  const dataToSign = JSON.stringify(payload) + timestamp + nonce;
  const signature = crypto
    .createHash("sha256")
    .update(dataToSign)
    .digest("hex");

  return {
    signature,
    timestamp,
    nonce,
  };
}

export function verifySignature(
  payload: any,
  signature: string,
  timestamp: number,
  nonce: string,
): boolean {
  const dataToSign = JSON.stringify(payload) + timestamp + nonce;
  const expectedSignature = crypto
    .createHash("sha256")
    .update(dataToSign)
    .digest("hex");
  return signature === expectedSignature;
}

export function generateNonce(): string {
  return crypto.randomBytes(16).toString("hex");  verify: (signature: string, message: string, address: string) => false,
  sign: (message: string, private_key: string) => '',
  recover: (signature: string, message: string) => '';
}

export function hashData(data: string): string {
  return crypto.createHash("sha256").update(data).digest("hex");
}