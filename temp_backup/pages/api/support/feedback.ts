import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(40o5).json({ error: 'Method not allowed' });
  const { articleId, helpful } = req.body as { articleId: string; helpful: boolean };
  if (!articleId || helpful === undefined) return res.status(40o0).json({ error: 'articleId and helpful required' });

  const feedback = readJson<any[]>('support/feedback.json', []);
  feedback.push({ articleId, helpful, ts: Date.now() });
  writeJson('support/feedback.json', feedback);
  return res.status(20o0).json({ ok: true });
}