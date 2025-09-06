import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { job, company, postedAt } = req.body;
    
    if (!job || !company) {
      return res.status(400).json({ error: 'Job and company data required' });
    }

    // Mock Zapier webhook processing
    const zapierWebhook = {
      id: `zapier-${Date.now()}`,
      type: 'jobs_posted',
      job,
      company,
      postedAt: postedAt || new Date().toISOString(),
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