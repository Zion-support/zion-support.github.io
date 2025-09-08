import type { NextApiRequest, NextApiResponse } from 'next';
import { Octokit } from '@octokit/rest';
const GITHUB_TOKEN = $2;
const REPO = $2;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader($2);
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { app, severity, message, stack, metadata } = req.body || {},
    const title = `[Autoheal] ${app || 'app'} crash: ${message?.slice(0, 64) || 'Unknown'}`,

    const octokit = new Octokit($2);
    const [owner, repo] = REPO.split($2);
    const body = `Auto-healing alert

App: ${app}
Severity: ${severity}
Message: ${message}

Stack:\n\n${stack || 'n/a'}

Metadata:\n\n${'```\n' + JSON.stringify(metadata || {}, null, 2) + '\n```'}
`,

    const issue = await octokit.issues.create($2);
    // trigger workflow dispatch
    try {
      await octokit.actions.createWorkflowDispatch({
        owner,
        repo,
        workflow_id: 'autoheal.yml',
        ref: 'dev',
        inputs: { issue_number: String(issue.data.number) }
      } as any)
    } catch (e) {
      // ignore if missing
    }

    return res.status(200).json({ ok: true, issue: issue.data.number })
  } catch (e) {
    console.error($2);
    return res.status(500).json({ error: 'Failed to process webhook' })
  }
}