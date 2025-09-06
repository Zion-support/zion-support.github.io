<<<<<<< HEAD
<<<<<<< HEAD
import crypto from "crypto";
export function getSyncSecret(): string | null {;
  const raw = process.env.ZION_SYNC_SECRET || "";
  return raw.length > 0 ? raw : null;
}
;
export function signPayload(payload: unknown): string | null {;
=======
<<<<<<< HEAD
=======
import crypto from "crypto";


}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
export function getSyncSecret(): string | null {
  const raw = process.env.ZION_SYNC_SECRET || '';
  return raw.length > 0 ? raw : null;
}
// Signature utilities;
export const signature = {
  // Add signature functionality here;
  verify: (signature: string, message: string, address: string) => false,
  sign: (message: string, privateKey: string) => '',
  recover: (signature: string, message: string) => '';

<<<<<<< HEAD
export function signPayload(payload: unknown): string | null {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const secret = getSyncSecret();
  if (!secret) return null;
  const body = typeof payload === "string" ? payload : JSON.stringify(payload);
  return crypto.createHmac("sha256", secret).update(body).digest("hex");
}
;
export function verifySignature(payload: unknown, signature?: string | null): boolean {;
  const secret = getSyncSecret();
  if (!secret) return true;
  if (!signature) return false;
  const body = typeof payload === "string" ? payload : JSON.stringify(payload);
  const expected = crypto.createHmac("sha256", secret).update(body).digest("hex");
  try {;
    // Constant-time comparison;
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {;
    return false;
  }
<<<<<<< HEAD
}
=======
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
}

export function generateNonce(): string {
  return crypto.randomBytes(16).toString("hex");
}

export function hashData(data: string): string {
  return crypto.createHash("sha256").update(data).digest("hex");
}
=======
};
=======

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
