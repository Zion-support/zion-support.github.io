export interface HeuristicResult {
  severity: 'low' | 'medium' | 'high';
  score: number;
  reasons: string[];
}

export function analyzeContent(content: string, source: string): HeuristicResult {
  const reasons: string[] = [];
  let score = 0;

  // Check for suspicious patterns
  const suspiciousPatterns = [
    { pattern: /(?:contact|email|phone|whatsapp|telegram)\s+(?:me|us|directly)/i, weight: 2, reason: 'Contact information sharing' },
    { pattern: /(?:off.?platform|outside|external)\s+(?:payment|transaction)/i, weight: 3, reason: 'Off-platform payment request' },
    { pattern: /(?:free|no cost|gratis)\s+(?:trial|sample|demo)/i, weight: 1, reason: 'Free offer' },
    { pattern: /(?:urgent|asap|immediately)\s+(?:payment|money|transfer)/i, weight: 3, reason: 'Urgent payment request' },
    { pattern: /(?:crypto|bitcoin|ethereum|wallet)/i, weight: 2, reason: 'Cryptocurrency mention' },
    { pattern: /(?:investment|trading|profit|return)/i, weight: 2, reason: 'Investment language' },
    { pattern: /(?:click|link|url|website)/i, weight: 1, reason: 'External link' },
    { pattern: /(?:personal|private|confidential)/i, weight: 1, reason: 'Personal information request' }
  ];

  for (const { pattern, weight, reason } of suspiciousPatterns) {
    if (pattern.test(content)) {
      score += weight;
      reasons.push(reason);
    }
  }

  // Check content length (very short or very long messages are suspicious)
  if (content.length < 10) {
    score += 1;
    reasons.push('Very short message');
  } else if (content.length > 1000) {
    score += 1;
    reasons.push('Very long message');
  }

  // Check for excessive punctuation
  const punctuationRatio = (content.match(/[!?]{2,}/g) || []).length;
  if (punctuationRatio > 2) {
    score += 1;
    reasons.push('Excessive punctuation');
  }

  // Check for repeated characters
  const repeatedChars = content.match(/(.)\1{4,}/g);
  if (repeatedChars && repeatedChars.length > 0) {
    score += 1;
    reasons.push('Repeated characters');
  }

  // Source-specific checks
  if (source === 'message') {
    // Messages are more likely to be suspicious
    score += 1;
  }

  // Determine severity
  let severity: 'low' | 'medium' | 'high' = 'low';
  if (score >= 5) {
    severity = 'high';
  } else if (score >= 3) {
    severity = 'medium';
  }

  return {
    severity,
    score: Math.min(score, 10), // Cap at 10
    reasons: [...new Set(reasons)] // Remove duplicates
  };
}