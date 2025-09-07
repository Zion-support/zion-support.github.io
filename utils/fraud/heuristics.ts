export interface FraudCheckResult {
  isFraud: boolean;
  confidence: number;
  reasons: string[];
}

export function checkFraudHeuristics(data: any): FraudCheckResult {
  const reasons: string[] = [];
  let confidence = 0;

  // Check for suspicious patterns
  if (data.email && data.email.includes('+')) {
    reasons.push('Email contains suspicious characters');
    confidence += 0.3;
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