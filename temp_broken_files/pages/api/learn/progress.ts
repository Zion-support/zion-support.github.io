import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, courseId } = req.query;
    
    if (!userId || typeof userId !== 'string') {
      return res.status(400).json({ error: 'User ID required' });
    }

    // Mock progress data
    const progress = {
      userId,
      courseId: courseId as string || 'all',
      totalCourses: 10,
      completedCourses: 3,
      inProgressCourses: 2,
      totalPoints: 1500,
      currentStreak: 7,
      longestStreak: 30,
      achievements: [
        { id: 'first-course', name: 'First Course Completed', earnedAt: '2024-01-15' },
        { id: 'week-streak', name: '7 Day Streak', earnedAt: '2024-01-20' }
      ],
      recentActivity: [
        {
          type: 'course_completed',
          courseName: 'React Basics',
          timestamp: new Date().toISOString()
        },
        {
          type: 'lesson_started',
          courseName: 'Advanced TypeScript',
          timestamp: new Date().toISOString()
        }
      ]
    };

    res.status(200).json({
      success: true,
      progress
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve progress' });
  }
}