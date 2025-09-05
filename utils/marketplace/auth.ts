<<<<<<< HEAD
import { NextApiRequest } from "next",
type DemoUser = { id: string, role: "client" | "talent", talentSlug?: string },

export function getDemoUser(req: NextApiRequest): DemoUser {
  // Prefer headers for server-side calls, fallback to cookies-like header or defaults
  const role = (req.headers["x-demo-user-role"] as string) || "client",
  const id = (req.headers["x-demo-user-id"] as string) || (role === "client" ? "client-1" : "talent-1"),
  const talentSlug = (req.headers["x-demo-talent-slug"] as string) || undefined,
  return { id, role: role === "talent" ? "talent" : "client", talentSlug }
}

export function assertClient(req: NextApiRequest): DemoUser {
  const u = getDemoUser(req),
  if (u.role !== "client") {
    const err = new Error("Client role required"),
    // @ts-ignore add code
    err.statusCode = 403,
    throw err
  }
  return u
}

export function assertTalentOrClientForOffer(req: NextApiRequest, offer: { clientId: string, talentSlug: string }, talentSlugHeader?: string): DemoUser {
  const u = getDemoUser(req),
  if (u.role === "client" && u.id === offer.clientId) return u,
  if (u.role === "talent" && (u.talentSlug || talentSlugHeader) === offer.talentSlug) return u,
  const err = new Error("Not authorized for this offer"),
  // @ts-ignore
  err.statusCode = 403,
  throw err
}
=======

type DemoUser = {_id: string; role: "client" | "talent"; talentSlug?: string};

export function getDemoUser(_req: NextApiRequest): DemoUser {_// Prefer headers for server-side calls; fallback to cookies-like header or defaults
  const _role = (req.headers["x-demo-user-role"] as string) || "client";
  const _id = (req.headers["x-demo-user-id"] as string) || (role === "client" ? "client-1" : "talent-1");
  const _talentSlug = (req.headers["x-demo-talent-slug"] as string) || undefined;
  return { id, _role: role === "talent" ? "talent" : "client", _talentSlug};
}

export function assertClient(_req: NextApiRequest): DemoUser {_const _u = getDemoUser(req);
  if (u.role !== "client") {
    const _err = new Error("Client role required");
    // @ts-ignore add code
    err.statusCode = 403;
    throw err;}
  return u;
}

export function assertTalentOrClientForOffer(_req: NextApiRequest, _offer: {_clientId: string; talentSlug: string}, _talentSlugHeader?: string): DemoUser {_const _u = getDemoUser(req);
  if (u.role === "client" && u.id === offer.clientId) return u;
  if (u.role === "talent" && (u.talentSlug || talentSlugHeader) === offer.talentSlug) return u;
  const _err = new Error("Not authorized for this offer");
  // @ts-ignore
  err.statusCode = 403;
  throw err;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
