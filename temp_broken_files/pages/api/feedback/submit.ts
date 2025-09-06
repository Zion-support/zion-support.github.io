import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { feedback, category, priority } = req.body;
    
    if (!feedback) {
      return res.status(400).json({ error: 'Feedback required' });
    }

    const submission = {
      id: `submission-${Date.now()}`,
      feedback,
      category: category || 'general',
      priority: priority || 'medium',
      submittedAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      submission
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
}