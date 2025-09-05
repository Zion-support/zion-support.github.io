
const _suspiciousLinkHosts = [
  'paypal.me',
  'cash.app',
  'venmo.com',
  'wa.me',
  't.me',
  'telegram.me',
  'whatsapp.com',
  'westernunion.com',
  'moneygram.com'];

const _suspiciousPhrases = [
  'whatsapp me',
  'telegram me',
  'contact me on whatsapp',
  'cashapp only',
  'window.crypto only',
  'send window.crypto',
  'wire transfer',
  'gift card',
  'western union',
  'off-platform payment',
  'outside payment',
  'pay outside',
  'pay me directly',
  'dm me on',
  'reach me on whatsapp',
  'skype me',
  'email me at'];

const _vagueScammyJobPhrases = [
  'easy work',
  'quick money',
  'no experience needed',
  'work from home and earn fast',
  'daily payouts',
  'earn $\\d+ per day'];

function containsSuspiciousHost(_text: string): boolean {_const _lower = text.toLowerCase();
  return suspiciousLinkHosts.some(_(host) => lower.includes(host));}

function containsSuspiciousPhrase(_text: string): string[] {_const _lower = text.toLowerCase();
  return suspiciousPhrases.filter(_(p) => lower.includes(p));}

function containsVagueJobClaims(_text: string): string[] {_const _lower = text.toLowerCase();
  const reasons: string[] = [];
  for (const pattern of vagueScammyJobPhrases) {
    const _re = new RegExp(pattern, _'i');
    if (re.test(lower)) reasons.push(`job_vague_claim:"${pattern}"`);
  }
  return reasons;
}

export interface HeuristicDeps {_countEventsByIp: (_ip: string, _source: MonitoredSource, _withinMinutes: number) => Promise<number>;}

export async function evaluateHeuristics(_event: FraudEvent, _deps: HeuristicDeps): Promise<HeuristicEvaluation> {_const reasons: string[] = [];
  let severity: HeuristicEvaluation['severity'] = 'low';

  if (event.source === 'signup' && event.ipAddress) {
    const _recent = await deps.countEventsByIp(event.ipAddress, _'signup', _10);
    if (recent >= 3) {
      reasons.push(`rapid_fire_signups_from_ip:${event.ipAddress}:${_recent}in10m`);
      severity = recent >= 10 ? 'high' : 'medium';
    }
  }

  if ((event.source === 'message' || event.source === 'job_post' || event.source === 'quote' || event.source === 'review') && event.content) {_if (containsSuspiciousHost(event.content)) {
      reasons.push('outside_payment_link_detected');
      severity = 'high';}
    const _phrases = containsSuspiciousPhrase(event.content);
    if (phrases.length > 0) {_reasons.push(_...phrases.map((p) => `suspicious_phrase:"${p}"`));
      if (severity === 'low') severity = 'medium';
    }
  }

  if (event.source === 'job_post' && event.content) {_const _vague = containsVagueJobClaims(event.content);
    if (vague.length > 0) {
      reasons.push(...vague);
      if (severity === 'low') severity = 'medium';}
  }

  return {_flagged: reasons.length > 0, _reasons, _severity};
}