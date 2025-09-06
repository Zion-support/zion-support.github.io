import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    // Mock available integration providers
    const providers = [
      {
        id: 'slack',
        name: 'Slack',
        description: 'Team communication and collaboration',
        icon: 'slack',
        status: 'available',
        features: ['messaging', 'file_sharing', 'channels']
      },
      {
        id: 'github',
        name: 'GitHub',
        description: 'Code repository and version control',
        icon: 'github',
        status: 'available',
        features: ['repositories', 'pull_requests', 'issues']
      },
      {
        id: 'jira',
        name: 'Jira',
        description: 'Project management and issue tracking',
        icon: 'jira',
        status: 'available',
        features: ['projects', 'issues', 'workflows']
      }
    ];

    res.status(200).json({
      success: true,
      providers
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve providers' });
  }
}