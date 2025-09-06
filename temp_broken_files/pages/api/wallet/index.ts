import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId } = req.query;
    
    if (!userId || typeof userId !== 'string') {
      return res.status(400).json({ error: 'User ID required' });
    }

    // Mock wallet summary
    const summary = {
      userId,
      balance: 1000,
      currency: 'ZION',
      transactions: [
        {
          id: 'tx-1',
          type: 'earn',
          amount: 100,
          timestamp: '2024-01-20T10:00:00Z',
          description: 'Project completion reward'
        },
        {
          id: 'tx-2',
          type: 'burn',
          amount: -50,
          timestamp: '2024-01-19T15:30:00Z',
          description: 'Service fee'
        }
      ],
      lastUpdated: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      summary
    });
  } catch (err: any) {
    res.status(400).json({
      error: err.message || 'Failed to retrieve wallet summary'
    });
  }
}