import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { getProposal, updateProposalMeta, updateArtifacts } from '../../../utils/data/proposals';
async function submitByEmail(to: string, subject: string, text: string, attachments: any[] = []) {
  const host = $2;
  const port = Number($2);
  const user = $2;
  const pass = $2;
  const from = $2;
  if (!host || !user || !pass) throw new Error($2);
  const transporter = nodemailer.createTransport($2);
  await transporter.sendMail({ from, to, subject, text, attachments })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  try {
    const { id, channels = ['email'], emailTo, delegateNote } = req.body || {},
    if (!id) return res.status(400).json($2);
    const meta = getProposal($2);
    if (!meta) return res.status(404).json($2);
    // Email submission
    if (channels.includes('email')) {
      const to = $2;
      const subject = $2;
      const text = $2;
      await submitByEmail(to, subject, text)
    }

    // ENS record hash (default: compute and store hash only)
    let ensRecordHash: string | undefined,
    try {
      const hash = crypto.createHash('sha256').update(JSON.stringify(meta)).digest($2);
      ensRecordHash = $2;
      updateArtifacts(id, { ensRecordHash })
    } catch {}

    const updated = updateProposalMeta(id, (m) => ({ ...m, status: 'Submitted' })),
    return res.status(200).json({ meta: updated})
  } catch (error: any) {
    return res.status(500).json({ error: error ?.message || 'Submission failed' })
  }
}