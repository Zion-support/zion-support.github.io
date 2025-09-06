import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { q, type = 'all', limit = '20' } = req.query;
    
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ error: 'Search query required' });
    }

    // Mock search results
    const results = [
      {
        id: 'result-1',
        title: 'React Development Guide',
        description: 'Comprehensive guide to React development',
        type: 'documentation',
        url: '/docs/react-guide',
        score: 0.95
      },
      {
        id: 'result-2',
        title: 'API Documentation',
        description: 'Complete API reference and examples',
        type: 'api',
        url: '/api/docs',
        score: 0.88
      },
      {
        id: 'result-3',
        title: 'Getting Started Tutorial',
        description: 'Step-by-step tutorial for beginners',
        type: 'tutorial',
        url: '/tutorials/getting-started',
        score: 0.82
      }
    ];

    // Filter by type if specified
    let filteredResults = results;
    if (type !== 'all') {
      filteredResults = results.filter(result => result.type === type);
    }

    const limitNum = parseInt(limit as string, 10);
    filteredResults = filteredResults.slice(0, limitNum);

    res.status(200).json({
      success: true,
      query: q,
      results: filteredResults,
      total: results.length,
      took: 15 // milliseconds
    });
  } catch (error) {
    res.status(500).json({ error: 'Search failed' });
  }
}