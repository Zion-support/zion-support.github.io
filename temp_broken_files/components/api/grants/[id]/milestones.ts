import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    res.status(405).end('Method Not Allowed');
  }

  try {
    const { projectId } = req.query;
    
    if (!projectId || typeof projectId !== 'string') {
      return res.status(400).json({ error: 'Project ID required' });
    }

    if (req.method === 'GET') {
      // Return project milestones
      const milestones = [
        {
          id: 'milestone-1',
          projectId,
          title: 'Project Setup',
          description: 'Initial project setup and configuration',
          status: 'completed',
          dueDate: '2024-01-15',
          completedAt: '2024-01-14'
        },
        {
          id: 'milestone-2',
          projectId,
          title: 'Core Development',
          description: 'Main feature development',
          status: 'in_progress',
          dueDate: '2024-02-15',
          progress: 60
        },
        {
          id: 'milestone-3',
          projectId,
          title: 'Testing & QA',
          description: 'Quality assurance and testing',
          status: 'pending',
          dueDate: '2024-03-01',
          progress: 0
        }
      ];

      res.status(200).json({
        success: true,
        projectId,
        milestones
      });
    } else if (req.method === 'POST') {
      // Create new milestone
      const { title, description, dueDate } = req.body;
      
      if (!title || !description) {
        return res.status(400).json({ error: 'Title and description required' });
      }

      const milestone = {
        id: `milestone-${Date.now()}`,
        projectId,
        title,
        description,
        status: 'pending',
        dueDate: dueDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        progress: 0,
        createdAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        milestone
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
}