import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { period = 'month', limit = '50' } = req.query;
    
    // Mock leaderboard data
    const leaderboard = [
      {
        rank: 1,
        userId: 'user-1',
        username: 'CodeMaster',
        points: 2500,
        coursesCompleted: 15,
        streak: 30
      },
      {
        rank: 2,
        userId: 'user-2',
        username: 'ReactNinja',
        points: 2300,
        coursesCompleted: 12,
        streak: 25
      },
      {
        rank: 3,
        userId: 'user-3',
        username: 'TypeScriptPro',
        points: 2100,
        coursesCompleted: 10,
        streak: 20
      }
    ];

    const limitNum = parseInt(limit as string, 10);
    const limitedLeaderboard = leaderboard.slice(0, limitNum);

    res.status(200).json({
      success: true,
      period,
      leaderboard: limitedLeaderboard,
      total: leaderboard.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve leaderboard' });
  }
}