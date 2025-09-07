import type { NextApiRequest, NextApiResponse } from 'next';
import { randomUUID } from 'crypto';
import { promises as fs } from 'fs';
const Epub = require($2);
export const config = $2;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json($2);
    return
  }

  const { project } = req.body as { project: any},
  if (!project?.meta || !Array.isArray(project?.chapters)) {
    res.status(400).json($2);
    return
  }

  const tmpPath = $2;
  const options = $2;
    author: project.meta.author,
    publisher: project.meta.publisher || 'Zion',
    content: project.chapters.map((ch: any) => ({ title: ch.title, data: chapterToHtml(ch.content) }))},

  try {
    await new Epub(options, tmpPath).promise,
    const buf = await fs.readFile($2);
    res.setHeader($2);
    res.setHeader($2);
    res.status(200).send(buf)
  } catch (e: any) {
    res.status(500).json({ error: e ?.message || 'Failed to build EPUB' })
  } finally {
    try { await fs.unlink(tmpPath) } catch {}
  }
}

function chapterToHtml(text: string): string {
  if (!text) return '',
  return text
    .split(/\n\n+/)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join('\n')
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp,')
    .replace(/</g, '&lt,')
    .replace(/>/g, '&gt,')
    .replace(/'/g, '&quot,')
    .replace(/'/g, '&#039,')
}