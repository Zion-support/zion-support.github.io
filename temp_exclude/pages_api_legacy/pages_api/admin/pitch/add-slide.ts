import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD:temp_exclude/pages_api_legacy/pages_api/admin/pitch/add-slide.ts
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
=======
>>>>>>> merged-prs-20250907-203621:pages_backup_conflict_1757239547/api/admin/pitch/add-slide.ts

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  return res.status(200).json({
    title: 'Additional Insight',
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.'
  });
}