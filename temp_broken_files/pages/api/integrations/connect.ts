import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { providerId, syncRules } = req.body;
    
    if (!providerId) {
      return res.status(400).json({ error: 'Provider ID required' });
    }

    const now = Date.now();
    const integration = {
      id: `integration-${Date.now()}`,
      providerId: providerId as string,
      status: 'connected',
      accessToken: 'mock_access_token',
      refreshToken: 'mock_refresh_token',
      expiresAt: now + 1000 * 60 * 60,
      connectedAt: now,
      syncRules: syncRules || {},
      lastSyncAt: undefined
    };

    res.status(200).json({
      success: true,
      integration
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to connect integration' });
  }
}