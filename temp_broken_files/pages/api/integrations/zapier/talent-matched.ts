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

    // Mock Zapier webhook processing
    const zapierWebhook = {
      id: `zapier-${Date.now()}`,
      type: 'talent_matched',
      talentId,
      jobId,
      matchScore: matchScore || 0.85,
      matchedAt: matchedAt || new Date().toISOString(),
      processedAt: new Date().toISOString(),
      zapierTriggered: true
    };

    res.status(200).json({
      success: true,
      webhook: zapierWebhook
    });
  } catch (error) {
    res.status(500).json({ error: 'Zapier webhook processing failed' });
  }
}