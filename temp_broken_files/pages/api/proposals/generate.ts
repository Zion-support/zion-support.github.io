import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { title, description, requirements, budget, timeline } = req.body;
    
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description required' });
    }

    // Mock proposal generation
    const proposal = {
      id: `proposal-${Date.now()}`,
      title,
      description,
      requirements: requirements || [],
      budget: budget || 'TBD',
      timeline: timeline || 'TBD',
      status: 'draft',
      generatedAt: new Date().toISOString(),
      sections: [
        { title: 'Executive Summary', content: 'Project overview and objectives' },
        { title: 'Scope of Work', content: 'Detailed work breakdown' },
        { title: 'Timeline', content: 'Project schedule and milestones' },
        { title: 'Budget', content: 'Cost breakdown and payment terms' }
      ]
    };

    res.status(201).json({
      success: true,
      proposal
    });
  } catch (error) {
    res.status(500).json({ error: 'Proposal generation failed' });
  }
}