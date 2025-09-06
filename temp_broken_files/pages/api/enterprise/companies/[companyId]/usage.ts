import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { companyId } = req.query;
    
    if (!companyId || typeof companyId !== 'string') {
      return res.status(400).json({ error: 'Company ID required' });
    }

    // Mock usage data
    const usage = {
      apiCalls: 1500,
      storageUsed: '2.5GB',
      activeUsers: 25,
      period: 'current_month'
    };

    res.status(200).json({
      success: true,
      companyId,
      usage
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve usage data' });
  }
}