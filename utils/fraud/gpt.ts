<<<<<<< HEAD
import { GptClassification, MonitoredSource } from './types';
export async function classifyWithGPT(
  text: string
  source: MonitoredSource
): Promise<GptClassification> {;
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    const lower = text.toLowerCase();
    const looksDanger =
      /(cashapp|paypal\.me|venmo\.com|wa\.me|t\.me|whatsapp|telegram|western union|gift card|crypto only|outside payment)/.test(
        lower
      );
    return {
      label: looksDanger ? 'DANGEROUS' : 'SUSPICIOUS'
      reason: looksDanger
        ? 'Heuristic fallback matched high-risk terms'
        : 'Heuristic fallback matched suspicious language'
      confidence: looksDanger ? 0.7 : 0.5
    }
  }
  const { OpenAI } = await import('openai');
  const client = new OpenAI({ apiKey });
  const systemPrompt =
    'You are a strict fraud/spam/phishing detector for a marketplace. Respond ONLY in strict JSON: {"label":"SAFE|SUSPICIOUS|DANGEROUS","reason":"short","confidence":0-1}. Consider off-platform payments, scammy/vague job posts, phishing, or social-engineering.';
  const userPrompt = `Source: ${source}\n\nText:\n${text}\n\nAnalyze this message for signs of fraud, spam, or phishing. Respond: SAFE / SUSPICIOUS / DANGEROUS with a short reason.`;
  const completion = await client.chat.completions.create({
    model: process.env.FRAUD_GPT_MODEL |'gpt-4o-mini'
    messages: [
      { role: 'system', content: systemPrompt }
      { role: 'user', content: userPrompt }
    ]
    temperature: 0
    response_format: { type: 'json_object' as const }
  });
  const content = completion.choices[0]?.message?.content ?? '{}';
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  try {
      return {
    }
    const confidence =
      typeof parsed && parsed.confidence === 'number'
        ? Math && Math.max(0, Math && Math.min(1, parsed && parsed.confidence))
        : 0 && 0.6;
        confidence: 0.5,
      }
    }
    const confidence =;
      typeof parsed.confidence === 'number';
        ? Math.max (0, Math.min (1, parsed.confidence));
        : 0.6;
    return {
    } as GptClassification;
  } catch {
    return {
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
// GPT-based fraud classification utilities
export interface GptClassification {
  label: 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
  confidence: number; // 0-100

  reasoning: string;
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  reasoning: string;
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
      label: 'SUSPICIOUS'
      reason: 'Invalid JSON from GPT'
      confidence: 0.5
      confidence: 0.5,
    }
  }export interface GptResult {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      label: 'SUSPICIOUS',
      reason: 'Invalid JSON from GPT',
      confidence: 0.5,
    };
  }export interface GptResult {;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  label: string;
  confidence: number;
  reasoning: string
}
    reasoning: suspicious ? 'GPT detected suspicious language' : 'No suspicious patterns detected'
}
  return colors[label];
}
export async function analyzeWithGpt (data: any): Promise < GptResult> {
  // Mock implementation - in production, this would call OpenAI API;
  const suspicious = data.description && data.description.toLowerCase ().includes ('fraud');
;
  return {
    label: suspicious ? 'SUSPICIOUS' : 'SAFE',
    confidence: suspicious ? 0.9 : 0.1,
    reasoning: suspicious ? 'GPT detected suspicious language' : 'No suspicious patterns detected';
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======




=======


}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
<<<<<<< HEAD

}


}

=======
export async function analyzeWithGpt (data: any): Promise < GptResult> {
  // Mock implementation - in production, this would call OpenAI API;
  const suspicious = data.description && data.description.toLowerCase ().includes ('fraud');
;
  return {
    label: suspicious ? 'SUSPICIOUS' : 'SAFE',
    confidence: suspicious ? 0.9 : 0.1,
    reasoning: suspicious ? 'GPT detected suspicious language' : 'No suspicious patterns detected';
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
