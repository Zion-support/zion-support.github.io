import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { period = 'month' } = req.query;
    
    // Mock leaderboard data
    const leaders = [
      {
        rank: 1,
        partnerCode: 'PARTNER001',
        partnerName: 'Tech Solutions Inc',
        referrals: 25,
        revenue: 50000,
        commission: 5000
      },
      {
        rank: 2,
        partnerCode: 'PARTNER002',
        partnerName: 'Digital Agency',
        referrals: 20,
        revenue: 40000,
        commission: 4000
      },
      {
        rank: 3,
        partnerCode: 'PARTNER003',
        partnerName: 'Innovation Labs',
        referrals: 15,
        revenue: 30000,
        commission: 3000
      }
    ];

    res.status(200).json({
      success: true,
      period,
      leaders
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve leaderboard' });
  }
}