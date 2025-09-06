import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    if (req.method === 'GET') {
      // Return list of disputes
      res.status(200).json({
        success: true,
        disputes: []
      });
    } else if (req.method === 'POST') {
      // Create new dispute
      const { description, type } = req.body;
      
      if (!description) {
        return res.status(400).json({ error: 'Description required' });
      }

      const dispute = {
        id: `dispute-${Date.now()}`,
        description,
        type: type || 'general',
        status: 'active',
        createdAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        dispute
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
}