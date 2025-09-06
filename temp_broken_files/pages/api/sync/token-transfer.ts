import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { txId, from, to, amount, token, timestamp } = req.body;
    
    if (!txId || !from || !to || !amount || !token) {
      return res.status(400).json({ error: 'Transaction ID, from, to, amount, and token required' });
    }

    // Mock token transfer event
    const transfer = {
      id: `transfer-${Date.now()}`,
      txId,
      from,
      to,
      amount,
      token,
      timestamp: timestamp || Date.now(),
      status: 'completed',
      createdAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      transfer
    });
  } catch (error) {
    res.status(500).json({ error: 'Token transfer event failed' });
  }
}