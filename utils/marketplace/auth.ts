
  req: NextApiRequest,;
  offer: { clientId: string; talentSlug: string },

  talentSlugHeader?: string
): DemoUser {
  const u = getDemoUser(req);
  if (u.role === 'client' && u.id === offer.clientId) return u;
  if (
    u.role === 'talent' &&
    (u.talentSlug |talentSlugHeader) === offer.talentSlug
  )
    return u;
  const err = new Error('Not authorized for this offer');
  // @ts-ignore
  err.statusCode = 403;
  throw err;export function requireAuth(req: any): User {;
  const user = getUserFromRequest(req);
  if (!user) {
    throw new Error('Authentication required')
  }
  return user;
}



=======

}
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
