import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { status, priority, limit = '20' } = req.query;
    
    // Mock support requests
    const requests = [
      {
        id: 'request-1',
        userId: 'user-1',
        subject: 'Login Issue',
        description: 'Unable to log into my account',
        status: 'open',
        priority: 'high',
        createdAt: '2024-01-20T10:00:00Z',
        assignedTo: 'support-agent-1'
      },
      {
        id: 'request-2',
        userId: 'user-2',
        subject: 'Feature Request',
        description: 'Would like to see dark mode option',
        status: 'in_progress',
        priority: 'medium',
        createdAt: '2024-01-19T14:30:00Z',
        assignedTo: 'support-agent-2'
      },
      {
        id: 'request-3',
        userId: 'user-3',
        subject: 'Billing Question',
        description: 'Question about subscription pricing',
        status: 'resolved',
        priority: 'low',
        createdAt: '2024-01-18T09:15:00Z',
        assignedTo: 'support-agent-1'
      }
    ];

    // Filter requests
    let filteredRequests = requests;
    if (status) {
      filteredRequests = filteredRequests.filter(req => req.status === status);
    }
    if (priority) {
      filteredRequests = filteredRequests.filter(req => req.priority === priority);
    }

    const limitNum = parseInt(limit as string, 10);
    filteredRequests = filteredRequests.slice(0, limitNum);

    res.status(200).json({
      success: true,
      requests: filteredRequests,
      total: requests.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve support requests' });
  }
}