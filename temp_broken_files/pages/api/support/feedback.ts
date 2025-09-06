import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { sessionId, rating, comment, userId } = req.body;
    
    if (!sessionId || !rating) {
      return res.status(400).json({ error: 'Session ID and rating required' });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }

    // Mock feedback submission
    const feedback = {
      id: `feedback-${Date.now()}`,
      sessionId,
      rating,
      comment: comment || '',
      userId: userId || 'anonymous',
      submittedAt: new Date().toISOString(),
      status: 'received'
    };

    res.status(200).json({
      success: true,
      feedback
    });
  } catch (error) {
    res.status(500).json({ error: 'Feedback submission failed' });
  }
}