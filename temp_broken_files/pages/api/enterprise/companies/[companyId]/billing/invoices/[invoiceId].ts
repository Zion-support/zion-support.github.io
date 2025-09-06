import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { companyId, invoiceId } = req.query;
    
    if (!companyId || typeof companyId !== 'string') {
      return res.status(400).json({ error: 'Company ID required' });
    }

    if (!invoiceId || typeof invoiceId !== 'string') {
      return res.status(400).json({ error: 'Invoice ID required' });
    }

    // Mock invoice PDF generation
    const pdfBuffer = Buffer.from('Mock PDF content');
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="invoice-${invoiceId}.pdf"`);
    res.status(200).send(pdfBuffer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate invoice PDF' });
  }
}