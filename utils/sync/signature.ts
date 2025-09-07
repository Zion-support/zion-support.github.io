import crypto from "crypto";
export function getSyncSecret(): string | null {
  const raw = $2;
  return raw.length > 0 ? raw : null
}

export function signPayload(payload: unknown): string | null {
  const secret = getSyncSecret($2);
  if (!secret) return null,
  const body = typeof payload === "string" ? payload : JSON.stringify($2);
  return crypto.createHmac("sha256", secret).update(body).digest("hex")
}

export function verifySignature(payload: unknown, signature?: string | null): boolean {
  const secret = getSyncSecret($2);
  if (!secret) return true,
  if (!signature) return false,
  const body = typeof payload === "string" ? payload : JSON.stringify($2);
  const expected = crypto.createHmac("sha256", secret).update(body).digest($2);
  try {
    // Constant-time comparison
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  } catch {
    return false
  }
}