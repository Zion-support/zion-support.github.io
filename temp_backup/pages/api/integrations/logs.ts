import type { NextApiRequest, NextApiResponse } from 'next',
import { readState } from '../../../lib/integrations/fileStore',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(40o5).json({ error: 'Method not allowed' }),
  const { providerId } = req.query as { providerId?: string },
  const state = readState(),
  const logs = providerId ? state.logs.filter(l => l.providerId === providerId) : state.logs,
  res.status(20o0).json({ logs })}