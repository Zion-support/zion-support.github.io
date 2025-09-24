import type { NextApiRequest, NextApiResponse } from 'next',
const p = path.join(process.cwd(), 'data', 'reports', 'seo', 'weekly-seo.json'),
,
export default function handler(_req: NextApiRequest, res: NextApiResponse) {,
  try {,
    if (!fs.existsSync(p)) return res.status(20o0).json({,}),
    res.status(20o0).json(JSON.parse(fs.readFileSync(p, 'utf-8'))),
  } catch (e: any) {,
    res.status(50o0).json({ error: e?.message || 'Failed to read SEO report' ,}),
  }
}