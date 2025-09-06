import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    if (req.method === 'GET') {
      // Return current overrides
      const overrides = [
        {
          id: 'override-1',
          integrationId: 'integration-1',
          field: 'sync_frequency',
          value: 'hourly',
          createdAt: new Date().toISOString()
        }
      ];

      res.status(200).json({
        success: true,
        overrides
      });
    } else if (req.method === 'POST') {
      // Create new override
      const { integrationId, field, value } = req.body;
      
      if (!integrationId || !field || value === undefined) {
        return res.status(400).json({ error: 'Integration ID, field, and value required' });
      }

      const override = {
        id: `override-${Date.now()}`,
        integrationId,
        field,
        value,
        createdAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        override
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
}