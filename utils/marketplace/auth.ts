import { NextApiRequest } from &quot;next&quot;;

type DemoUser = { id: string; role: &quot;client&quot; | &quot;talent&quot;; talentSlug?: string };

export function getDemoUser(req: NextApiRequest): DemoUser {
  // Prefer headers for server-side calls; fallback to cookies-like header or defaults
  const role = (req.headers[&quot;x-demo-user-role&quot;] as string) || &quot;client&quot;;
  const id = (req.headers[&quot;x-demo-user-id&quot;] as string) || (role === &quot;client&quot; ? &quot;client-1&quot; : &quot;talent-1&quot;);
  const talentSlug = (req.headers[&quot;x-demo-talent-slug&quot;] as string) || undefined;
  return { id, role: role === &quot;talent&quot; ? &quot;talent&quot; : &quot;client&quot;, talentSlug };
}

export function assertClient(req: NextApiRequest): DemoUser {
  const u = getDemoUser(req);
  if (u.role !== &quot;client&quot;) {
    const err = new Error(&quot;Client role required&quot;);
    // @ts-ignore add code
    err.statusCode = 403;
    throw err;
  }
  return u;
}

export function assertTalentOrClientForOffer(req: NextApiRequest, offer: { clientId: string; talentSlug: string }, talentSlugHeader?: string): DemoUser {
  const u = getDemoUser(req);
  if (u.role === &quot;client&quot; && u.id === offer.clientId) return u;
  if (u.role === &quot;talent&quot; && (u.talentSlug || talentSlugHeader) === offer.talentSlug) return u;
  const err = new Error(&quot;Not authorized for this offer&quot;);
  // @ts-ignore
  err.statusCode = 403;
  throw err;
}