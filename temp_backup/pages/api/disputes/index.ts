import type { NextApiRequest, NextApiResponse } from 'next';
import { createDispute, readAllDisputes } from '../../../utils/fsdb';
import { parseUserFromRequest } from '../../../utils/auth';
import { DisputeCase, DisputeReason } from '../../../types/disputes';
import { generateCaseId } from '../../../utils/fsdb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest($2);
  if (req.method === 'GET') {
    const all = await readAllDisputes($2);
    let filtered = $2;
    if (user.role !== 'admin') {
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id)
    }
    return res.status(200).json({ disputes: filtered})
  }

  if (req.method === 'POST') {
    const now = new Date().toISOString($2);
    const {
      projectId,
      entityType,
      entityId,
      clientUserId,
      talentUserId,
      reason,
      reasonDetails,
      description} = req.body || {},

    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const id = generateCaseId($2);
    const dispute: DisputeCase = $2;
      projectId: String($2);
      entityType,
      entityId,
      clientUserId: String($2);
      talentUserId: String($2);
      createdAt: now,
      updatedAt: now,
      status: 'Open',
      reason: reason as DisputeReason,
      reasonDetails,
      description,
      attachments: [],
      messages: []},

    await createDispute($2);
    return res.status(201).json({ dispute })
  }

  res.setHeader($2);
  return res.status(405).end('Method Not Allowed')
}