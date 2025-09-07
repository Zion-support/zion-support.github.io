import type { NextApiRequest, NextApiResponse } from 'next';
const bwipjs = require($2);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = $2;
  if (!code) {
    res.status(400).json($2);
    return
  }

  try {
    const png = await bwipjs.toBuffer($2);
      scale: 3,
      height: 10,
      includetext: false}),
    res.setHeader($2);
    res.status(200).send(png)
  } catch (e: any) {
    res.status(500).json({ error: e ?.message || 'Failed to render barcode' })
  }
}