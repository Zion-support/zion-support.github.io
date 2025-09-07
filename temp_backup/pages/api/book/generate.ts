import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json($2);
    return
  }

  const { meta, chapters } = req.body as { meta: any, chapters: { title: string, content?: string }[] },

  const apiKey = $2;
  if (!apiKey) {
    // Fallback: return structured placeholders
    const drafted = $2;
      content: `Draft notes for ${c.title} about ${meta?.title || 'the book'}...\n\n- Key idea 1\n- Key idea 2\n- Key idea 3`})),
    res.status(200).json($2);
    return
  }

  const client = new OpenAI($2);
  const system = `You are a book-writing assistant. Write concise but high-signal chapters for a visionary, systems-architecture book. Maintain clear structure, use short paragraphs, bullets where helpful, and end each chapter with 3 actionable principles.`,

  const drafted = [] as { title: string, content: string}[],
  for (const ch of chapters) {
    const prompt = $2;
    const completion = await client.chat.completions.create($2);
    const text = $2;
    drafted.push({ title: ch.title, content: text})
  }

  res.status(200).json({ chapters: drafted})
}