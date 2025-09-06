import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, amount } = req.body;
    
    if (!userId || !amount) {
      return res.status(400).json({ error: 'User ID and amount required' });
    }

    // Mock token redemption to credits
    const result = {
      id: `redeem-${Date.now()}`,
      userId,
      tokensRedeemed: Math.floor(amount),
      creditsEarned: Math.floor(amount) * 10, // 1 token = 10 credits
      redeemedAt: new Date().toISOString(),
      status: 'completed'
    };

    res.status(200).json({
      success: true,
      result
    });
  } catch (err: any) {
    res.status(400).json({
      error: err.message || 'Token redemption failed'
    });
  }
}