import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { proposalId, targetLanguage, content } = req.body;
    
    if (!proposalId || !targetLanguage || !content) {
      return res.status(400).json({ error: 'Proposal ID, target language, and content required' });
    }

    // Mock translation
    const translation = {
      id: `translation-${Date.now()}`,
      proposalId,
      targetLanguage,
      originalContent: content,
      translatedContent: `[Translated to ${targetLanguage}] ${content}`,
      translatedAt: new Date().toISOString(),
      translator: 'AI Translation Service',
      confidence: 0.95
    };

    res.status(200).json({
      success: true,
      translation
    });
  } catch (error) {
    res.status(500).json({ error: 'Translation failed' });
  }
}