import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { sessionId, reason, priority = 'high' } = req.body;
    
    if (!sessionId || !reason) {
      return res.status(400).json({ error: 'Session ID and reason required' });
    }

    // Mock escalation
    const escalation = {
      id: `escalation-${Date.now()}`,
      sessionId,
      reason,
      priority,
      escalatedAt: new Date().toISOString(),
      status: 'escalated',
      assignedTo: 'senior-support',
      estimatedResponseTime: '2 hours'
    };

    res.status(200).json({
      success: true,
      escalation
    });
  } catch (error) {
    res.status(500).json({ error: 'Escalation failed' });
  }
}