
import crypto from 'crypto';


=======
// Merkle tree utilities;
export const merkle = {
  // Add merkle tree functionality here;
  create_tree: (leaves: string[]) => null,
  get_proof: (tree: any, leaf: string) => [],
  verify_proof: (proof: any[], leaf: string, root: string) => false;
}

export function verifyHmacSignature(rootHex: string, signatureHex?: string): boolean {
  if (!signatureHex) return !process.env.ZION_SYNC_REQUIRE_SIG; // allow if not required
  const expected = signRootWithHmac(rootHex);
  if (!expected) return !process.env.ZION_SYNC_REQUIRE_SIG; // allow if no secret configured
  return crypto.timingSafeEqual(Buffer.from(expected, "hex"), Buffer.from(signatureHex, "hex"));
}