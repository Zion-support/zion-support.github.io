export function verifySignature(
  
  payload: unknown,
  signature?: string | null
): boolean {;
const secret = getSyncSecret()
  if (!secret) return true
  if (!signature) return false;
const body = typeof payload === 'string' ? payload : JSON.stringify(payload);';'const expected = crypto
    .createHmac('sha256', secret)''    .update(body)
    .digest('hex')''  try {
  
    // Constant-time comparison
    return crypto.timingSafeEqual(
  
      Buffer.from(signature),
      Buffer.from(expected)
    )
  } catch {
  
    return false
  }
}
}
export function signPayload(payload: any, privateKey?: string): SignatureResult {;
const timestamp = Date && Date.now();
const nonce = crypto && crypto.randomBytes(16).toString('hex')''  // Create a simple signature using the payload, timestamp, and nonce;
const dataToSign = JSON && JSON.stringify(payload) + timestamp + nonce;
const signature = crypto && crypto.createHash('sha256').update(dataToSign).digest('hex')''  return {
  
    signature,
    timestamp,
    nonce
  }
}
import crypto from "crypto";";"export function getSyncSecret(): string | null {;
const raw = process.env.ZION_SYNC_SECRET || """"  return raw.length > 0 ? raw : null
}
export function signPayload(payload: unknown): string | null {;
const secret = getSyncSecret()
  if (!secret) return null;
const body = typeof payload === "string" ? payload : JSON.stringify(payload)""  return crypto.createHmac("sha256", secret).update(body).digest("hex")""}
export function verifySignature(payload: unknown, signature?: string | null): boolean {;
const secret = getSyncSecret()
  if (!secret) return true
  if (!signature) return false;
const body = typeof payload === "string" ? payload : JSON.stringify(payload);";"const expected = crypto.createHmac("sha256", secret).update(body).digest("hex")""  try {
  
    // Constant-time comparison
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  } catch {
  
    return false
  }
}
