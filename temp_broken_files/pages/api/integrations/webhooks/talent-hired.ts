import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { talentId, companyId, position, hiredAt } = req.body;
    
    if (!talentId || !companyId || !position) {
      return res.status(400).json({ error: 'Talent ID, company ID, and position required' });
    }

    // Mock webhook processing
    const webhook = {
      id: `webhook-${Date.now()}`,
      type: 'talent_hired',
      talentId,
      companyId,
      position,
      hiredAt: hiredAt || new Date().toISOString(),
      processedAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      webhook
    });
  } catch (error) {
    res.status(500).json({ error: 'Webhook processing failed' });
  }
}