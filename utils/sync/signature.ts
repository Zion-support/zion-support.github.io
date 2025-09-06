<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import crypto from "crypto";


}
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
  verify: (signature: string, message: string, address: string) => false,
  sign: (message: string, private_key: string) => '',
  recover: (signature: string, message: string) => '';
}

export function hashData(data: string): string {
  return crypto.createHash("sha256").update(data).digest("hex");
}
};

}
<<<<<<< HEAD
=======
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
