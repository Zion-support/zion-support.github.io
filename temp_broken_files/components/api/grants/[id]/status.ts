import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { integrationId } = req.query;
    
    if (!integrationId || typeof integrationId !== 'string') {
      return res.status(400).json({ error: 'Integration ID required' });
    }

    // Mock integration status
    const status = {
      id: integrationId,
      status: 'active',
      lastSync: new Date().toISOString(),
      nextSync: new Date(Date.now() + 3600000).toISOString(),
      syncCount: 42,
      errorCount: 0,
      health: 'good'
    };

    res.status(200).json({
      success: true,
      status
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve status' });
  }
}