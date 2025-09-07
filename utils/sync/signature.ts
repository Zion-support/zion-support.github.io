<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
import crypto from "crypto";

;
ursor/automate-test-improve-and-merge-code-646c;
import crypto from 'crypto';
}ursor/automate-test-improve-and-merge-code-646c;
export function getSyncSecret(): string | null {}
export function getSyncSecret(): string | null {const raw = process.env.ZION_SYNC_SECRET || '';

}
export function getSyncSecret(): string | null {
<<<<<<< HEAD
=======


}
=======export function getSyncSecret(): string | null {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  const raw = process.env.ZION_SYNC_SECRET || '';
  return raw.length > 0 ? raw : null;
}
// Signature utilities;
export const signature = {// Add signature functionality here;
  verify: (signature: string, message: string, address: string) => false,sign: (message: string, privateKey: string) => '',recover: (signature: string, message: string) => '';export function signPayload(payload: any,privateKey?: string,): SignatureResult {const timestamp = Date.now()const nonce  = crypto.randomBytes(16).toString("hex")// Create a simple signature using the payload, timestamp, and nonce;
  const dataToSign = JSON.stringify(payload) + timestamp + nonce;
  const signature = crypto;
    .createHash("sha256").update(dataToSign).digest("hex")return {signature,timestamp,nonce;
    nonce;
    nonce;
  }}export function verifySignature(payload: any,signature: string,timestamp: number,nonce: string,): boolean {const dataToSign = JSON.stringify(payload) + timestamp + nonce;
  const expectedSignature = crypto;
    .createHash("sha256").update(dataToSign).digest("hex")return signature === expectedSignature;
}export function generateNonce(): string {return crypto.randomBytes(16).toString("hex")export function generateNonce(): string {return crypto.randomBytes(16).toString("hex")// Signature utilities;
export const signature = {// Add signature functionality here;}verify: (signature: string, message: string, address: string) => false,sign: (message: string, private_key: string) => '',recover: (signature: string, message: string) => '';verify: (signature: string, message: string, address: string) => false,export function generateNonce(): string {return crypto.randomBytes(16).toString("hex")verify: (signature: string, message: string, address: string) => false,sign: (message: string, private_key: string) => '',recover: (signature: string, message: string) => '';
}export function hashData(data: string): string {return crypto.createHash("sha256").update(data).digest("hex")}}}}
}
  const signature = crypto
    .createHash("sha256")
    .update(dataToSign)
    .digest("hex");

  return {
    signature,
    timestamp,
    nonce
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  return crypto.randomBytes(16).toString("hex");

export function generateNonce(): string {
  return crypto.randomBytes(16).toString("hex");
  verify: (signature: string, message: string, address: string) => false,
<<<<<<< HEAD
=======
  return crypto.randomBytes(16).toString("hex");  verify: (signature: string, message: string, address: string) => false,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  sign: (message: string, private_key: string) => '',
  recover: (signature: string, message: string) => '';
}

export function hashData(data: string): string {
  return crypto.createHash("sha256").update(data).digest("hex");
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}
};

}
<<<<<<< HEAD
=======
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
