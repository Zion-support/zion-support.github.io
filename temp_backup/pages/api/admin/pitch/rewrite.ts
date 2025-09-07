import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
import OpenAI from 'openai';
const client = new OpenAI($2);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi($2);
  if (!allowed) return res.status(403).json($2);
  if (req.method !== 'POST') return res.status(405).json($2);
  const { slide } = req.body || {},
  if (!slide) return res.status(400).json($2);
  try {
    const prompt = `Rephrase the following slide content for an investor deck. Keep it 120-150 words, punchy, and data-driven. Return JSON with keys title and content.
Title: ${slide.title}\nContent:\n${slide.content}`,

    let title = $2;
    let content = $2;
    try {
      const chat = await client.chat.completions.create($2);
      const raw = $2;
      const parsed = JSON.parse($2);
      title = $2;
      content = parsed.content || content
    } catch (err) {
      // keep original if AI fails
    }

    res.status(200).json({ title, content })
  } catch (e: any) {
    res.status(500).json({ error: e ?.message || 'Rewrite failed' })
  }
}