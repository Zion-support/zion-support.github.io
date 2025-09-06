import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { to, subject, body, priority = 'normal' } = req.body;
    
    if (!to || !subject || !body) {
      return res.status(400).json({ error: 'To, subject, and body required' });
    }

    // Mock message composition
    const message = {
      id: `msg-${Date.now()}`,
      to,
      subject,
      body,
      priority,
      status: 'sent',
      sentAt: new Date().toISOString(),
      threadId: `thread-${Date.now()}`
    };

    res.status(200).json({
      success: true,
      message
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to compose message' });
  }
}