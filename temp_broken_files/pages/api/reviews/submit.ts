import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { projectId, fromRole, toRole, rating, comment, fromUserId } = req.body;
    
    if (!projectId || !fromRole || !toRole || !rating || !fromUserId) {
      return res.status(400).json({ error: 'Project ID, roles, rating, and user ID required' });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }

    // Mock review submission
    const review = {
      id: `review-${Date.now()}`,
      projectId,
      fromRole,
      toRole,
      rating,
      comment: comment || '',
      fromUserId,
      status: 'pending',
      submittedAt: new Date().toISOString(),
      approved: false
    };

    res.status(201).json({
      success: true,
      review
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit review' });
  }
}