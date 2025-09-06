import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { partnerCode, period = 'month' } = req.query;
    
    if (!partnerCode || typeof partnerCode !== 'string') {
      return res.status(400).json({ error: 'Partner code required' });
    }

    // Mock metrics data
    const metrics = {
      partnerCode,
      period,
      totalReferrals: 25,
      successfulReferrals: 20,
      conversionRate: 0.8,
      totalRevenue: 50000,
      commission: 5000,
      topReferralSources: [
        { source: 'Website', count: 10 },
        { source: 'Social Media', count: 8 },
        { source: 'Email', count: 7 }
      ],
      monthlyTrend: [
        { month: 'Jan', referrals: 5, revenue: 10000 },
        { month: 'Feb', referrals: 8, revenue: 16000 },
        { month: 'Mar', referrals: 12, revenue: 24000 }
      ]
    };

    res.status(200).json({
      success: true,
      metrics
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve metrics' });
  }
}