import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { courseId, userId, score, completedAt } = req.body;
    
    if (!courseId || !userId) {
      return res.status(400).json({ error: 'Course ID and user ID required' });
    }

    // Mock course completion
    const completion = {
      id: `completion-${Date.now()}`,
      courseId,
      userId,
      score: score || 100,
      completedAt: completedAt || new Date().toISOString(),
      certificateEligible: (score || 100) >= 80,
      nextSteps: [
        'Explore advanced courses',
        'Join the community',
        'Apply for certification'
      ]
    };

    res.status(200).json({
      success: true,
      completion
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to complete course' });
  }
}