import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;
    const { file } = req.body;
    
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Dispute ID required' });
    }

    if (!file) {
      return res.status(400).json({ error: 'File required' });
    }

    // Mock file upload processing
    const safeName = file.name?.replace(/[^a-zA-Z0-9.-]/g, '_') || 'upload';
    const attachmentId = `${Date.now()}-${safeName}`;
    
    res.status(200).json({
      success: true,
      attachmentId,
      disputeId: id,
      fileName: safeName,
      fileSize: file.size || 0,
      mimeType: file.type || 'application/octet-stream'
    });
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
}