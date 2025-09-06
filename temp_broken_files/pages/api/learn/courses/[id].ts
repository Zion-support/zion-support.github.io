import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;
    
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Course ID required' });
    }

    // Mock course details
    const course = {
      id,
      title: 'Advanced React Development',
      description: 'Master advanced React concepts and patterns',
      instructor: 'Jane Smith',
      category: 'frontend',
      level: 'intermediate',
      duration: '6 hours',
      rating: 4.9,
      students: 2150,
      modules: [
        {
          id: 'module-1',
          title: 'React Hooks Deep Dive',
          duration: '2 hours',
          completed: false
        },
        {
          id: 'module-2',
          title: 'State Management with Redux',
          duration: '2 hours',
          completed: false
        },
        {
          id: 'module-3',
          title: 'Performance Optimization',
          duration: '2 hours',
          completed: false
        }
      ],
      prerequisites: ['Basic React knowledge', 'JavaScript ES6+'],
      learningOutcomes: [
        'Master React Hooks',
        'Implement state management',
        'Optimize React performance'
      ]
    };

    res.status(200).json({
      success: true,
      course
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve course details' });
  }
}