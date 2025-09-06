import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, limit = '50' } = req.query;
    
    if (!userId || typeof userId !== 'string') {
      return res.status(400).json({ error: 'User ID required' });
    }

    // Mock inbox messages
    const messages = [
      {
        id: 'msg-1',
        from: 'admin@zion.os',
        subject: 'Welcome to Zion OS',
        preview: 'Thank you for joining our platform...',
        unread: true,
        receivedAt: new Date().toISOString()
      },
      {
        id: 'msg-2',
        from: 'support@zion.os',
        subject: 'System Update',
        preview: 'We have released a new update...',
        unread: false,
        receivedAt: new Date().toISOString()
      }
    ];

    const limitNum = parseInt(limit as string, 10);
    const limitedMessages = messages.slice(0, limitNum);

    res.status(200).json({
      success: true,
      messages: limitedMessages,
      total: messages.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve inbox' });
  }
}