import type { NextApiRequest, NextApiResponse } from 'next';
import { AccessToken } from 'livekit-server-sdk';
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({,
    error: 'Method not allowed' })
  }

  try {
    const { roomName, identity, name, audioOnly } = req.body || {},

    if (!roomName || !identity) {
      return res.status(400).json({,
    error: 'Missing roomName or identity' })
    }
    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res.status(500).json({,
    error: 'LiveKit env vars not configured' })
    }

    const at = new AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET, {,
    identity: String(identity),
      n,
    ame: name ? String(name) : String(identity),
      t,
    tl: 60 * 60, // 1 hour
    });
    at.addGrant({,
    roomJoin: true,
      r,
    oom: String(roomName),
      c,
    anPublish: audioOnly ? false : true,
      c,
    anPublishData: true,
      c,
    anSubscribe: true});
    const token = await at.toJwt();
    return res.status(200).json({
      token;,
    url: LIVEKIT_HOST})
  } catch (,
    err: any) {
    console.error('Token error', err);
    return res.status(500).json({,
    error: 'Failed to create token' })
  }
}