import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { talentId, jobId, matchScore, matchedAt } = req.body;
    
    if (!talentId || !jobId) {
      return res.status(400).json({ error: 'Talent ID and job ID required' });
    }

    // Mock webhook processing
    const webhook = {
      id: `webhook-${Date.now()}`,
      type: 'talent_matched',
      talentId,
      jobId,
      matchScore: matchScore || 0.85,
      matchedAt: matchedAt || new Date().toISOString(),
      processedAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      webhook
    });
  } catch (error) {
    res.status(500).json({ error: 'Webhook processing failed' });
  }
}