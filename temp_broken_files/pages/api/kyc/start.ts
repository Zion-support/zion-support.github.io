import type { NextApiRequest, NextApiResponse } from 'next';

const db: Record<string, any> = {};

function save(data: Record<string, any>) {
  // Mock save function
  console.log('Saving KYC data:', data);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, profile } = req.body;
    
    if (!userId || !profile) {
      return res.status(400).json({ error: 'User ID and profile required' });
    }

    db[userId] = profile;
    save(db);

    res.status(200).json({
      success: true,
      kycId: `kyc-${Date.now()}`,
      userId,
      status: 'started'
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to start KYC process' });
  }
}