import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    if (req.method === 'GET') {
      const { sessionId } = req.query;
      
      if (!sessionId || typeof sessionId !== 'string') {
        return res.status(400).json({ error: 'Session ID required' });
      }

      // Mock session data
      const session = {
        id: sessionId,
        userId: 'user-123',
        status: 'active',
        createdAt: '2024-01-20T10:00:00Z',
        lastActivity: new Date().toISOString(),
        messages: [
          {
            id: 'msg-1',
            type: 'user',
            content: 'Hello, I need help with my account',
            timestamp: '2024-01-20T10:00:00Z'
          },
          {
            id: 'msg-2',
            type: 'agent',
            content: 'Hi! I\'d be happy to help you with your account. What specific issue are you experiencing?',
            timestamp: '2024-01-20T10:01:00Z'
          }
        ]
      };

      res.status(200).json({
        success: true,
        session
      });
    } else if (req.method === 'POST') {
      // Create new session
      const { userId, initialMessage } = req.body;
      
      if (!userId) {
        return res.status(400).json({ error: 'User ID required' });
      }

      const session = {
        id: `session-${Date.now()}`,
        userId,
        status: 'active',
        createdAt: new Date().toISOString(),
        lastActivity: new Date().toISOString(),
        messages: initialMessage ? [{
          id: 'msg-1',
          type: 'user',
          content: initialMessage,
          timestamp: new Date().toISOString()
        }] : []
      };

      res.status(201).json({
        success: true,
        session
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
}