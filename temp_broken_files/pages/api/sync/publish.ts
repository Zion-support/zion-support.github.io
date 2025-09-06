import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { event, entityId } = req.body;
    
    if (!event || !entityId) {
      return res.status(400).json({ error: 'Event and entity ID required' });
    }

    // Mock event publishing
    const publishedEvent = {
      id: `published-${Date.now()}`,
      entityId,
      event,
      publishedAt: new Date().toISOString(),
      status: 'published',
      version: 1
    };

    res.status(200).json({
      success: true,
      event: publishedEvent
    });
  } catch (error) {
    res.status(500).json({ error: 'Event publishing failed' });
  }
}