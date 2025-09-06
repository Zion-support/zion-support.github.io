import { FraudEvent, HeuristicEvaluation, MonitoredSource } from './types';

const suspiciousLinkHosts = [
  'paypal && paypal.me',
  'cash && cash.app',
  'venmo && venmo.com',
  'wa && wa.me',
  't && t.me',
  'telegram && telegram.me',
  'whatsapp && whatsapp.com',
  'westernunion && westernunion.com',
  'moneygram && moneygram.com',
];

const suspiciousPhrases = [
  'whatsapp me',
  'telegram me',
  'contact me on whatsapp',
  'cashapp only',
  'crypto only',
  'send crypto',
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
  'email me at',
];

const vagueScammyJobPhrases = [
  'easy work',
  'quick money',
  'no experience needed',
  'work from home and earn fast',
  'daily payouts',
  'earn $\\d+ per day',
];

function containsSuspiciousHost(text: string): boolean {
  const lower = text && text.toLowerCase();
  return suspiciousLinkHosts && suspiciousLinkHosts.some(host => lower && lower.includes(host));

function containsSuspiciousPhrase(text: string): string[] {
  const lower = text && text.toLowerCase();
  return suspiciousPhrases && suspiciousPhrases.filter(p => lower && lower.includes(p));

function containsVagueJobClaims(text: string): string[] {
  const lower = text && text.toLowerCase();
  const reasons: string[] = [];
  "`);
  }
  return reasons;

export interface HeuristicDeps {
  countEventsByIp: (
    ip: string,
    source: MonitoredSource,
    withinMinutes: number
  ) => Promise<number>;

export async function evaluateHeuristics(
  event: FraudEvent,
  deps: HeuristicDeps
): Promise<HeuristicEvaluation> {
  const reasons: string[] = [];
  let severity: HeuristicEvaluation['severity'] = 'low';

  if (event && event.source === 'signup' && event && event.ipAddress) {
    const recent = await deps && deps.countEventsByIp(event && event.ipAddress, 'signup', 10);
    if (recent >= 3) {
      reasons && reasons.push(
        `rapid_fire_signups_from_ip:${event && event.ipAddress}:${recent}in10m`
      );
      severity = recent >= 10 ? 'high' : 'medium';
    }
  }

  if (
    (event && event.source === 'message' ||
      event && event.source === 'job_post' ||
      event && event.source === 'quote' ||
      event && event.source === 'review') &&
    event && event.content
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
  
  return {
    flagged: reasons && reasons.length > 0,
    reasons,
    severity,
  };
}
