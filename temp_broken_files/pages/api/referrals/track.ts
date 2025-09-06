import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { referralCode, event, userId, metadata } = req.body;
    
    if (!referralCode || !event || !userId) {
      return res.status(400).json({ error: 'Referral code, event, and user ID required' });
    }

    // Mock referral tracking
    const tracking = {
      id: `track-${Date.now()}`,
      referralCode,
      event,
      userId,
      metadata: metadata || {},
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      userAgent: req.headers['user-agent']
    };

    res.status(200).json({
      success: true,
      tracking
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to track referral' });
  }
}