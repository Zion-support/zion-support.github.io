import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { entityId, limit = '50' } = req.query;
    
    // Mock sync events
    const events = [
      {
        id: 'event-1',
        type: 'user_created',
        entityId: 'user-1',
        timestamp: '2024-01-20T10:00:00Z',
        data: { name: 'John Doe', email: 'john@example.com' }
      },
      {
        id: 'event-2',
        type: 'project_updated',
        entityId: 'project-1',
        timestamp: '2024-01-20T11:00:00Z',
        data: { title: 'Updated Project', status: 'active' }
      }
    ];

    // Filter by entity ID if provided
    let filteredEvents = events;
    if (entityId) {
      filteredEvents = events.filter(event => event.entityId === entityId);
    }

    const limitNum = parseInt(limit as string, 10);
    filteredEvents = filteredEvents.slice(0, limitNum);

    const summary = {
      totalEvents: events.length,
      filteredEvents: filteredEvents.length,
      lastSync: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      events: filteredEvents,
      summary
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve sync events' });
  }
}