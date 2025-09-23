






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

