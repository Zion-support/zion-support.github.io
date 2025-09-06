// Mock GPT utility for fraud detection
export async function analyzeWithGPT(data: any): Promise<{ riskScore: number; reasoning: string }> {
  // Mock implementation
  return {
    riskScore: Math.random() * 100,
    reasoning: 'Mock GPT analysis result'
  };
}