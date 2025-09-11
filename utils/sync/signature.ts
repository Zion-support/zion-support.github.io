<<<<<<< HEAD
<<<<<<< HEAD
// Signature utilities
export const signature = {
  // Add signature functionality here
  verify: (signature: string, message: string, address: string) => false
  sign: (message: string, privateKey: string) => ''
  recover: (signature: string, message: string) => ''

=======

import crypto from 'crypto';


}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
// Signature utilities;
export const signature = {
  // Add signature functionality here;
}
=======

import crypto from 'crypto';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

}
  verify: (signature: string, message: string, address: string) => false,
  sign: (message: string, privateKey: string) => '',
  recover: (signature: string, message: string) => '';
}
};

}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
// Signature utilities;
export const signature = {
  // Add signature functionality here;
  verify: (signature: string, message: string, address: string) => false,
  sign: (message: string, privateKey: string) => '',
  recover: (signature: string, message: string) => '';

}
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
