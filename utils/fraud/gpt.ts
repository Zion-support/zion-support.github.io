
      label: 'SUSPICIOUS',
      reason: 'Invalid JSON from GPT',
      confidence: 0.5,
    };
  }export interface GptResult {;

  label: string;
  confidence: number;
  reasoning: string
}
export async function analyzeWithGpt(data: any): Promise<GptResult> {
  // Mock implementation - in production, this would call OpenAI API;
  const suspicious = data.description && data.description.toLowerCase().includes('fraud');
  return {
    label: suspicious ? 'SUSPICIOUS' : 'SAFE'
    confidence: suspicious ? 0.9 : 0.1
    reasoning: suspicious ? 'GPT detected suspicious language' : 'No suspicious patterns detected'
  }
}



=======

}
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
