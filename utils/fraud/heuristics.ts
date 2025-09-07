// Fraud detection heuristics
export interface HeuristicAnalysis {
  severity: 'low' | 'medium' | 'high';
  reasons: string[];
  confidence: number;
}

export interface FraudPattern {
  pattern: RegExp;
  severity: 'low' | 'medium' | 'high';
  reason: string;
  weight: number;
}

const FRAUD_PATTERNS: FraudPattern[] = [
  // Contact information patterns
  {
    pattern: /(?:phone|call|text|whatsapp|telegram|signal)\s*:?\s*[\+]?[0-9\s\-\(\)]{10,}/gi,
    severity: 'medium',
    reason: 'Contains phone number or contact request',
    weight: 0.7
  },
  {
    pattern: /(?:email|e-mail|contact)\s*:?\s*[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/gi,
    severity: 'medium',
    reason: 'Contains email address',
    weight: 0.6
  },
  {
    pattern: /(?:skype|discord|zoom|meet|hangouts)\s*:?\s*[a-zA-Z0-9._-]+/gi,
    severity: 'low',
    reason: 'Contains external communication platform',
    weight: 0.4
  },

  // Payment patterns
  {
    pattern: /(?:paypal|venmo|cashapp|zelle|wire|transfer)\s*:?\s*[a-zA-Z0-9@._-]+/gi,
    severity: 'high',
    reason: 'Contains external payment method',
    weight: 0.9
  },
  {
    pattern: /(?:bitcoin|btc|ethereum|eth|crypto|wallet)\s*:?\s*[a-zA-Z0-9]{20,}/gi,
    severity: 'high',
    reason: 'Contains cryptocurrency information',
    weight: 0.9
  },
  {
    pattern: /(?:bank|account|routing|swift|iban)\s*:?\s*[0-9\s-]{8,}/gi,
    severity: 'high',
    reason: 'Contains banking information',
    weight: 0.9
  },

  // Suspicious language patterns
  {
    pattern: /(?:off.?platform|outside|external|direct|private|personal)\s+(?:payment|pay|transaction|deal)/gi,
    severity: 'high',
    reason: 'Suggests off-platform transactions',
    weight: 0.8
  },
  {
    pattern: /(?:urgent|asap|immediately|quick|fast)\s+(?:payment|money|cash)/gi,
    severity: 'medium',
    reason: 'Urgent payment request',
    weight: 0.6
  },
  {
    pattern: /(?:free|gift|bonus|extra)\s+(?:money|cash|payment|reward)/gi,
    severity: 'medium',
    reason: 'Suspicious free money offer',
    weight: 0.5
  },

  // Spam patterns
  {
    pattern: /(?:click|visit|go to|check out)\s+(?:this|the)\s+(?:link|url|website)/gi,
    severity: 'low',
    reason: 'Contains link request',
    weight: 0.3
  },
  {
    pattern: /(?:winner|congratulations|selected|chosen)\s+(?:you|your)/gi,
    severity: 'medium',
    reason: 'Suspicious winner notification',
    weight: 0.6
  }
];

export function analyzeHeuristics(content: string, metadata: Record<string, any> = {}): HeuristicAnalysis {
  const reasons: string[] = [];
  let totalWeight = 0;
  let maxSeverity: 'low' | 'medium' | 'high' = 'low';

  // Check content against patterns
  for (const pattern of FRAUD_PATTERNS) {
    const matches = content.match(pattern.pattern);
    if (matches) {
      reasons.push(`${pattern.reason} (${matches.length} matches)`);
      totalWeight += pattern.weight * matches.length;
      
      // Update max severity
      if (pattern.severity === 'high' || (pattern.severity === 'medium' && maxSeverity === 'low')) {
        maxSeverity = pattern.severity;
      }
    }
  }

  // Additional heuristics based on metadata
  if (metadata.userId) {
    // Check for rapid posting
    if (metadata.postCount && metadata.postCount > 10) {
      reasons.push('High posting frequency');
      totalWeight += 0.3;
    }
  }

  // Check for suspicious timing (e.g., very short messages)
  if (content.length < 10) {
    reasons.push('Very short message');
    totalWeight += 0.2;
  }

  // Check for excessive repetition
  const words = content.toLowerCase().split(/\s+/);
  const wordCounts = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const maxWordCount = Math.max(...Object.values(wordCounts));
  if (maxWordCount > 3) {
    reasons.push('Excessive word repetition');
    totalWeight += 0.4;
  }

  // Calculate confidence based on weight
  let confidence = Math.min(totalWeight, 1.0);
  
  // Adjust severity based on confidence
  if (confidence > 0.7) {
    maxSeverity = 'high';
  } else if (confidence > 0.4) {
    maxSeverity = 'medium';
  } else {
    maxSeverity = 'low';
  }

  return {
    severity: maxSeverity,
    reasons,
    confidence
  };
}

export function isHighRisk(content: string, metadata: Record<string, any> = {}): boolean {
  const analysis = analyzeHeuristics(content, metadata);
  return analysis.severity === 'high' && analysis.confidence > 0.7;
}

export function getRiskScore(content: string, metadata: Record<string, any> = {}): number {
  const analysis = analyzeHeuristics(content, metadata);
  return analysis.confidence;
}