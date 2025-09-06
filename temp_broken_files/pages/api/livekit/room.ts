import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { roomName, participantName } = req.body;
    
    if (!roomName || !participantName) {
      return res.status(400).json({ error: 'Room name and participant name required' });
    }

    // Mock room creation
    const room = {
      id: `room-${Date.now()}`,
      name: roomName,
      participantName,
      createdAt: new Date().toISOString(),
      status: 'active',
      participants: [participantName],
      maxParticipants: 50
    };

    res.status(200).json({
      success: true,
      room
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create room' });
  }
}