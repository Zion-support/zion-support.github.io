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

  return JSON.parse(completion.choices[0].message.content);
}