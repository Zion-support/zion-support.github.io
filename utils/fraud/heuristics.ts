<<<<<<< HEAD
import { FraudEvent, HeuristicEvaluation, MonitoredSource } from './types';

const suspiciousLinkHosts = [
  'paypal.me',
  'cash.app',
  'venmo.com',
  'wa.me',
  't.me',
  'telegram.me',
  'whatsapp.com',
  'westernunion.com',
  'moneygram.com',
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
  const lower = text.toLowerCase();
  return suspiciousLinkHosts.some(host => lower.includes(host));

function containsSuspiciousPhrase(text: string): string[] {
  const lower = text.toLowerCase();
  return suspiciousPhrases.filter(p => lower.includes(p));

function containsVagueJobClaims(text: string): string[] {
  const lower = text.toLowerCase();
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

  if (event.source === 'signup' && event.ipAddress) {
    const recent = await deps.countEventsByIp(event.ipAddress, 'signup', 10);
    if (recent >= 3) {
      reasons.push(
        `rapid_fire_signups_from_ip:${event.ipAddress}:${recent}in10m`
      );
      severity = recent >= 10 ? 'high' : 'medium';
    }
  }

  if (
    (event.source === 'message' ||
      event.source === 'job_post' ||
      event.source === 'quote' ||
      event.source === 'review') &&
    event.content
  ) {
    if (containsSuspiciousHost(event.content)) {
      reasons.push('outside_payment_link_detected');
      severity = 'high';
    }
    const phrases = containsSuspiciousPhrase(event.content);
    if (phrases.length > 0) {
      reasons.push(...phrases.map(p => `suspicious_phrase:"${p}"`));
      if (severity === 'low') severity = 'medium';
    }
  }

  if (event.source === 'job_post' && event.content) {
    const vague = containsVagueJobClaims(event.content);
    if (vague.length > 0) {
      reasons.push(...vague);
      if (severity === 'low') severity = 'medium';
    }
  }

  return {
    flagged: reasons.length > 0,
    reasons,
    severity,
  };
=======
// Fraud detection heuristics utilities
export interface HeuristicResult {
  flagged: boolean;
  severity: 'low' | 'medium' | 'high' | 'critical';
  score: number; // 0-100
  reasons: string[];
  confidence: number; // 0-100
}

export interface HeuristicConfig {
  enabled: boolean;
  thresholds: {
    low: number;
    medium: number;
    high: number;
    critical: number;
  };
  rules: {
    [key: string]: {
      enabled: boolean;
      weight: number;
      threshold: number;
    };
  };
}

export interface FraudEvent {
  id: string;
  source: string;
  userId?: string;
  content?: string;
  metadata?: Record<string, any>;
  ipAddress: string;
  userAgent?: string;
  timestamp: number;
}

class HeuristicAnalyzer {
  private config: HeuristicConfig;

  constructor() {
    this.config = {
      enabled: true,
      thresholds: {
        low: 25,
        medium: 50,
        high: 75,
        critical: 90
      },
      rules: {
        suspicious_keywords: {
          enabled: true,
          weight: 20,
          threshold: 0.7
        },
        rapid_requests: {
          enabled: true,
          weight: 15,
          threshold: 0.8
        },
        unusual_patterns: {
          enabled: true,
          weight: 25,
          threshold: 0.6
        },
        ip_reputation: {
          enabled: true,
          weight: 30,
          threshold: 0.5
        },
        content_analysis: {
          enabled: true,
          weight: 20,
          threshold: 0.7
        }
      }
    };
  }

  async evaluateHeuristics(
    event: FraudEvent,
    context: {
      countEventsByIp: (ip: string, source: string, minutes: number) => Promise<number>;
    }
  ): Promise<HeuristicResult> {
    if (!this.config.enabled) {
      return {
        flagged: false,
        severity: 'low',
        score: 0,
        reasons: [],
        confidence: 100
      };
    }

    const results: Array<{ rule: string; score: number; confidence: number; reason: string }> = [];

    // Check suspicious keywords
    if (this.config.rules.suspicious_keywords.enabled) {
      const keywordResult = await this.checkSuspiciousKeywords(event);
      if (keywordResult.score > 0) {
        results.push({
          rule: 'suspicious_keywords',
          score: keywordResult.score,
          confidence: keywordResult.confidence,
          reason: keywordResult.reason
        });
      }
    }

    // Check rapid requests
    if (this.config.rules.rapid_requests.enabled) {
      const rapidResult = await this.checkRapidRequests(event, context);
      if (rapidResult.score > 0) {
        results.push({
          rule: 'rapid_requests',
          score: rapidResult.score,
          confidence: rapidResult.confidence,
          reason: rapidResult.reason
        });
      }
    }

    // Check unusual patterns
    if (this.config.rules.unusual_patterns.enabled) {
      const patternResult = await this.checkUnusualPatterns(event);
      if (patternResult.score > 0) {
        results.push({
          rule: 'unusual_patterns',
          score: patternResult.score,
          confidence: patternResult.confidence,
          reason: patternResult.reason
        });
      }
    }

    // Check IP reputation
    if (this.config.rules.ip_reputation.enabled) {
      const ipResult = await this.checkIpReputation(event);
      if (ipResult.score > 0) {
        results.push({
          rule: 'ip_reputation',
          score: ipResult.score,
          confidence: ipResult.confidence,
          reason: ipResult.reason
        });
      }
    }

    // Check content analysis
    if (this.config.rules.content_analysis.enabled && event.content) {
      const contentResult = await this.analyzeContent(event);
      if (contentResult.score > 0) {
        results.push({
          rule: 'content_analysis',
          score: contentResult.score,
          confidence: contentResult.confidence,
          reason: contentResult.reason
        });
      }
    }

    // Calculate overall score
    let totalScore = 0;
    let totalWeight = 0;
    let totalConfidence = 0;
    const reasons: string[] = [];

    for (const result of results) {
      const ruleConfig = this.config.rules[result.rule];
      const weightedScore = result.score * ruleConfig.weight;
      totalScore += weightedScore;
      totalWeight += ruleConfig.weight;
      totalConfidence += result.confidence;
      reasons.push(result.reason);
    }

    const finalScore = totalWeight > 0 ? totalScore / totalWeight : 0;
    const finalConfidence = results.length > 0 ? totalConfidence / results.length : 100;

    // Determine severity
    let severity: HeuristicResult['severity'] = 'low';
    if (finalScore >= this.config.thresholds.critical) {
      severity = 'critical';
    } else if (finalScore >= this.config.thresholds.high) {
      severity = 'high';
    } else if (finalScore >= this.config.thresholds.medium) {
      severity = 'medium';
    }

    return {
      flagged: finalScore >= this.config.thresholds.low,
      severity,
      score: Math.round(finalScore),
      reasons,
      confidence: Math.round(finalConfidence)
    };
  }

  private async checkSuspiciousKeywords(event: FraudEvent): Promise<{
    score: number;
    confidence: number;
    reason: string;
  }> {
    const suspiciousKeywords = [
      'bitcoin', 'crypto', 'money', 'cash', 'payment', 'transfer',
      'urgent', 'immediately', 'asap', 'emergency', 'help',
      'click here', 'verify', 'confirm', 'update', 'suspended',
      'phishing', 'scam', 'fraud', 'hack', 'steal'
    ];

    const content = (event.content || '').toLowerCase();
    const matches = suspiciousKeywords.filter(keyword => content.includes(keyword));
    
    if (matches.length === 0) {
      return { score: 0, confidence: 100, reason: '' };
    }

    const score = Math.min(100, (matches.length / suspiciousKeywords.length) * 100);
    const confidence = Math.min(100, matches.length * 20);

    return {
      score,
      confidence,
      reason: `Suspicious keywords detected: ${matches.join(', ')}`
    };
  }

  private async checkRapidRequests(
    event: FraudEvent,
    context: { countEventsByIp: (ip: string, source: string, minutes: number) => Promise<number> }
  ): Promise<{ score: number; confidence: number; reason: string }> {
    const count = await context.countEventsByIp(event.ipAddress, event.source, 5); // 5 minutes
    
    if (count <= 5) {
      return { score: 0, confidence: 100, reason: '' };
    }

    let score = 0;
    if (count >= 20) {
      score = 100;
    } else if (count >= 15) {
      score = 80;
    } else if (count >= 10) {
      score = 60;
    } else {
      score = 40;
    }

    return {
      score,
      confidence: Math.min(100, count * 5),
      reason: `Rapid requests detected: ${count} requests in 5 minutes`
    };
  }

  private async checkUnusualPatterns(event: FraudEvent): Promise<{
    score: number;
    confidence: number;
    reason: string;
  }> {
    const patterns: string[] = [];

    // Check for unusual user agent
    if (event.userAgent) {
      const userAgent = event.userAgent.toLowerCase();
      if (userAgent.includes('bot') || userAgent.includes('crawler') || userAgent.includes('spider')) {
        patterns.push('Bot-like user agent');
      }
      if (userAgent.length < 10) {
        patterns.push('Suspiciously short user agent');
      }
    }

    // Check for unusual content patterns
    if (event.content) {
      const content = event.content;
      if (content.length > 10000) {
        patterns.push('Unusually long content');
      }
      if (content.includes('http://') && content.split('http://').length > 5) {
        patterns.push('Multiple HTTP links');
      }
      if (content.match(/\d{4}-\d{4}-\d{4}-\d{4}/g)?.length > 0) {
        patterns.push('Credit card number pattern');
      }
    }

    // Check for unusual metadata
    if (event.metadata) {
      const metadata = event.metadata;
      if (metadata.referrer && metadata.referrer.includes('suspicious-site.com')) {
        patterns.push('Suspicious referrer');
      }
      if (metadata.language && !['en', 'es', 'fr', 'de', 'it'].includes(metadata.language)) {
        patterns.push('Unusual language setting');
      }
    }

    if (patterns.length === 0) {
      return { score: 0, confidence: 100, reason: '' };
    }

    const score = Math.min(100, patterns.length * 25);
    const confidence = Math.min(100, patterns.length * 30);

    return {
      score,
      confidence,
      reason: `Unusual patterns detected: ${patterns.join(', ')}`
    };
  }

  private async checkIpReputation(event: FraudEvent): Promise<{
    score: number;
    confidence: number;
    reason: string;
  }> {
    // Mock IP reputation check - in production, integrate with real IP reputation service
    const suspiciousIps = [
      '192.168.1.1', // Mock suspicious IP
      '10.0.0.1',    // Mock suspicious IP
    ];

    const isSuspicious = suspiciousIps.includes(event.ipAddress);
    
    if (!isSuspicious) {
      return { score: 0, confidence: 100, reason: '' };
    }

    return {
      score: 80,
      confidence: 90,
      reason: `IP address ${event.ipAddress} has suspicious reputation`
    };
  }

  private async analyzeContent(event: FraudEvent): Promise<{
    score: number;
    confidence: number;
    reason: string;
  }> {
    if (!event.content) {
      return { score: 0, confidence: 100, reason: '' };
    }

    const content = event.content.toLowerCase();
    const issues: string[] = [];

    // Check for spam patterns
    if (content.includes('free money') || content.includes('get rich quick')) {
      issues.push('Spam-like content');
    }

    // Check for phishing patterns
    if (content.includes('verify your account') || content.includes('click here to confirm')) {
      issues.push('Potential phishing content');
    }

    // Check for excessive capitalization
    const capsRatio = (content.match(/[A-Z]/g) || []).length / content.length;
    if (capsRatio > 0.5) {
      issues.push('Excessive capitalization');
    }

    // Check for excessive punctuation
    const punctRatio = (content.match(/[!]{2,}/g) || []).length;
    if (punctRatio > 3) {
      issues.push('Excessive punctuation');
    }

    if (issues.length === 0) {
      return { score: 0, confidence: 100, reason: '' };
    }

    const score = Math.min(100, issues.length * 30);
    const confidence = Math.min(100, issues.length * 25);

    return {
      score,
      confidence,
      reason: `Content analysis issues: ${issues.join(', ')}`
    };
  }

  // Configuration methods
  async updateConfig(newConfig: Partial<HeuristicConfig>): Promise<void> {
    this.config = { ...this.config, ...newConfig };
  }

  async getConfig(): Promise<HeuristicConfig> {
    return { ...this.config };
  }
}

// Singleton instance
export const heuristicAnalyzer = new HeuristicAnalyzer();

// Main function for external use
export async function evaluateHeuristics(
  event: FraudEvent,
  context: {
    countEventsByIp: (ip: string, source: string, minutes: number) => Promise<number>;
  }
): Promise<HeuristicResult> {
  return heuristicAnalyzer.evaluateHeuristics(event, context);
}

// Utility functions
export function createFraudEvent(
  source: string,
  userId: string | undefined,
  content: string | undefined,
  metadata: Record<string, any> | undefined,
  ipAddress: string
): FraudEvent {
  return {
    id: `fraud_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    source,
    userId,
    content,
    metadata,
    ipAddress,
    timestamp: Date.now()
  };
}

export function isHighRiskEvent(result: HeuristicResult): boolean {
  return result.severity === 'high' || result.severity === 'critical';
}

export function shouldBlockEvent(result: HeuristicResult): boolean {
  return result.severity === 'critical' && result.confidence > 80;
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
