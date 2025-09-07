<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  try {
    const { markdown, targetLanguage = $2;
    if (!markdown) return res.status(400).json($2);
    const openai = new OpenAI($2);
    const completion = await openai.chat.completions.create($2);
    const translated = $2;
    return res.status(200).json({ translated })
  } catch (error: any) {
    return res.status(500).json({ error: error ?.message || 'Translation failed' })
  }
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}