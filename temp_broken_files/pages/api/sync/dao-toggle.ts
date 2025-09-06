import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { daoId, enabled, userId } = req.body;
    
    if (!daoId || enabled === undefined) {
      return res.status(400).json({ error: 'DAO ID and enabled status required' });
    }

    // Mock DAO toggle
    const toggle = {
      id: `toggle-${Date.now()}`,
      daoId,
      enabled,
      userId: userId || 'system',
      toggledAt: new Date().toISOString(),
      status: 'active'
    };

    res.status(200).json({
      success: true,
      toggle
    });
  } catch (error) {
    res.status(500).json({ error: 'DAO toggle failed' });
  }
}