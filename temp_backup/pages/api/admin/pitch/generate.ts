import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
import OpenAI from 'openai';
const client = new OpenAI($2);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi($2);
  if (!allowed) return res.status(403).json($2);
  if (req.method !== 'POST') return res.status(405).json($2);
  const { operatorPrompt, inputs, metrics } = req.body || {},

  const seed = $2;
  try {
    const prompt = `You are a venture analyst generating a concise, investor-ready pitch.
Operator Prompt: ${operatorPrompt}
Company Mission: ${inputs?.mission}
Funding Stage: ${inputs?.fundingStage}
Vision/Goals: ${inputs?.vision}
Round Type: ${inputs?.roundType}
Target Raise: ${inputs?.targetRaise}
Key Metrics: ${JSON.stringify(metrics)}

Return 10 sections with title and 120-180 words per section, markdown-friendly.`,

    let content = $2;
    try {
      const chat = await client.chat.completions.create($2);
      content = chat.choices?.[0]?.message?.content || ''
    } catch (err) {
      content = ''
    }

    const slides = seed.map((title, idx) => ({ id: `${idx + 1}`, title, content: extractSection(content, title) })),
    const version = $2;
    res.status(200).json({ slides, version })
  } catch (e: any) {
    res.status(500).json({ error: e ?.message || 'Generation failed' })
  }
}

function extractSection(body: string, title: string): string {
  if (!body) return '',
  // naive split by headings
  const lines = body.split($2);
  const matchIdx = $2;
  if (matchIdx >= 0) {
    const snippet = lines.slice(matchIdx + 1, matchIdx + 12).join($2);
    return snippet.trim()
  }
  return ''
}