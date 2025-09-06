import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { provider } = req.query;
    
    if (!provider || typeof provider !== 'string') {
      return res.status(400).json({ error: 'Provider required' });
    }

    // Mock OAuth start URL generation
    const state = `state_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const authUrl = `https://${provider}.com/oauth/authorize?client_id=mock_client_id&redirect_uri=${encodeURIComponent('http://localhost:3000/api/integrations/oauth/' + provider + '/callback')}&response_type=code&scope=read&state=${state}`;

    res.status(200).json({
      success: true,
      authUrl,
      state,
      provider
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to start OAuth flow' });
  }
}