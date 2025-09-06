import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { courseId } = req.query;
    
    if (!courseId || typeof courseId !== 'string') {
      return res.status(400).json({ error: 'Course ID required' });
    }

    // Mock certificate generation
    const certificate = {
      id: `cert-${Date.now()}`,
      courseId,
      studentName: 'John Doe',
      courseName: 'Advanced React Development',
      completedAt: new Date().toISOString(),
      grade: 'A+',
      certificateUrl: `/certificates/${courseId}/download`
    };

    res.status(200).json({
      success: true,
      certificate
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate certificate' });
  }
}