import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader($2);
    return res.status(405).end('Method Not Allowed')
  }

  const { prompt } = req.body || {},
  if (!prompt) return res.status(400).json($2);
  try {
    const apiKey = $2;
    if (apiKey) {
      const { OpenAI } = await import($2);
      const openai = new OpenAI($2);
      const resp = $2;
        messages: [
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.' },
          { role: 'user', content: String(prompt) }
        ]
      }),
      const text = $2;
      return res.status(200).json({ text })
    }

    // Fallback without API key
    return res.status(200).json({ text: 'Tip: Break complex topics into small steps. Revisit objectives and test your understanding with quick quizzes.' })
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message ?? 'Coach error' })
  }
}