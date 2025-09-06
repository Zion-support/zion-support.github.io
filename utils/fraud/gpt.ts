import OpenAI from 'openai';

export interface GPTResult {
  label: 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
  confidence: number;
  reasoning: string;
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function analyzeWithGPT(content: string, source: string): Promise<GPTResult | null> {
  if (!process.env.OPENAI_API_KEY) {
    return null;
  }

  try {
    const prompt = `Analyze this marketplace content for fraud, spam, or policy violations:

Content: "${content}"
Source: ${source}

Classify as:
- SAFE: Normal marketplace content
- SUSPICIOUS: Potentially problematic but not clearly violating
- DANGEROUS: Clear fraud, spam, or policy violation

Respond with JSON only:
{
  "label": "SAFE|SUSPICIOUS|DANGEROUS",
  "confidence": 0.0-1.0,
  "reasoning": "Brief explanation"
}`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.1,
      max_tokens: 200
    });

    const result = response.choices?.[0]?.message?.content;
    if (!result) return null;

    const parsed = JSON.parse(result);
    return {
      label: parsed.label || 'SAFE',
      confidence: parsed.confidence || 0.5,
      reasoning: parsed.reasoning || 'No reasoning provided'
    };
  } catch (error) {
    console.error('GPT analysis failed:', error);
    return null;
  }
}