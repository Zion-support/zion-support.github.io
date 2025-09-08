import crypto from "crypto";


}
=======
export function getSyncSecret(): string | null {
  const raw = $2;
  return raw.length > 0 ? raw : null
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
  return crypto.randomBytes(16).toString("hex");
}

export function hashData(data: string): string {
  return crypto.createHash("sha256").update(data).digest("hex");
}
