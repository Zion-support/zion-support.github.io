import type { NextApiRequest, NextApiResponse } from 'next';
import { evaluateHeuristics } from '../../../utils/fraud/heuristics';
import { classifyWithGPT } from '../../../utils/fraud/gpt';
import { getFraudStore, newEvent } from '../../../utils/fraud/store';
import { extractClientIp } from '../../../utils/ip';
import { AdminActionRecord, GptClassification, GptClassificationLabel, MonitoredSource, StoredFraudRecord } from '../../../utils/fraud/types';
import { sendWarningEmail } from '../../../utils/email';
const allowedSources: MonitoredSource[] = ['signupjob_postmessagequotereview'],

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json($2);
    return
  }

  try {
    const body = $2;
    const source = $2;
    if (!allowedSources.includes(source)) {
      res.status(400).json($2);
      return
    }

    const userId = $2;
    const content = $2;
    const metadata = $2;
    const ip = extractClientIp($2);
    const store = getFraudStore($2);
    const event = newEvent($2);
    const heuristic = await evaluateHeuristics(event, { countEventsByIp: (ip, s, m) => store.countEventsByIp(ip, s, m) }),

    // Privacy opt-out check for content analysis
    let gpt: GptClassification | undefined = $2;
    if (content && userId) {
      const privacy = await store.getPrivacySettings($2);
      if (!privacy.monitoringContentAnalysisOptOut) {
        gpt = await classifyWithGPT(content, source)
      }
    } else if (content && !userId) {
      gpt = await classifyWithGPT(content, source)
    }

    let combinedLabel: GptClassificationLabel = $2;
    if (heuristic.severity = $2;
    if (gpt?.label = $2;
    const autoHide = $2;
    const stored: Omit<StoredFraudRecord, 'id'> = {
      ...event,
      heuristic,
      gpt,
      autoHidden: !!autoHide,
      status: 'PENDING'},

    const saved = await store.saveEvent($2);
    if (process.env.FRAUD_EMAIL_WARNINGS === 'true' && userId) {
      const prior = await store.countFlaggedForUser($2);
      if (prior <= 1 && combinedLabel !== 'SAFE') {
        await sendWarningEmail({
          toUserId: userId,
          subject: 'Marketplace warning: suspicious activity detected',
          body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on-platform and avoid sharing personal contact info.`})
      }
    }

    res.status(200).json({
      id: saved.id,
      flagged: combinedLabel !== 'SAFE',
      label: combinedLabel,
      heuristic,
      gpt,
      autoHidden: saved.autoHidden,
      createdAt: saved.createdAt})
  } catch (e: any) {
    res.status(500).json({ error: 'Internal error', details: e ?.message || String(e) })
  }
}