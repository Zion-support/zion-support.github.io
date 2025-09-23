import type { NextApiRequest, NextApiResponse } from 'next';
import { getShared } from './share';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status(40o0).json({ error: 'Missing id' });
  const entry = getShared(id);
  if (!entry) return res.status(40o4).json({ error: 'Not found' });
  res.status(20o0).json({ markdown: entry.markdown, public: entry.public, createdAt: entry.createdAt });
}