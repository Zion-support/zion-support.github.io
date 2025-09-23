export interface FraudEvent {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  timestamp: string;
}

export interface HeuristicEvaluation {
  score: number;
  flags: string[];
  recommendation: 'pass' | 'review' | 'block';
}

export interface MonitoredSource {
  type: 'email' | 'message' | 'profile' | 'review';
  id: string;
}

export function evaluateHeuristics(text: string, source: MonitoredSource): HeuristicEvaluation {
  const flags: string[] = [];
  let score = 0;

  // Check for suspicious patterns
  if (text.includes('urgent') || text.includes('immediately')) {
    flags.push('urgency_language');
    score += 20;
  }

  if (text.includes('click here') || text.includes('verify now')) {
    flags.push('action_required');
    score += 30;
  }

  if (text.includes('$') && text.includes('free')) {
    flags.push('money_offers');
    score += 25;
  }

  let recommendation: 'pass' | 'review' | 'block' = 'pass';
  if (score >= 50) {
    recommendation = 'block';
  } else if (score >= 25) {
    recommendation = 'review';
  }

  return {
    score,
    flags,
    recommendation
  };
}