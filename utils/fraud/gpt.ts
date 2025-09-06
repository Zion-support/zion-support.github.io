export interface GptResult {
  label: string;
  confidence: number;
  reasoning: string;
}

export async function analyzeWithGpt(data: any): Promise<GptResult> {
  // Mock implementation - in production, this would call OpenAI API
  const suspicious = data.description && data.description.toLowerCase().includes('fraud');
  
  return {
    label: suspicious ? 'SUSPICIOUS' : 'SAFE',
    confidence: suspicious ? 0.9 : 0.1,
    reasoning: suspicious ? 'GPT detected suspicious language' : 'No suspicious patterns detected'
  };
}
