
import crypto from 'crypto';


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
