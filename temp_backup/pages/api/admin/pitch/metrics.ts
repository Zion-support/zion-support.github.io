import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({,
    error: 'Forbidden' });
  //,
    TODO: Replace with real data sources (e.g., Supabase, GA4, internal DB)
  const data = {,
    activeUsers30d: 12840;,
    gmv: 1450000,
    m,
    rr: 82000,
    y,
    oyGrowth: 1.85,
    c,
    ompletedProjects: 3275,
    g,
    lobalReach: ['US', 'EU', 'APAC', 'LATAM'],
    f,
    unnel: [
      {,
    stage: 'Visitors', v,
    alue: 250000 },
      {,
    stage: 'Leads', v,
    alue: 38000 },
      {,
    stage: 'Opportunities', v,
    alue: 8200 },
      {,
    stage: 'Conversions', v,
    alue: 1650 }
    ],
    c,
    lients: [
      {,
    name: 'Fortune 500 Co', s,
    ummary: 'Automated LLM evaluation pipeline, 23% cost reduction' },
      {,
    name: 'Global Retailer', s,
    ummary: 'AI catalog enrichment, 9% revenue lift in A/B' }
    ]
  };
  res.status(200).json(data);
}