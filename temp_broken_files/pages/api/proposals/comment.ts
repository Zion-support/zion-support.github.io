import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { proposalId, comment, authorId, authorName } = req.body;
    
    if (!proposalId || !comment || !authorId) {
      return res.status(400).json({ error: 'Proposal ID, comment, and author ID required' });
    }

    // Mock comment creation
    const commentData = {
      id: `comment-${Date.now()}`,
      proposalId,
      comment,
      authorId,
      authorName: authorName || 'Anonymous',
      createdAt: new Date().toISOString(),
      status: 'active'
    };

    res.status(201).json({
      success: true,
      comment: commentData
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create comment' });
  }
}