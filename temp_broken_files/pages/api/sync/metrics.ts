import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { period = 'month' } = req.query;
    
    // Mock metrics data
    const metrics = {
      period,
      timestamp: new Date().toISOString(),
      totalsByToken: {
        'ZION': 1000000,
        'USDC': 500000,
        'ETH': 100
      },
      contributionsBySubject: {
        'user-1': 50000,
        'user-2': 75000,
        'user-3': 30000
      },
      summary: {
        totalContributions: 155000,
        activeUsers: 3,
        averageContribution: 51666.67
      }
    };

    res.status(200).json({
      success: true,
      metrics
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve metrics' });
  }
}