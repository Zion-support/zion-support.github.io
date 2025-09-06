import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    res.status(405).end('Method Not Allowed');
  }

  try {
    if (req.method === 'GET') {
      // Return list of jobs
      const jobs = [
        {
          id: 'job-1',
          title: 'Senior Developer',
          company: 'Tech Corp',
          location: 'Remote',
          salary: '$100k - $150k',
          postedAt: new Date().toISOString()
        }
      ];

      res.status(200).json({
        success: true,
        jobs
      });
    } else if (req.method === 'POST') {
      // Create new job
      const { title, company, location, salary, description } = req.body;
      
      if (!title || !company) {
        return res.status(400).json({ error: 'Title and company required' });
      }

      const job = {
        id: `job-${Date.now()}`,
        title,
        company,
        location: location || 'Remote',
        salary: salary || 'Competitive',
        description: description || '',
        postedAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        job
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
}