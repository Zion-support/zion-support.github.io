import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { text, targets = ['en', 'es', 'fr', 'de'] } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Text to translate required' });
    }

    // Mock translations
    const translations = [];
    for (const lng of targets) {
      const langName = lng.startsWith('pt') ? 'Portuguese' : 
                      lng.startsWith('es') ? 'Spanish' : 
                      lng.startsWith('ar') ? 'Arabic' : 'English';
      
      translations.push({
        language: lng,
        languageName: langName,
        text: `[Translated to ${langName}] ${text}`,
        confidence: 0.95
      });
    }

    res.status(200).json({
      success: true,
      originalText: text,
      translations
    });
  } catch (error) {
    res.status(500).json({ error: 'Translation failed' });
  }
}