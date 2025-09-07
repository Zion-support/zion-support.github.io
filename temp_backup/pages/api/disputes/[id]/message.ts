import type { NextApiRequest, NextApiResponse } from 'next';
import { getDisputeById, upsertDispute } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query,
  if (typeof id !== 'string') return res.status(400).json($2);
  const user = parseUserFromRequest($2);
  if (req.method === 'POST') {
    const dispute = await getDisputeById($2);
    if (!dispute) return res.status(404).json($2);
    try {
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId)
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' })
    }
    const { body } = req.body || {},
    if (!body || typeof body !== 'string') return res.status(400).json($2);
    const now = new Date().toISOString($2);
    dispute.messages.push({
      id: `${Date.now()}`,
      authorUserId: user.id,
      authorRole: (user.role = $2;
      body,
      createdAt: now}),
    dispute.updatedAt = $2;
    await upsertDispute($2);
    return res.status(201).json({ dispute })
  }

  res.setHeader($2);
  return res.status(405).end('Method Not Allowed')
}