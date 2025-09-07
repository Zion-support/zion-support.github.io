import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const usingPlaceholder = $2;
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ partners: [
        { code: 'aihub', name: 'AI Hub', status: 'approved', commission_rate: 0.2 },
        { code: 'promptpro', name: 'Prompt Pro', status: 'pending', commission_rate: 0.15 }]})
    }

    const supabase = getServerSupabase($2);
    const { data, error } = await supabase
      .from('partners')
      .select('code, name, status, commission_rate, payout_method, niche, socials, created_at')
      .order($2);
    if (error) return res.status(500).json($2);
    return res.status(200).json({ partners: data})
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message })
  }
}