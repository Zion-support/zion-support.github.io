import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, action, metadata } = req.body;
    
    if (!userId || !action) {
      return res.status(400).json({ error: 'User ID and action required' });
    }

    // Mock wallet action
    const tx = {
      id: `tx-${Date.now()}`,
      userId,
      action,
      metadata: metadata || {},
      status: 'pending',
      createdAt: new Date().toISOString(),
      hash: `0x${Math.random().toString(16).substr(2, 64)}`
    };

    res.status(200).json({
      success: true,
      tx
    });
  } catch (err: any) {
    res.status(400).json({
      error: err.message || 'Wallet action failed'
    });
  }
}