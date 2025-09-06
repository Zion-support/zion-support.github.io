import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { entityKey, personId, fromNation, toNation, role, startDate, endDate } = req.body;
    
    if (!entityKey || !personId || !fromNation || !toNation) {
      return res.status(400).json({ error: 'Entity key, person ID, from nation, and to nation required' });
    }

    // Mock talent mobility event
    const mobility = {
      id: `mobility-${Date.now()}`,
      entityKey,
      personId,
      fromNation,
      toNation,
      role: role || 'developer',
      startDate: startDate || new Date().toISOString(),
      endDate: endDate || null,
      status: 'active',
      createdAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      mobility
    });
  } catch (error) {
    res.status(500).json({ error: 'Talent mobility event failed' });
  }
}