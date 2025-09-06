import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { messageId, userId } = req.body;
    
    if (!messageId || !userId) {
      return res.status(400).json({ error: 'Message ID and user ID required' });
    }

    // Mock mark as read
    const result = {
      messageId,
      userId,
      readAt: new Date().toISOString(),
      status: 'read'
    };

    res.status(200).json({
      success: true,
      result
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark as read' });
  }
}