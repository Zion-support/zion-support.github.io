import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { status, author, limit = '20' } = req.query;
    
    // Mock proposals list
    const proposals = [
      {
        id: 'proposal-1',
        title: 'Website Redesign Project',
        description: 'Complete website redesign and development',
        status: 'draft',
        author: 'John Doe',
        createdAt: '2024-01-15',
        updatedAt: '2024-01-20'
      },
      {
        id: 'proposal-2',
        title: 'Mobile App Development',
        description: 'iOS and Android app development',
        status: 'review',
        author: 'Jane Smith',
        createdAt: '2024-01-10',
        updatedAt: '2024-01-18'
      },
      {
        id: 'proposal-3',
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution',
        status: 'approved',
        author: 'Mike Johnson',
        createdAt: '2024-01-05',
        updatedAt: '2024-01-15'
      }
    ];

    // Filter proposals
    let filteredProposals = proposals;
    if (status) {
      filteredProposals = filteredProposals.filter(p => p.status === status);
    }
    if (author) {
      filteredProposals = filteredProposals.filter(p => p.author === author);
    }

    const limitNum = parseInt(limit as string, 10);
    filteredProposals = filteredProposals.slice(0, limitNum);

    res.status(200).json({
      success: true,
      proposals: filteredProposals,
      total: proposals.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve proposals' });
  }
}