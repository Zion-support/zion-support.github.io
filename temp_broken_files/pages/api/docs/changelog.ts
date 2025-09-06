import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const changelog = {
        version: '1.0.0',
        changes: [
          'Initial API release',
          'Added dispute management endpoints',
          'Added DID management endpoints'
        ],
        date: new Date().toISOString()
      };

      res.status(200).json({
        success: true,
        changelog
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve changelog' });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
}