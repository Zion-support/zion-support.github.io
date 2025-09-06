// Mock fraud heuristics utility
export function analyzeFraudPatterns(data: any): { riskScore: number; patterns: string[] } {
  // Mock implementation
  return {
    riskScore: Math.random() * 100,
    patterns: ['suspicious_activity', 'unusual_pattern']
  };
}

export function detectAnomalies(events: any[]): any[] {
  // Mock implementation
  return events.filter(() => Math.random() > 0.8);
}