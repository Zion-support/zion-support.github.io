// GPT-based fraud detection
import OpenAI from 'openai';

export interface GPTAnalysis {
  label: 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
  reasoning: string;
  confidence: number;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function analyzeWithGPT(
  content: string,
  metadata: Record<string, any> = {}
): Promise<GPTAnalysis | null> {
  if (!process.env.OPENAI_API_KEY) {
    console.warn('OpenAI API key not configured, skipping GPT analysis');
    return null;
  }

  try {
    const prompt = `Analyze the following content for potential fraud or suspicious activity. Consider:
1. Requests for off-platform communication or payments
2. Attempts to share personal contact information
3. Suspicious payment requests or methods
4. Spam or phishing attempts
5. Urgent or high-pressure tactics

Content: "${content}"

Metadata: ${JSON.stringify(metadata, null, 2)}

Respond with a JSON object containing:
- label: "SAFE", "SUSPICIOUS", or "DANGEROUS"
- reasoning: Brief explanation of your analysis
- confidence: Number between 0 and 1 indicating confidence level

Example response:
{
  "label": "SUSPICIOUS",
  "reasoning": "Contains request for external communication",
  "confidence": 0.8
}`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a fraud detection AI. Analyze content for suspicious activity and respond with valid JSON only.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.1,
      max_tokens: 200
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    // Parse JSON response
    const analysis = JSON.parse(content);
    
    // Validate response format
    if (!analysis.label || !analysis.reasoning || typeof analysis.confidence !== 'number') {
      throw new Error('Invalid response format from OpenAI');
    }

    // Ensure label is valid
    if (!['SAFE', 'SUSPICIOUS', 'DANGEROUS'].includes(analysis.label)) {
      analysis.label = 'SAFE';
    }

    // Ensure confidence is between 0 and 1
    analysis.confidence = Math.max(0, Math.min(1, analysis.confidence));

    return analysis as GPTAnalysis;

  } catch (error) {
    console.error('GPT analysis failed:', error);
    return null;
  }
}

export async function batchAnalyzeWithGPT(
  contents: Array<{ content: string; metadata: Record<string, any> }>
): Promise<Array<GPTAnalysis | null>> {
  const results: Array<GPTAnalysis | null> = [];
  
  // Process in batches to avoid rate limits
  const batchSize = 5;
  for (let i = 0; i < contents.length; i += batchSize) {
    const batch = contents.slice(i, i + batchSize);
    const batchPromises = batch.map(item => analyzeWithGPT(item.content, item.metadata));
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);
    
    // Add delay between batches to respect rate limits
    if (i + batchSize < contents.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  return results;
}

export function isDangerous(analysis: GPTAnalysis): boolean {
  return analysis.label === 'DANGEROUS' && analysis.confidence > 0.7;
}

export function isSuspicious(analysis: GPTAnalysis): boolean {
  return analysis.label === 'SUSPICIOUS' && analysis.confidence > 0.5;
}

export function isSafe(analysis: GPTAnalysis): boolean {
  return analysis.label === 'SAFE' && analysis.confidence > 0.5;
}