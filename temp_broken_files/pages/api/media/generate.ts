import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { prompt, type, style } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt required' });
    }

    // Mock media generation
    const media = {
      id: `media-${Date.now()}`,
      prompt,
      type: type || 'image',
      style: style || 'realistic',
      url: `/generated/${Date.now()}-${Math.random().toString(36).substr(2, 9)}.jpg`,
      generatedAt: new Date().toISOString(),
      status: 'completed'
    };

    res.status(200).json({
      success: true,
      media
    });
  } catch (error) {
    res.status(500).json({ error: 'Media generation failed' });
  }
}