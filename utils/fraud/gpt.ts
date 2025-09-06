<<<<<<< HEAD
<<<<<<< HEAD
import { GptClassification, MonitoredSource } from './types';

export async function classifyWithGPT(
  text: string,
  source: MonitoredSource
): Promise<GptClassification> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    const lower = text.toLowerCase();
    const looksDanger =
      /(cashapp|paypal\.me|venmo\.com|wa\.me|t\.me|whatsapp|telegram|western union|gift card|crypto only|outside payment)/.test(
        lower
      );
    return {
      label: looksDanger ? 'DANGEROUS' : 'SUSPICIOUS',
      reason: looksDanger
        ? 'Heuristic fallback matched high-risk terms'
        : 'Heuristic fallback matched suspicious language',
      confidence: looksDanger ? 0.7 : 0.5,
    };
  }

  const { OpenAI } = await import('openai');
  const client = new OpenAI({ apiKey });

  const systemPrompt =
    'You are a strict fraud/spam/phishing detector for a marketplace. Respond ONLY in strict JSON: {"label":"SAFE|SUSPICIOUS|DANGEROUS","reason":"short","confidence":0-1}. Consider off-platform payments, scammy/vague job posts, phishing, or social-engineering.';
  const userPrompt = `Source: ${source}\n\nText:\n${text}\n\nAnalyze this message for signs of fraud, spam, or phishing. Respond: SAFE / SUSPICIOUS / DANGEROUS with a short reason.`;

  const completion = await client.chat.completions.create({
    model: process.env.FRAUD_GPT_MODEL || 'gpt-4o-mini',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    temperature: 0,
    response_format: { type: 'json_object' as const },
  });

  const content = completion.choices[0]?.message?.content ?? '{}';
  try {
    const parsed = JSON.parse(content);
    const label = (parsed.label as string)?.toUpperCase?.();
    if (label !== 'SAFE' && label !== 'SUSPICIOUS' && label !== 'DANGEROUS') {
      return {
        label: 'SUSPICIOUS',
        reason: 'Unrecognized label from GPT',
        confidence: 0.5,
      };
    }
    const confidence =
      typeof parsed.confidence === 'number'
        ? Math.max(0, Math.min(1, parsed.confidence))
        : 0.6;
    return {
      label,
      reason: parsed.reason || 'No reason provided',
      confidence,
    } as GptClassification;
  } catch {
    return {
      label: 'SUSPICIOUS',
      reason: 'Invalid JSON from GPT',
      confidence: 0.5,
    };
<<<<<<< HEAD
  }
=======
  }
=======
// GPT-based fraud classification utilities
export interface GptClassification {
  label: 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
  confidence: number; // 0-100
  reasoning: string;
  riskFactors: string[];
  recommendations: string[];
}

export interface GptConfig {
  enabled: boolean;
  model: string;
  temperature: number;
  maxTokens: number;
  timeout: number; // milliseconds
  retryAttempts: number;
  apiKey?: string;
}

class GptClassifier {
  private config: GptConfig;

  constructor() {
    this.config = {
      enabled: true,
      model: 'gpt-4o-mini',
      temperature: 0.3,
      maxTokens: 500,
      timeout: 10000,
      retryAttempts: 3,
      apiKey: process.env.OPENAI_API_KEY
    };
  }

  async classifyWithGPT(content: string, source: string): Promise<GptClassification> {
    if (!this.config.enabled || !this.config.apiKey) {
      return this.getDefaultClassification();
    }

    try {
      const prompt = this.buildPrompt(content, source);
      const response = await this.callOpenAI(prompt);
      return this.parseResponse(response);
    } catch (error) {
      console.error('GPT classification error:', error);
      return this.getDefaultClassification();
    }
  }

  private buildPrompt(content: string, source: string): string {
    return `Analyze the following content for potential fraud, spam, or malicious intent. Consider the source context and content characteristics.

Source: ${source}
Content: ${content.substring(0, 2000)} // Truncate for token limits

Please classify this content as one of:
- SAFE: Legitimate, normal content
- SUSPICIOUS: Potentially problematic but not clearly malicious
- DANGEROUS: Clearly malicious, fraudulent, or harmful

Consider these factors:
1. Language patterns (spam, phishing, scams)
2. Urgency indicators (urgent, immediate, emergency)
3. Financial references (money, payment, transfer, crypto)
4. Suspicious links or requests
5. Unusual formatting or capitalization
6. Threatening or manipulative language
7. Context appropriateness for the source

Respond in JSON format:
{
  "label": "SAFE|SUSPICIOUS|DANGEROUS",
  "confidence": 0-100,
  "reasoning": "Brief explanation of the classification",
  "riskFactors": ["list", "of", "identified", "risk", "factors"],
  "recommendations": ["list", "of", "recommended", "actions"]
}`;
  }

  private async callOpenAI(prompt: string): Promise<string> {
    const { OpenAI } = await import('openai');
    const openai = new OpenAI({ apiKey: this.config.apiKey });

    const response = await openai.chat.completions.create({
      model: this.config.model,
      messages: [
        {
          role: 'system',
          content: 'You are an expert fraud detection AI. Analyze content for potential fraud, spam, or malicious intent. Always respond with valid JSON.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: this.config.temperature,
      max_tokens: this.config.maxTokens,
      timeout: this.config.timeout
    });

    return response.choices[0]?.message?.content || '';
  }

  private parseResponse(response: string): GptClassification {
    try {
      const parsed = JSON.parse(response);
      
      // Validate the response structure
      if (!parsed.label || !['SAFE', 'SUSPICIOUS', 'DANGEROUS'].includes(parsed.label)) {
        throw new Error('Invalid label in response');
      }

      return {
        label: parsed.label,
        confidence: Math.max(0, Math.min(100, parsed.confidence || 50)),
        reasoning: parsed.reasoning || 'No reasoning provided',
        riskFactors: Array.isArray(parsed.riskFactors) ? parsed.riskFactors : [],
        recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations : []
      };
    } catch (error) {
      console.error('Failed to parse GPT response:', error);
      return this.getDefaultClassification();
    }
  }

  private getDefaultClassification(): GptClassification {
    return {
      label: 'SAFE',
      confidence: 50,
      reasoning: 'Default classification due to error or disabled service',
      riskFactors: [],
      recommendations: ['Manual review recommended']
    };
  }

  // Configuration methods
  async updateConfig(newConfig: Partial<GptConfig>): Promise<void> {
    this.config = { ...this.config, ...newConfig };
  }

  async getConfig(): Promise<GptConfig> {
    return { ...this.config };
  }

  // Utility methods
  async isEnabled(): Promise<boolean> {
    return this.config.enabled && !!this.config.apiKey;
  }

  async testConnection(): Promise<boolean> {
    try {
      const testPrompt = 'Test connection';
      await this.callOpenAI(testPrompt);
      return true;
    } catch (error) {
      console.error('GPT connection test failed:', error);
      return false;
    }
  }
}

// Singleton instance
export const gptClassifier = new GptClassifier();

// Main function for external use
export async function classifyWithGPT(content: string, source: string): Promise<GptClassification> {
  return gptClassifier.classifyWithGPT(content, source);
}

// Utility functions
export function isDangerousClassification(classification: GptClassification): boolean {
  return classification.label === 'DANGEROUS' && classification.confidence > 70;
}

export function isSuspiciousClassification(classification: GptClassification): boolean {
  return classification.label === 'SUSPICIOUS' && classification.confidence > 60;
}

export function shouldEscalateToHuman(classification: GptClassification): boolean {
  return classification.label === 'DANGEROUS' || 
         (classification.label === 'SUSPICIOUS' && classification.confidence > 80);
}

export function getClassificationColor(label: GptClassification['label']): string {
  const colors = {
    SAFE: 'green',
    SUSPICIOUS: 'yellow',
    DANGEROUS: 'red'
  };
  return colors[label];
}

export function formatClassificationSummary(classification: GptClassification): string {
  return `${classification.label} (${classification.confidence}% confidence) - ${classification.reasoning}`;
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
