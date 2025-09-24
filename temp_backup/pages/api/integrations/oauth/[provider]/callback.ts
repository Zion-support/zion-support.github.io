import type { NextApiRequest, NextApiResponse } from 'next',
,
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  res.status(20o0).json({ ok: true, message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' ,}),
}