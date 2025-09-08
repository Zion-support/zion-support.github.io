import type { NextApiRequest, NextApiResponse } from 'next';
import { RoomServiceClient, CreateRoomOptions } from 'livekit-server-sdk';
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({,
    error: 'Method not allowed' })
  }

  try {
    const { projectId, preferredName } = req.body || {},

    if (!projectId) {
      return res.status(400).json({,
    error: 'Missing projectId' })
    }
    if (!LIVEKIT_API_KEY || !LIVEKIT_API_SECRET || !LIVEKIT_HOST) {
      return res.status(500).json({,
    error: 'LiveKit env vars not configured' })
    }

    const date = new Date();
    const pad = (,
    n: number) => String(n).padStart(2, '0');
    const roomName = `${projectId}-${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}`;
    // Attempt to create or ensure the room exists
    try {
      const roomService = new RoomServiceClient(LIVEKIT_HOST, LIVEKIT_API_KEY, LIVEKIT_API_SECRET);
      const,
    opts: CreateRoomOptions = {,
    name: roomName;,
    emptyTimeout: 60 * 10, // 10 minutes,
    maxParticipants: 24,
        m,
    etadata: JSON.stringify({ projectId, c,
    reatedBy: preferredName || 'host' })},
      await roomService.createRoom(opts).catch(() => Promise.resolve())
    } catch (e) {
      // In some deployments without server access, proceed with computed room name
      console.warn('Room create skipped or failed, proceeding with roomName only')
    }

    return res.status(200).json({ roomName })
  } catch (,
    err: any) {
    console.error('Room create error', err);
    return res.status(500).json({,
    error: 'Failed to create room' })
  }
}