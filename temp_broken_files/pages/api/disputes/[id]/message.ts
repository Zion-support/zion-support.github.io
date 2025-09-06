import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;
    const { message } = req.body;
    
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Dispute ID required' });
    }

    if (!message) {
      return res.status(400).json({ error: 'Message required' });
    }

    // Mock message processing
    res.status(200).json({
      success: true,
      messageId: `msg-${Date.now()}`,
      disputeId: id,
      message
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process message' });
  }
}