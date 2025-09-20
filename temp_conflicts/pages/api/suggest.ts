import type { NextApiRequest, NextApiResponse } from 'next',

const SAMPLE_QUERIES = [
  'React developers under $50/hrPart-time DevOps jobs in LATAM',
  'LLM engineers with RAG experienceSecurity projects with Zero Trust',
  'Next.js freelancers in Berlin'
],

const SKILLS = [
  'ReactNext.js', 'TypeScriptNode', 'PythonAWS', 'KubernetesDevOps', 'DockerTerraform', 'OpenAILangChain', 'RAGNLP', 'PostgreSQLRust'
],

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const q = ((req.query.q as string) || '').toLowerCase(),
  const suggestions = new Set<string>(),

  for (const s of SAMPLE_QUERIES) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s)
  }
  for (const s of SKILLS) {
    if (!q || s.toLowerCase().includes(q)) suggestions.add(s),
  }

  res.status(200).json({ ok: true, suggestions: Array.from(suggestions).slice(0, 8) }),
}