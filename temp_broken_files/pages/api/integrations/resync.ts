import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { integrationId, force = false } = req.body;
    
    if (!integrationId) {
      return res.status(400).json({ error: 'Integration ID required' });
    }

    // Mock resync operation
    const resync = {
      id: `resync-${Date.now()}`,
      integrationId,
      force,
      status: 'started',
      startedAt: new Date().toISOString(),
      estimatedDuration: '5-10 minutes'
    };

    res.status(200).json({
      success: true,
      resync
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to start resync' });
  }
}