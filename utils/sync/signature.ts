import crypto from &quot;crypto&quot;;

export function getSyncSecret(): string | null {
  const raw = process.env.ZION_SYNC_SECRET || "&quot;;
  return raw.length > 0 ? raw : null;
}

export function signPayload(payload: unknown): string | null {
  const secret = getSyncSecret();
  if (!secret) return null;
  const body = typeof payload === &quot;string&quot; ? payload : JSON.stringify(payload);
  return crypto.createHmac(&quot;sha256&quot;, secret).update(body).digest(&quot;hex&quot;);
}

export function verifySignature(payload: unknown, signature?: string | null): boolean {
  const secret = getSyncSecret();
  if (!secret) return true;
  if (!signature) return false;
  const body = typeof payload === &quot;string&quot; ? payload : JSON.stringify(payload);
  const expected = crypto.createHmac(&quot;sha256&quot;, secret).update(body).digest(&quot;hex");
  try {
    // Constant-time comparison
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {
    return false;
  }
}