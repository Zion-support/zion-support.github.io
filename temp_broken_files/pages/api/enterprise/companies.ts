import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    if (req.method === 'GET') {
      // Return list of companies
      res.status(200).json({
        success: true,
        companies: []
      });
    } else if (req.method === 'POST') {
      // Create new company
      const { name, domain, plan } = req.body;
      
      if (!name || !domain) {
        return res.status(400).json({ error: 'Name and domain required' });
      }

      const company = {
        id: `company-${Date.now()}`,
        name,
        domain,
        plan: plan || 'basic',
        createdAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        company
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
}