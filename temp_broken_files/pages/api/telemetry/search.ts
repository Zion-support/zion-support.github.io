import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { query, userId, sessionId, timestamp } = req.body;
    
    if (!query || !userId) {
      return res.status(400).json({ error: 'Query and user ID required' });
    }

    // Mock telemetry logging
    const telemetry = {
      id: `telemetry-${Date.now()}`,
      query,
      userId,
      sessionId: sessionId || `session-${Date.now()}`,
      timestamp: timestamp || Date.now(),
      loggedAt: new Date().toISOString()
    };

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Telemetry logging failed' });
  }
}