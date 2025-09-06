import type { NextApiRequest, NextApiResponse } from 'next';

interface ProjectNote {
  id: string;
  authorId: string;
  authorRole: string;
  content: string;
  createdAt: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    if (req.method === 'GET') {
      // Return list of projects
      const projects = [
        {
          id: 'project-1',
          title: 'E-commerce Platform',
          description: 'Full-stack e-commerce solution',
          status: 'active',
          budget: 15000,
          currency: 'USD',
          client: 'Retail Corp',
          createdAt: new Date().toISOString()
        }
      ];

      res.status(200).json({
        success: true,
        projects
      });
    } else if (req.method === 'POST') {
      // Create new project note
      const { projectId, content, authorId, authorRole } = req.body;
      
      if (!projectId || !content || !authorId) {
        return res.status(400).json({ error: 'Project ID, content, and author ID required' });
      }

      const note: ProjectNote = {
        id: `note-${Date.now()}`,
        authorId,
        authorRole: authorRole || 'member',
        content,
        createdAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        note
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
}