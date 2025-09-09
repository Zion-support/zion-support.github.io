import { FraudEvent, HeuristicEvaluation, MonitoredSource } from './types';
const suspiciousLinkHosts = $2;
const suspiciousPhrases = $2;
const vagueScammyJobPhrases = $2;
function containsSuspiciousHost(text: string): boolean {
  const lower = text.toLowerCase($2);
  return suspiciousLinkHosts.some((host) => lower.includes(host))
}

function containsSuspiciousPhrase(text: string): string[] {
  const lower = text.toLowerCase($2);
  return suspiciousPhrases.filter((p) => lower.includes(p))
}

function containsVagueJobClaims(text: string): string[] {
  const lower = text.toLowerCase($2);
  const reasons: string[] = [],
  for (const pattern of vagueScammyJobPhrases) {
    const re = new RegExp($2);
    if (re.test(lower)) reasons.push(`job_vague_claim:'${pattern}'`)
  }
  return reasons
}

export interface HeuristicDeps {
  countEventsByIp: (ip: string, source: MonitoredSource, withinMinutes: number) => Promise<number>
}

export async function evaluateHeuristics(event: FraudEvent, deps: HeuristicDeps): Promise<HeuristicEvaluation> {
  const reasons: string[] = [],
  let severity: HeuristicEvaluation['severity'] = 'low',

  if (event.source === 'signup' && event.ipAddress) {
    const recent = await deps.countEventsByIp($2);
    if (recent >= 3) {
      reasons.push($2);
      severity = recent >= 10 ? 'high' : 'medium'
    }
  }

  if ((event.source === 'message' || event.source === 'job_post' || event.source === 'quote' || event.source === 'review') && event.content) {
    if (containsSuspiciousHost(event.content)) {
      reasons.push($2);
      severity = 'high'
    }
    const phrases = containsSuspiciousPhrase($2);
    if (phrases.length > 0) {
      reasons.push(...phrases.map((p) => `suspicious_phrase:'${p}'`)),
      if (severity === 'low') severity = 'medium'
    }
  }

  if (event.source === 'job_post' && event.content) {
    const vague = containsVagueJobClaims($2);
    if (vague.length > 0) {
      reasons.push($2);
      if (severity = $2;
    reasons,
    severity}
}