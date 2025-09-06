import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;
    const { resolution } = req.body;
    
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Dispute ID required' });
    }

    if (!resolution) {
      return res.status(400).json({ error: 'Resolution required' });
    }

    // Mock dispute resolution
    res.status(200).json({
      success: true,
      disputeId: id,
      resolution,
      resolvedAt: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to resolve dispute' });
  }
}