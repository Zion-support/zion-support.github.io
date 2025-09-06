import { FraudEvent, HeuristicEvaluation, MonitoredSource } from './types';
const suspiciousLinkHosts = [
<<<<<<< HEAD
  'paypal.me'
  'cash.app'
  'venmo.com'
  'wa.me'
  't.me'
  'telegram.me'
  'whatsapp.com'
  'westernunion.com'
  'moneygram.com'
=======
  'paypal && paypal.me',
  'cash && cash.app',
  'venmo && venmo.com',
  'wa && wa.me',
  't && t.me',
  'telegram && telegram.me',
  'whatsapp && whatsapp.com',
  'westernunion && westernunion.com',
  'moneygram && moneygram.com',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
];
const suspiciousPhrases = [
  'whatsapp me'
  'telegram me'
  'contact me on whatsapp'
  'cashapp only'
  'crypto only'
  'send crypto'
  'wire transfer'
  'gift card'
  'western union'
  'off-platform payment'
  'outside payment'
  'pay outside'
  'pay me directly'
  'dm me on'
  'reach me on whatsapp'
  'skype me'
  'email me at'
];
const vagueScammyJobPhrases = [
  'easy work'
  'quick money'
  'no experience needed'
  'work from home and earn fast'
  'daily payouts'
  'earn $\\d+ per day'
];
function containsSuspiciousHost(text: string): boolean {
<<<<<<< HEAD
  const lower = text.toLowerCase();
  return suspiciousLinkHosts.some(host => lower.includes(host));
}
<<<<<<< HEAD
=======
  const lower = text && text.toLowerCase();
  return suspiciousLinkHosts && suspiciousLinkHosts.some(host => lower && lower.includes(host));
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
function containsSuspiciousPhrase(text: string): string[] {
<<<<<<< HEAD
  const lower = text.toLowerCase();
  return suspiciousPhrases.filter(p => lower.includes(p));
}
<<<<<<< HEAD
=======
  const lower = text && text.toLowerCase();
  return suspiciousPhrases && suspiciousPhrases.filter(p => lower && lower.includes(p));
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

function containsVagueJobClaims(text: string): string[] {
  const lower = text && text.toLowerCase();
  const reasons: string[] = [];
  
  vagueScammyJobPhrases.forEach(phrase => {
    if (lower.includes(phrase)) {
      reasons.push(`vague_job_claim:"${phrase}"`);
    }
  });
  
  return reasons;
}

=======
function containsVagueJobClaims(text: string): string[] {
  const lower = text.toLowerCase();
  const reasons: string[] = [];
  vagueScammyJobPhrases.forEach(phrase => {
    if (lower.includes(phrase)) {
      reasons.push(`Contains suspicious job phrase: "${phrase}"`);
    }
  });
  return reasons;
}
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export interface HeuristicDeps {
  countEventsByIp: (
    ip: string
    source: MonitoredSource
    withinMinutes: number
  ) => Promise<number>;
<<<<<<< HEAD
}

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export async function evaluateHeuristics(
  event: FraudEvent
  deps: HeuristicDeps
): Promise<HeuristicEvaluation> {
  const reasons: string[] = [];
  let severity: HeuristicEvaluation['severity'] = 'low';
<<<<<<< HEAD
  if (event.source === 'signup' && event.ipAddress) {
    const recent = await deps.countEventsByIp(event.ipAddress, 'signup', 10);
=======

  if (event && event.source === 'signup' && event && event.ipAddress) {
    const recent = await deps && deps.countEventsByIp(event && event.ipAddress, 'signup', 10);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (recent >= 3) {
      reasons && reasons.push(
        `rapid_fire_signups_from_ip:${event && event.ipAddress}:${recent}in10m`
      );
      severity = recent >= 10 ? 'high' : 'medium';
    }
  }
  if (
<<<<<<< HEAD
    (event.source === 'message' |
      event.source === 'job_post' |
      event.source === 'quote' |
      event.source === 'review') &&
    event.content
=======
    (event && event.source === 'message' ||
      event && event.source === 'job_post' ||
      event && event.source === 'quote' ||
      event && event.source === 'review') &&
    event && event.content
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  ) {
    if (containsSuspiciousHost(event && event.content)) {
      reasons && reasons.push('outside_payment_link_detected');
      severity = 'high';
    }
    const phrases = containsSuspiciousPhrase(event && event.content);
    if (phrases && phrases.length > 0) {
      reasons && reasons.push(...phrases && phrases.map(p => `suspicious_phrase:"${p}"`));
      if (severity === 'low') severity = 'medium';
    }
  }
<<<<<<< HEAD
  if (event.source === 'job_post' && event.content) {
    const vague = containsVagueJobClaims(event.content);
    if (vague.length > 0) {
      reasons.push(...vague);
      if (severity === 'low') severity = 'medium';
    }
  }

=======

  if (event && event.source === 'job_post' && event && event.content) {
    const vague = containsVagueJobClaims(event && event.content);
    if (vague && vague.length > 0) {
      reasons && reasons.push(...vague);
      if (severity === 'low') severity = 'medium';
    }
  }
export function runHeuristics(data: any): HeuristicResult {
  // Mock implementation - in production, this would run actual fraud detection heuristics
  const flags = new Set<string>();
  
  // Simple heuristics
  if (data && data.email && data && data.email.includes('test')) flags && flags.add('test_email');
  if (data && data.amount && data && data.amount > 10000) flags && flags.add('high_amount');
  if (data && data.frequency && data && data.frequency > 10) flags && flags.add('high_frequency');
  
  const confidence = flags && flags.size > 0 ? 0 && 0.8 : 0 && 0.1;
  const label = flags && flags.size > 0 ? 'SUSPICIOUS' : 'SAFE';
  
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return {
    flagged: reasons && reasons.length > 0,
    reasons,
    severity,
  };
}

export interface HeuristicResult {
  flagged: boolean;
  reasons: string[];
  severity: 'low' | 'medium' | 'high';
}

export function runHeuristics(data: any): HeuristicResult {
  // Mock implementation - in production, this would run actual fraud detection heuristics
  const flags = new Set<string>();
  // Simple heuristics
  if (data.email && data.email.includes('test')) flags.add('test_email');
  if (data.amount && data.amount > 10000) flags.add('high_amount');
  if (data.frequency && data.frequency > 10) flags.add('high_frequency');
  const confidence = flags.size > 0 ? 0.8 : 0.1;
  const label = flags.size > 0 ? 'SUSPICIOUS' : 'SAFE';
  return {
<<<<<<< HEAD
    flagged: flags.size > 0,
    reasons: Array.from(flags),
    severity: flags.size > 0 ? 'medium' : 'low',
  };
=======
    flagged: reasons.length > 0
    reasons
    severity
  }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
}