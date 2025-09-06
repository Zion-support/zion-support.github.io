import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { message, userId, sessionId } = req.body;
    
    if (!message || !userId) {
      return res.status(400).json({ error: 'Message and user ID required' });
    }

    // Mock chat response
    const chatResponse = {
      id: `chat-${Date.now()}`,
      sessionId: sessionId || `session-${Date.now()}`,
      userId,
      message,
      response: 'Thank you for your message. Our support team will get back to you within 24 hours. In the meantime, you can check our FAQ section for quick answers.',
      timestamp: new Date().toISOString(),
      status: 'received',
      priority: 'normal'
    };

    res.status(200).json({
      success: true,
      chat: chatResponse
    });
  } catch (error) {
    res.status(500).json({ error: 'Chat request failed' });
  }
}