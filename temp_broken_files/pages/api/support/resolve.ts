import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { requestId, resolution, resolvedBy } = req.body;
    
    if (!requestId || !resolution) {
      return res.status(400).json({ error: 'Request ID and resolution required' });
    }

    // Mock request resolution
    const resolutionData = {
      id: `resolution-${Date.now()}`,
      requestId,
      resolution,
      resolvedBy: resolvedBy || 'support-agent',
      resolvedAt: new Date().toISOString(),
      status: 'resolved'
    };

    res.status(200).json({
      success: true,
      resolution: resolutionData
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to resolve request' });
  }
}