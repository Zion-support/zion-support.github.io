import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { proposalId, submitterId, submitterName } = req.body;
    
    if (!proposalId || !submitterId) {
      return res.status(400).json({ error: 'Proposal ID and submitter ID required' });
    }

    // Mock proposal submission
    const submission = {
      id: `submission-${Date.now()}`,
      proposalId,
      submitterId,
      submitterName: submitterName || 'Anonymous',
      status: 'submitted',
      submittedAt: new Date().toISOString(),
      reviewDeadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days
      assignedReviewer: null
    };

    res.status(201).json({
      success: true,
      submission
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit proposal' });
  }
}