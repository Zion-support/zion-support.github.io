import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { provider } = req.query;
    const { code, state, error } = req.query;
    
    if (!provider || typeof provider !== 'string') {
      return res.status(400).json({ error: 'Provider required' });
    }

    if (error) {
      return res.status(400).json({ error: `OAuth error: ${error}` });
    }

    if (!code) {
      return res.status(400).json({ error: 'Authorization code required' });
    }

    // Mock OAuth callback processing
    const result = {
      provider,
      code,
      state,
      accessToken: 'mock_access_token',
      refreshToken: 'mock_refresh_token',
      expiresAt: Date.now() + 3600000,
      processedAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      result
    });
  } catch (error) {
    res.status(500).json({ error: 'OAuth callback failed' });
  }
}