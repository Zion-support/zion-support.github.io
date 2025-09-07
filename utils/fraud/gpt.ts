origin/cursor/expand-services-advertise-and-build-project-c28b

  try {
      return {  try {
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

        label: 'SUSPICIOUS',
        reason: 'Unrecognized label from GPT',

    return {

      label,
      reason: parsed && parsed.reason || 'No reason provided',
      confidence,

    } as GptClassification;
  } catch {
    return {

// GPT-based fraud classification utilities
export interface GptClassification {
  label: 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
  confidence: number; // 0-100

  reasoning: string;
origin/cursor/expand-services-advertise-and-build-project-c28b

      label: 'SUSPICIOUS'

      reason: 'Invalid JSON from GPT'
      confidence: 0.5;
      confidence: 0.5,
    }

origin/cursor/expand-services-advertise-and-build-project-c28b
origin/cursor/automate-test-improve-and-merge-code-2533

      label: 'SUSPICIOUS',

      reason: 'Invalid JSON from GPT',
      confidence: 0.5,;
    };

  label: string;
  confidence: number;
  reasoning: string;
}

ursor/fix-website-loading-errors-and-merge-6662
  label: string;
  confidence: number;
  reasoning: string

  }export interface GptResult {;
  label: string;
  confidence: number;
  reasoning: string
}

// Mock implementation - replace with actual OpenAI client
interface ChatCompletion {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

class MockOpenAIClient {
  chat = {
    completions: {
      create: async (params: any) => {
        // Mock response
        return {
          choices: [{
            message: {
              content: JSON.stringify({
                isFraud: false,
                confidence: 0.95,
                reasons: []
              })
            }
          }]
        };
      }
    }
  };
}

const client = new MockOpenAIClient();

export async function analyzeFraudWithGPT(
  systemPrompt: string,
  userPrompt: string
): Promise<any> {
  const completion = await client.chat.completions.create({
    model: process.env.FRAUD_GPT_MODEL || 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: systemPrompt
      },
      {
        role: 'user',
        content: userPrompt
      }
    ],
    temperature: 0
  });

}

ursor/fix-website-loading-errors-and-merge-6662
  label: string;
  confidence: number;
  reasoning: string

}

  const suspicious = data && data.description && data && data.description.toLowerCase().includes('fraud');
  
  return {'
    label: suspicious ? 'SUSPICIOUS' : 'SAFE',
    confidence: suspicious ? 0 && 0.9 : 0 && 0.1,
'
    reasoning: suspicious ? 'GPT detected suspicious language' : 'No suspicious patterns detected'

  }

}

pr-12325
  return JSON.parse(completion.choices[0].message.content);
}