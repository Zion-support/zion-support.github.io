import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { resolutionId, fromDAO, toDAO, decision, timestamp } = req.body;
    
    if (!resolutionId || !fromDAO || !toDAO || !decision) {
      return res.status(400).json({ error: 'Resolution ID, from DAO, to DAO, and decision required' });
    }

    // Mock DAO endorsement
    const endorsement = {
      id: `endorsement-${Date.now()}`,
      resolutionId,
      fromDAO,
      toDAO,
      decision,
      timestamp: timestamp || Date.now(),
      status: 'active',
      createdAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      endorsement
    });
  } catch (error) {
    res.status(500).json({ error: 'DAO endorsement failed' });
  }
}