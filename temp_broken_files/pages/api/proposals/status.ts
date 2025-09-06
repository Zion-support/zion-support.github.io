import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PATCH') {
    res.setHeader('Allow', 'PATCH');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { proposalId, status, reason } = req.body;
    
    if (!proposalId || !status) {
      return res.status(400).json({ error: 'Proposal ID and status required' });
    }

    const validStatuses = ['draft', 'review', 'approved', 'rejected', 'archived'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    // Mock status update
    const updatedProposal = {
      id: proposalId,
      status,
      reason: reason || '',
      updatedAt: new Date().toISOString(),
      statusHistory: [
        {
          status,
          reason: reason || '',
          updatedAt: new Date().toISOString(),
          updatedBy: 'system'
        }
      ]
    };

    res.status(200).json({
      success: true,
      proposal: updatedProposal
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update status' });
  }
}