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
    const { userId, file, documentType } = req.body;
    
    if (!userId || !file || !documentType) {
      return res.status(400).json({ error: 'User ID, file, and document type required' });
    }

    const profile = db[userId] || {};
    profile.documents = profile.documents || [];
    profile.documents.push({
      type: documentType,
      file,
      uploadedAt: new Date().toISOString()
    });
    
    db[userId] = profile;
    save(db);

    res.status(200).json({
      success: true,
      userId,
      documentType,
      uploadedAt: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload document' });
  }
}