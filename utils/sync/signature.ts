





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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

