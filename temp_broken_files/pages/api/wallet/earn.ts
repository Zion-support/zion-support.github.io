import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, amount, reason, metadata } = req.body;
    
    if (!userId || !amount) {
      return res.status(400).json({ error: 'User ID and amount required' });
    }

    // Mock token earning
    const tx = {
      id: `earn-${Date.now()}`,
      userId,
      amount: Math.floor(amount),
      reason: reason || 'Reward earned',
      metadata: metadata || {},
      earnedAt: new Date().toISOString(),
      status: 'completed',
      txHash: `0x${Math.random().toString(16).substr(2, 64)}`
    };

    res.status(200).json({
      success: true,
      tx
    });
  } catch (err: any) {
    res.status(400).json({
      error: err.message || 'Token earning failed'
    });
  }
}