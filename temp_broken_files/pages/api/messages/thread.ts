import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { threadId } = req.query;
    
    if (!threadId || typeof threadId !== 'string') {
      return res.status(400).json({ error: 'Thread ID required' });
    }

    // Mock thread messages
    const thread = {
      id: threadId,
      messages: [
        {
          id: 'msg-1',
          from: 'user1@example.com',
          content: 'Hello, how can I help you?',
          timestamp: new Date().toISOString()
        },
        {
          id: 'msg-2',
          from: 'user2@example.com',
          content: 'I need assistance with the API',
          timestamp: new Date().toISOString()
        }
      ],
      participants: ['user1@example.com', 'user2@example.com'],
      createdAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      thread
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve thread' });
  }
}