import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, amount, reason } = req.body;
    
    if (!userId || !amount) {
      return res.status(400).json({ error: 'User ID and amount required' });
    }

    // Mock token burn
    const burn = {
      id: `burn-${Date.now()}`,
      userId,
      amount,
      reason: reason || 'User requested burn',
      burnedAt: new Date().toISOString(),
      status: 'completed',
      txHash: `0x${Math.random().toString(16).substr(2, 64)}`
    };

    res.status(200).json({
      success: true,
      burn
    });
  } catch (err: any) {
    res.status(400).json({
      error: err.message || 'Token burn failed'
    });
  }
}