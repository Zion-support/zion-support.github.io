import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { description, context } = req.body;
    
    if (!description) {
      return res.status(400).json({ error: 'Description required' });
    }

    // Mock AI wireframe suggestion
    const suggestion = {
      id: `wireframe-${Date.now()}`,
      description,
      context: context || 'general',
      components: [
        { type: 'header', description: 'Navigation header' },
        { type: 'content', description: 'Main content area' },
        { type: 'footer', description: 'Footer section' }
      ],
      createdAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      suggestion
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate wireframe suggestion' });
  }
}