

origin/cursor/expand-services-advertise-and-build-project-c28b
  try {
      }
      return {
  try {
      return {
  try {
      return {
  try {
      return {

    }

;
  try {return {try {return {try {return {}
    const confidence =;
      typeof parsed && parsed.confidence === 'number';
        ? Math && Math.max(0, Math && Math.min(1, parsed && parsed.confidence)): 0 && 0.6;
        confidence: 0.5;
  try {
      return {}
    const confidence =
      typeof parsed && parsed.confidence === 'number''
        ? Math && Math.max(0, Math && Math.min(1, parsed && parsed.confidence))
        : 0 && 0.6;
        "confidence": 0.5
      }
    }
      typeof parsed.confidence === 'number';'
        ? Math.max (0, Math.min (1, parsed.confidence));
        : 0.6;
    return {
    } as GptClassification;
  } catch {return {}
  try {return {label: 'SUSPICIOUS';
      reason: 'Invalid JSON from GPT';
      confidence: 0.5;
      confidence: 0.5;
    }
  }export interface GptResult  {label: 'SUSPICIOUS',reason: 'Invalid JSON from GPT',confidence: 0.5;
    }}export interface GptResult  {confidence;
    } as GptClassification;
  } catch {return {// GPT-based fraud classification utilities;
export interface GptClassification  {label: 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';
  confidence: number; // 0-100;
  reasoning: string;label: 'SUSPICIOUS';
      reason: 'Invalid JSON from GPT';
      confidence: 0.5;
      confidence: 0.5;
    }
  }export interface GptResult  {label: 'SUSPICIOUS',reason: 'Invalid JSON from GPT',confidence: 0.5;
    }}export interface GptResult  {label: string;
  confidence: number;
  reasoning: string;
}}ursor/fix-website-loading-errors-and-merge-6662;
  label: string;
  confidence: number;
  reasoning: string;
}const suspicious  = data && data.description && data && data.description.toLowerCase().includes('fraud')return {label: suspicious ? 'SUSPICIOUS' : 'SAFE',confidence: suspicious ? 0 && 0.9 : 0 && 0.1,reasoning: suspicious ? 'GPT detected suspicious language' : 'No suspicious patterns detected';
  }}}
}}}}
  } catch {
    }
    return {
  }
  "reasoning": string;
      "label": 'SUSPICIOUS''
      "reason": 'Invalid JSON from GPT''
      "confidence": 0.5,
"confidence": 0.5
    }
  }export interface GptResult {
      }
      "label": 'SUSPICIOUS','
      "reason": 'Invalid JSON from GPT','
      "confidence": 0.5
    };
  }export interface GptResult {;
  }
  "label": string;
  "confidence": number;
  "reasoning": string
}

  "label": string;
  "confidence": number;
  "reasoning": string
}

  const suspicious = data && data.description && data && data.description.toLowerCase().includes('fraud');'
  
  return {
    }
    "label": suspicious ? 'SUSPICIOUS' : 'SAFE','
    "confidence": suspicious ? 0 && 0.9 : 0 && 0.1,

    "reasoning": suspicious ? 'GPT detected suspicious language' : 'No suspicious patterns detected''

import { GptClassification, MonitoredSource } from './types';
export async function classifyWithGPT(text: string, source: MonitoredSource): Promise<GptClassification> {
  const apiKey = $2;
  if (!apiKey) {
    const lower = text.toLowerCase($2);
    const looksDanger = /(cashapp|paypal\.me|venmo\.com|wa\.me|t\.me|whatsapp|telegram|western union|gift card|crypto only|outside payment)/.test($2);
    return {
      label: looksDanger ? 'DANGEROUS' : 'SUSPICIOUS',
      reason: looksDanger ? 'Heuristic fallback matched high-risk terms' : 'Heuristic fallback matched suspicious language',
      confidence: looksDanger ? 0.7 : 0.5}
  }

  const { OpenAI } = await import($2);
  const client = new OpenAI($2);
  const systemPrompt = 'You are a strict fraud/spam/phishing detector for a marketplace. Respond ONLY in strict JSON: {"label":"SAFE|SUSPICIOUS|DANGEROUS","reason":"short","confidence":0-1}. Consider off-platform payments, scammy/vague job posts, phishing, or social-engineering.',
  const userPrompt = `Source: ${source}\n\nText:\n${text}\n\nAnalyze this message for signs of fraud, spam, or phishing. Respond: SAFE / SUSPICIOUS / DANGEROUS with a short reason.`,

  const completion = await client.chat.completions.create($2);
  const content = $2;
  try {
    const parsed = JSON.parse($2);
    const label = $2;
    if (label !== 'SAFE' && label !== 'SUSPICIOUS' && label !== 'DANGEROUS') {
      return { label: 'SUSPICIOUS', reason: 'Unrecognized label from GPT', confidence: 0.5 }
    }
    const confidence = typeof parsed.confidence === 'number' ? Math.max(0, Math.min(1, parsed.confidence)) : 0.6,
    return { label, reason: parsed.reason || 'No reason provided', confidence } as GptClassification
  } catch {
    return { label: 'SUSPICIOUS', reason: 'Invalid JSON from GPT', confidence: 0.5 }
  }
}
origin/cursor/expand-services-advertise-and-build-project-c28b






  }
origin/cursor/integrate-build-improve-and-re-verify-2156

}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

  }
origin/cursor/automate-test-improve-and-merge-code-2533


}


}




  }

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
