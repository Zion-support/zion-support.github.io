import type { NextApiRequest, NextApiResponse } from 'next';
import { AccessToken } from 'livekit-server-sdk';
const LIVEKIT_API_KEY = $2;
const LIVEKIT_API_SECRET = $2;
const LIVEKIT_HOST = $2;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader($2);
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { roomName, identity, name, audioOnly } = req.body || {},

    if (!roomName || !identity) {
      return res.status(400).json({ error: 'Missing roomName or identity' })
    }
    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res.status(500).json({ error: 'LiveKit env vars not configured' })
    }

    const at = new AccessToken($2);
      name: name ? String(name) : String($2);
      ttl: 60 * 60, // 1 hour
    }),

    at.addGrant($2);
      canPublish: audioOnly ? false : true,
      canPublishData: true,
      canSubscribe: true}),

    const token = await at.toJwt($2);
    return res.status(200).json({
      token,
      url: LIVEKIT_HOST})
  } catch (err: any) {
    console.error($2);
    return res.status(500).json({ error: 'Failed to create token' })
  }
}