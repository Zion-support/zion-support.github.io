import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { milestoneId, title, description, date } = req.body;
    
    if (!milestoneId || !title) {
      return res.status(400).json({ error: 'Milestone ID and title required' });
    }

    // Mock manifesto day event
    const event = {
      id: `manifesto-${Date.now()}`,
      milestoneId,
      title,
      description: description || '',
      date: date || new Date().toISOString(),
      type: 'milestone',
      status: 'scheduled',
      createdAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      event
    });
  } catch (error) {
    res.status(500).json({ error: 'Manifesto day event failed' });
  }
}