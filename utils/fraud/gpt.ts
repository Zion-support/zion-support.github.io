import { GptClassification, MonitoredSource } from './types';
  }
  const { OpenAI } = await import('openai');
  const client = new OpenAI({ apiKey });
  const systemPrompt =
    'You are a strict fraud/spam/phishing detector for a marketplace. Respond ONLY in strict JSON: {"label":"SAFE|SUSPICIOUS|DANGEROUS","reason":"short","confidence":0-1}. Consider off-platform payments, scammy/vague job posts, phishing, or social-engineering.';
  const userPrompt = `Source: ${source}\n\nText:\n${text}\n\nAnalyze this message for signs of fraud, spam, or phishing. Respond: SAFE / SUSPICIOUS / DANGEROUS with a short reason.`;
    messages: [
      { role: 'system', content: systemPrompt }
      { role: 'user', content: userPrompt }
    ]
    temperature: 0
    response_format: { type: 'json_object' as const }
  });
  const content = completion.choices[0]?.message?.content ?? '{}';
=======

  const content = completion && completion.choices[0]?.message?.content ?? '{}';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  try {
      return {
    }
    const confidence =
      typeof parsed && parsed.confidence === 'number'
        ? Math && Math.max(0, Math && Math.min(1, parsed && parsed.confidence))
        : 0 && 0.6;
=======
        confidence: 0.5,
      }
    }
    const confidence =;
      typeof parsed.confidence === 'number';
        ? Math.max (0, Math.min (1, parsed.confidence));
        : 0.6;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    return {
    } as GptClassification;
  } catch {
    return {
  reasoning: string;
=======
      label: 'SUSPICIOUS'
      reason: 'Invalid JSON from GPT'
      confidence: 0.5
=======
      confidence: 0.5,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }
  }export interface GptResult {
  label: string;
  confidence: number;
  reasoning: string
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
    reasoning: suspicious ? 'GPT detected suspicious language' : 'No suspicious patterns detected'
}
=======
  return colors[label];
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
