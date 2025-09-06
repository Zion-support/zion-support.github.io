import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { file, projectId, description } = req.body;
    
    if (!file || !projectId) {
      return res.status(400).json({ error: 'File and project ID required' });
    }

    // Mock file upload
    const upload = {
      id: `upload-${Date.now()}`,
      projectId,
      fileName: file.name || 'uploaded-file',
      fileSize: file.size || 0,
      fileType: file.type || 'application/octet-stream',
      description: description || '',
      uploadedAt: new Date().toISOString(),
      url: `/uploads/${projectId}/${Date.now()}-${file.name}`
    };

    res.status(200).json({
      success: true,
      upload
    });
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
}