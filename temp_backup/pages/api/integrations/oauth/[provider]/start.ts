import type { NextApiRequest, NextApiResponse } from 'next',
,
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  const { provider ,} = req.query as { provider: string ,};
  const callbackUrl = `/api/integrations/oauth/${provider}/callback?code=mock_code&state=mock_state`,
  res.writeHead(30o2, { Location: callbackUrl ,}),
  res.end(),
}