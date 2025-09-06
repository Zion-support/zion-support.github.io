import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { data, source, timestamp } = req.body;
    
    if (!data || !source) {
      return res.status(400).json({ error: 'Data and source required' });
    }

    // Mock fraud detection logic
    const heuristic = analyzeHeuristic(data);
    const gpt = await analyzeWithGPT(data);
    
    let combinedLabel = 'SAFE';
    if (heuristic.severity === 'high') combinedLabel = 'DANGEROUS';
    if (gpt?.label === 'DANGEROUS') combinedLabel = 'DANGEROUS';

    const result = {
      id: `fraud-${Date.now()}`,
      source,
      timestamp: timestamp || new Date().toISOString(),
      label: combinedLabel,
      confidence: Math.max(heuristic.confidence, gpt?.confidence || 0),
      details: {
        heuristic,
        gpt
      }
    };

    res.status(200).json({
      success: true,
      result
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process fraud data' });
  }
}

function analyzeHeuristic(data: any) {
  // Mock heuristic analysis
  return {
    severity: 'low',
    confidence: 0.7,
    factors: ['normal_pattern']
  };
}

async function analyzeWithGPT(data: any) {
  // Mock GPT analysis
  return {
    label: 'SAFE',
    confidence: 0.8,
    reasoning: 'No suspicious patterns detected'
  };
}