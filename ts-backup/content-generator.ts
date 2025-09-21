import { useState, useCallback } from 'react';

interface AIContentRequest {
  prompt: string;
  type: 'blog' | 'service' | 'product' | 'marketing';
  tone: 'professional' | 'casual' | 'technical' | 'creative';
  length: 'short' | 'medium' | 'long';
}

interface AIContentResponse {
  content: string;
  suggestions: string[];
  metadata: {
    wordCount: number;
    readabilityScore: number;
    seoScore: number;
  };
}

export class AIContentGenerator {
  private apiKey: string;
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
  
  async generateContent(request: AIContentRequest): Promise<AIContentResponse> {
    const prompt = this.buildPrompt(request);
    
    try {
      const response = await fetch('/api/ai/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        }
        body: JSON.stringify({ prompt }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate content');
      }
      
      const data = await response.json();
      return this.processResponse(data, request);
    } catch (error) {
      console.error('AI Content Generation Error:', error);
      throw error;
    }
  }
  
  private buildPrompt(request: AIContentRequest): string {
    const lengthMap = {
      short: '100-200 words',
      medium: '300-500 words',
      long: '800-1200 words'
    };
    
    return `Generate ${request.type} content with a ${request.tone} tone, approximately ${lengthMap[request.length]} in length. Topic: ${request.prompt}`;
  }
  
  private processResponse(data: any, request: AIContentRequest): AIContentResponse {
    return {
      content: data.content || '',
      suggestions: data.suggestions || []
      metadata: {
        wordCount: data.content?.split(' ').length || 0,
        readabilityScore: this.calculateReadability(data.content || ''),
        seoScore: this.calculateSEOScore(data.content || ''),
      }
    };
  }
  
  private calculateReadability(text: string): number {
    // Simplified readability calculation
    const words = text.split(' ').length;
    const sentences = text.split(/[.!?]+/).length;
    const syllables = text.toLowerCase().replace(/[^a-z]/g, '').length;
    
    return Math.round((0.39 * (words / sentences)) + (11.8 * (syllables / words)) - 15.59);
  }
  
  private calculateSEOScore(text: string): number {
    // Simplified SEO score calculation
    let score = 0;
    const lowerText = text.toLowerCase();
    
    // Check for keywords
    if (lowerText.includes('ai') || lowerText.includes('artificial intelligence')) score += 20;
    if (lowerText.includes('technology') || lowerText.includes('tech')) score += 15;
    if (lowerText.includes('solution') || lowerText.includes('service')) score += 15;
    
    // Check for headings
    if (text.includes('##') || text.includes('<h2>')) score += 10;
    if (text.includes('###') || text.includes('<h3>')) score += 5;
    
    // Check for links
    if (text.includes('[') && text.includes('](')) score += 10;
    
    return Math.min(score, 100);
  }
}

// React Hook for AI Content Generation
export const useAIContentGenerator = (apiKey: string) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const generateContent = useCallback(async (request: AIContentRequest) => {
    setIsGenerating(true);
    setError(null);
    
    try {
      const generator = new AIContentGenerator(apiKey);
      const result = await generator.generateContent(request);
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      throw err;
    } finally {
      setIsGenerating(false);
    }
  }, [apiKey]);
  
  return { generateContent, isGenerating, error };
};
