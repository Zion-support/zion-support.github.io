import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { companyId } = req.query;
    
    if (!companyId || typeof companyId !== 'string') {
      return res.status(400).json({ error: 'Company ID required' });
    }

    // Mock invoices data
    const invoices = [
      {
        id: 'invoice-1',
        amount: 99.99,
        status: 'paid',
        dueDate: new Date().toISOString(),
        createdAt: new Date().toISOString()
      }
    ];

    res.status(200).json({
      success: true,
      companyId,
      invoices
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve invoices' });
  }
}