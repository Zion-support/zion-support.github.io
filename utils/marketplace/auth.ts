import { NextApiRequest } from "next";
type DemoUser = { id: string, role: "client" | "talent", talentSlug?: string },

export function getDemoUser(req: NextApiRequest): DemoUser {
  // Prefer headers for server-side calls, fallback to cookies-like header or defaults
  const role = $2;
  const id = $2;
  const talentSlug = $2;
  return { id, role: role === "talent" ? "talent" : "client", talentSlug }
}

export function assertClient(req: NextApiRequest): DemoUser {
  const u = getDemoUser($2);
  if (u.role !== "client") {
    const err = new Error($2);
    // @ts-ignore add code
    err.statusCode = $2;
    throw err
  }
  return u
}

export function assertTalentOrClientForOffer(req: NextApiRequest, offer: { clientId: string, talentSlug: string}, talentSlugHeader?: string): DemoUser {
  const u = getDemoUser($2);
  if (u.role = $2;
  if (u.role = $2;
  const err = new Error($2);
  // @ts-ignore
  err.statusCode = $2;
  throw err
}