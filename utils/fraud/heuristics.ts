export interface HeuristicResult {
  severity: 'low' | 'medium' | 'high' | 'critical';
  score: number;
  reasons: string[];
  confidence: number;
}

export interface FraudEvent {
  source: string;
  userId?: string;
  content?: string;
  metadata?: Record<string, any>;
}

export function analyzeHeuristics(event: FraudEvent): HeuristicResult {
  const reasons: string[] = [];
  let score = 0;
  let confidence = 0.5;

  // Check for suspicious patterns in content
  if (event.content) {
    const content = event.content.toLowerCase();
    
    // Check for spam patterns
    if (content.includes('click here') || content.includes('free money')) {
      reasons.push('Contains spam-like phrases');
      score += 30;
    }
    
    // Check for personal information sharing
    if (content.includes('@gmail.com') || content.includes('@yahoo.com')) {
      reasons.push('Contains personal email addresses');
      score += 25;
    }
    
    // Check for payment-related suspicious content
    if (content.includes('paypal') || content.includes('venmo') || content.includes('cash app')) {
      reasons.push('Contains off-platform payment references');
      score += 40;
    }
    
    // Check for excessive repetition
    const words = content.split(' ');
    const wordCount = words.length;
    const uniqueWords = new Set(words).size;
    if (wordCount > 10 && uniqueWords / wordCount < 0.3) {
      reasons.push('Excessive repetition detected');
      score += 20;
    }
  }

  // Check for suspicious metadata
  if (event.metadata) {
    // Check for rapid posting
    if (event.metadata.timestamp && event.metadata.lastPostTime) {
      const timeDiff = event.metadata.timestamp - event.metadata.lastPostTime;
      if (timeDiff < 1000) { // Less than 1 second
        reasons.push('Rapid posting detected');
        score += 35;
      }
    }
    
    // Check for suspicious user agent
    if (event.metadata.userAgent && event.metadata.userAgent.includes('bot')) {
      reasons.push('Bot-like user agent detected');
      score += 25;
    }
  }

  // Check for source-specific patterns
  if (event.source === 'message') {
    // Messages are generally lower risk
    score *= 0.8;
  } else if (event.source === 'profile') {
    // Profile updates are medium risk
    score *= 1.2;
  } else if (event.source === 'job_posting') {
    // Job postings are higher risk
    score *= 1.5;
  }

  // Determine severity based on score
  let severity: 'low' | 'medium' | 'high' | 'critical';
  if (score < 20) {
    severity = 'low';
    confidence = 0.3;
  } else if (score < 50) {
    severity = 'medium';
    confidence = 0.6;
  } else if (score < 80) {
    severity = 'high';
    confidence = 0.8;
  } else {
    severity = 'critical';
    confidence = 0.9;
  }

  return {
    severity,
    score: Math.min(score, 100),
    reasons,
    confidence
  };
}

export function shouldAutoHide(result: HeuristicResult): boolean {
  return result.severity === 'critical' || 
         (result.severity === 'high' && result.confidence > 0.7);
}