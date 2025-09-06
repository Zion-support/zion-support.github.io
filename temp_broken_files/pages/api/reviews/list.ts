import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { targetType, targetId, limit = '20' } = req.query;
    
    if (!targetType || !targetId) {
      return res.status(400).json({ error: 'Target type and target ID required' });
    }

    // Mock reviews data
    const reviews = [
      {
        id: 'review-1',
        projectId: 'project-1',
        fromRole: 'client',
        toRole: 'talent',
        rating: 5,
        comment: 'Excellent work! Very professional and delivered on time.',
        createdAt: '2024-01-15',
        approved: true
      },
      {
        id: 'review-2',
        projectId: 'project-2',
        fromRole: 'talent',
        toRole: 'client',
        rating: 4,
        comment: 'Great client to work with. Clear communication throughout.',
        createdAt: '2024-01-10',
        approved: true
      }
    ];

    // Filter reviews based on target type and ID
    const filteredReviews = reviews.filter(review => {
      if (targetType === 'talent') {
        return review.toRole === 'talent';
      } else if (targetType === 'client') {
        return review.toRole === 'client';
      }
      return true;
    });

    const limitNum = parseInt(limit as string, 10);
    const limitedReviews = filteredReviews.slice(0, limitNum);

    res.status(200).json({
      success: true,
      reviews: limitedReviews,
      total: filteredReviews.length,
      averageRating: filteredReviews.reduce((sum, r) => sum + r.rating, 0) / filteredReviews.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve reviews' });
  }
}