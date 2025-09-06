import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { resumeId, viewerId, viewedAt } = req.body;
    
    if (!resumeId || !viewerId) {
      return res.status(400).json({ error: 'Resume ID and viewer ID required' });
    }

    // Mock webhook processing
    const webhook = {
      id: `webhook-${Date.now()}`,
      type: 'resume_viewed',
      resumeId,
      viewerId,
      viewedAt: viewedAt || new Date().toISOString(),
      processedAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      webhook
    });
  } catch (error) {
    res.status(500).json({ error: 'Webhook processing failed' });
  }
}