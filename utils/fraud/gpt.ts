import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export interface GPTFraudAnalysis {
  label: 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
  confidence: number;
  reasoning: string;
  suggestedActions: string[];
}

export async function analyzeWithGPT(event: any): Promise<GPTFraudAnalysis | null> {
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }

  try {
    const prompt = `Analyze this marketplace event for potential fraud or suspicious activity:

Event Details:
- Source: ${event.source}
- User ID: ${event.userId || 'N/A'}
- Content: ${event.content || 'N/A'}
- Metadata: ${JSON.stringify(event.metadata || {}, null, 2)}

Please analyze this event and respond with a JSON object containing:
- label: "SAFE", "SUSPICIOUS", or "DANGEROUS"
- confidence: number between 0 and 1
- reasoning: brief explanation of your analysis
- suggestedActions: array of recommended actions

Consider factors like:
- Spam or promotional content
- Personal information sharing
- Off-platform payment requests
- Suspicious patterns or behavior
- Content that violates marketplace policies

Respond only with valid JSON.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a fraud detection AI. Analyze marketplace events for suspicious activity and respond with JSON only.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.3,
      max_tokens: 500
    });

    const content = response.choices?.[0]?.message?.content;
    if (!content) {
      return null;
    }

    // Try to parse the JSON response
    const analysis = JSON.parse(content);
    
    // Validate the response structure
    if (!analysis.label || !['SAFE', 'SUSPICIOUS', 'DANGEROUS'].includes(analysis.label)) {
      return null;
    }

    return {
      label: analysis.label,
      confidence: Math.max(0, Math.min(1, analysis.confidence || 0.5)),
      reasoning: analysis.reasoning || 'No reasoning provided',
      suggestedActions: Array.isArray(analysis.suggestedActions) ? analysis.suggestedActions : []
    };
  } catch (error) {
    console.error('GPT fraud analysis error:', error);
    return null;
  }
}