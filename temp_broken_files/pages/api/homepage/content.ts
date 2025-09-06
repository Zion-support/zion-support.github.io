import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const content = {
      hero: {
        title: 'Welcome to Zion OS',
        subtitle: 'Advanced Operating System for the Future',
        cta: 'Get Started'
      },
      features: [
        {
          title: 'AI-Powered',
          description: 'Leverage artificial intelligence for enhanced productivity'
        },
        {
          title: 'Secure',
          description: 'Enterprise-grade security and privacy protection'
        },
        {
          title: 'Scalable',
          description: 'Built to scale with your organization\'s needs'
        }
      ],
      stats: {
        users: '10,000+',
        uptime: '99.9%',
        satisfaction: '4.9/5'
      }
    };

    res.status(200).json({
      success: true,
      content
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve homepage content' });
  }
}