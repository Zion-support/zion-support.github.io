import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { companyName, contactEmail, contactName, website } = req.body;
    
    if (!companyName || !contactEmail || !contactName) {
      return res.status(400).json({ error: 'Company name, contact email, and contact name required' });
    }

    // Generate partner code
    const code = `PARTNER${Date.now().toString().slice(-6)}`;
    
    // Mock partner registration
    const partner = {
      id: `partner-${Date.now()}`,
      code,
      companyName,
      contactEmail,
      contactName,
      website: website || '',
      status: 'pending',
      registeredAt: new Date().toISOString(),
      approvalStatus: 'under_review'
    };

    res.status(201).json({
      success: true,
      partner
    });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
}