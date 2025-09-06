import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { id } = req.query;
    
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Dispute ID required' });
    }

    // Mock file download
    const fileName = `dispute-${id}-evidence.pdf`;
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    
    // Mock PDF content
    res.status(200).send('Mock PDF content');
  } catch (error) {
    res.status(500).json({ error: 'Download failed' });
  }
}