import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { roomName, participantName, participantIdentity } = req.body;
    
    if (!roomName || !participantName) {
      return res.status(400).json({ error: 'Room name and participant name required' });
    }

    // Mock token generation
    const token = {
      token: `mock_token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      roomName,
      participantName,
      participantIdentity: participantIdentity || participantName,
      expiresAt: new Date(Date.now() + 3600000).toISOString(), // 1 hour
      permissions: {
        canPublish: true,
        canSubscribe: true,
        canPublishData: true
      }
    };

    res.status(200).json({
      success: true,
      token
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate token' });
  }
}