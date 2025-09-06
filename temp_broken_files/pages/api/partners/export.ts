import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    // Mock partners data
    const partners = [
      {
        id: 'partner-1',
        name: 'Tech Solutions Inc',
        email: 'contact@techsolutions.com',
        status: 'active',
        joinedAt: '2024-01-15',
        revenue: 50000
      },
      {
        id: 'partner-2',
        name: 'Digital Agency',
        email: 'hello@digitalagency.com',
        status: 'active',
        joinedAt: '2024-02-01',
        revenue: 75000
      }
    ];

    // Generate CSV
    const csv = [
      'ID,Name,Email,Status,Joined At,Revenue',
      ...partners.map(p => `${p.id},${p.name},${p.email},${p.status},${p.joinedAt},${p.revenue}`)
    ].join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="partners.csv"');
    res.status(200).send(csv);
  } catch (e: any) {
    res.status(500).json({ error: 'Export failed' });
  }
}