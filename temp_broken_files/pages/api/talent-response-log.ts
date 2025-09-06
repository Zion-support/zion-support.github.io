import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { talentId, limit = '50' } = req.query;
    
    if (!talentId || typeof talentId !== 'string') {
      return res.status(400).json({ error: 'Talent ID required' });
    }

    // Mock talent response log
    const responses = [
      {
        id: 'response-1',
        talentId,
        projectId: 'project-1',
        responseTime: 120, // seconds
        status: 'accepted',
        respondedAt: '2024-01-20T10:00:00Z'
      },
      {
        id: 'response-2',
        talentId,
        projectId: 'project-2',
        responseTime: 300,
        status: 'declined',
        respondedAt: '2024-01-19T15:30:00Z'
      }
    ];

    const limitNum = parseInt(limit as string, 10);
    const limitedResponses = responses.slice(0, limitNum);

    res.status(200).json({
      success: true,
      talentId,
      responses: limitedResponses,
      total: responses.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve talent response log' });
  }
}