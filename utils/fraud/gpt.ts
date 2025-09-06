export interface GptClassification {
  isFraud: boolean;
  confidence: number;
  reason: string;
  category: string;
}

export interface MonitoredSource {
  type: 'email' | 'message' | 'profile' | 'review';
  id: string;
}

export async function classifyWithGPT(
  text: string,
  source: MonitoredSource
): Promise<GptClassification> {
  // Mock implementation - in production, integrate with OpenAI API
  const isFraud = text.toLowerCase().includes('scam') || text.toLowerCase().includes('fake');
  
  return {
    isFraud,
    confidence: isFraud ? 0.8 : 0.1,
    reason: isFraud ? 'Suspicious keywords detected' : 'No fraud indicators found',
    category: isFraud ? 'suspicious' : 'legitimate'
  };
}