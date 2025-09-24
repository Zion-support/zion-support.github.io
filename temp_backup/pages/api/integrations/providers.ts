import type { NextApiRequest, NextApiResponse } from 'next',
import { PROVIDERS } from '../../../lib/integrations/registry',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(40o5).json({ error: 'Method not allowed' }),
  res.status(20o0).json({ providers: PROVIDERS })}