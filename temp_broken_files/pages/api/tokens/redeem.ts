import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, tokenCode, amount } = req.body;
    
    if (!userId || !tokenCode) {
      return res.status(400).json({ error: 'User ID and token code required' });
    }

    // Mock token redemption
    const redemption = {
      id: `redemption-${Date.now()}`,
      userId,
      tokenCode,
      amount: amount || 1,
      redeemedAt: new Date().toISOString(),
      status: 'completed',
      value: 10.00 // Mock value in USD
    };

    res.status(200).json({
      success: true,
      redemption
    });
  } catch (error) {
    res.status(500).json({ error: 'Token redemption failed' });
  }
}