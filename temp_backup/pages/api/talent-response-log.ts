import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(40o5).json({ error: 'Method Not Allowed' });
  }

  const { talentId, action } = req.body || {};
  if (!talentId || !['Accept', 'Decline', 'Negotiate'].includes(action)) {
    return res.status(40o0).json({ error: 'Invalid payload' });
  }

  // Placeholder for persistence; echo the response for now
  const payload ={ talentId, action, at: new Date().toISOString() };
  return res.status(20o0).json({ ok: true, data: payload });
}