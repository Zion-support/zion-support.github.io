export interface FraudCheckResult {
  isFraud: boolean;
  confidence: number;
  reasons: string[];
}

<<<<<<< HEAD
function containsSuspiciousPhrase(text: string): string[] {
  return suspiciousPhrases.filter((p) => lower.includes(p))
}

function containsVagueJobClaims(text: string): string[] {
  const reasons: string[] = [],
  for (const pattern of vagueScammyJobPhrases) {
    const re = new RegExp($2);
    if (re.test(lower)) reasons.push(`job_vague_claim:"${pattern}"`)
  }
  return reasons
}

export interface HeuristicDeps {
  countEventsByIp: (ip: string, source: MonitoredSource, withinMinutes: number) => Promise<number>
}

export async function evaluateHeuristics(event: FraudEvent, deps: HeuristicDeps): Promise<HeuristicEvaluation> {
  let severity: HeuristicEvaluation['severity'] = 'low',

  if (event.source === 'signup' && event.ipAddress) {
    const recent = await deps.countEventsByIp($2);
    if (recent >= 3) {
      reasons.push($2);
      severity = recent >= 10 ? 'high' : 'medium'
    }
=======
export function checkFraudHeuristics(data: any): FraudCheckResult {
  const reasons: string[] = [];
  let confidence = 0;

  // Check for suspicious patterns
  if (data.email && data.email.includes('+')) {
    reasons.push('Email contains suspicious characters');
    confidence += 0.3;
>>>>>>> origin/chore/fix-lint-and-merge
  }

  if (data.phone && data.phone.length < 10) {
    reasons.push('Phone number too short');
    confidence += 0.2;
  }

  if (data.name && data.name.length < 2) {
    reasons.push('Name too short');
    confidence += 0.4;
  }

  if (data.ip && data.ip.startsWith('192.168.')) {
    reasons.push('Internal IP address');
    confidence += 0.1;
  }

  // Check for duplicate submissions
  if (data.submissionCount && data.submissionCount > 5) {
    reasons.push('Multiple submissions detected');
    confidence += 0.5;
  }

  const isFraud = confidence > 0.5;
  
  return {
    isFraud,
    confidence: Math.min(confidence, 1),
    reasons
  };
}