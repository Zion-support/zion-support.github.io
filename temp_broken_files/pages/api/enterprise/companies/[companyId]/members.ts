import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { companyId } = req.query;
    
    if (!companyId || typeof companyId !== 'string') {
      return res.status(400).json({ error: 'Company ID required' });
    }

    if (req.method === 'GET') {
      // Return list of members
      const members = [
        {
          id: 'member-1',
          email: 'admin@company.com',
          role: 'admin',
          joinedAt: new Date().toISOString()
        }
      ];

      res.status(200).json({
        success: true,
        companyId,
        members
      });
    } else if (req.method === 'POST') {
      // Add new member
      const { email, role } = req.body;
      
      if (!email) {
        return res.status(400).json({ error: 'Email required' });
      }

      const member = {
        id: `member-${Date.now()}`,
        email,
        role: role || 'member',
        joinedAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        companyId,
        member
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
}