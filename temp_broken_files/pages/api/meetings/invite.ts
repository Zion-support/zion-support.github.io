import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { meetingId, email, role = 'participant' } = req.body;
    
    if (!meetingId || !email) {
      return res.status(400).json({ error: 'Meeting ID and email required' });
    }

    // Mock meeting invitation
    const invitation = {
      id: `invite-${Date.now()}`,
      meetingId,
      email,
      role,
      status: 'pending',
      invitedAt: new Date().toISOString(),
      meetingUrl: `https://meet.zion.os/${meetingId}`,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days
    };

    res.status(200).json({
      success: true,
      invitation
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send invitation' });
  }
}