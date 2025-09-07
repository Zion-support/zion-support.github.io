<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
=======
<<<<<<< HEAD
>>>>>>> origin/main

interface Course {
  id: string;
  title: string;
  description: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const coursesPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const body = req.body as Course;
    
    if (!body.title || !body.description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }

    let courses: Course[] = [];
    
    try {
      const data = fs.readFileSync(coursesPath, 'utf8');
      courses = JSON.parse(data);
    } catch {
      // File doesn't exist, start with empty array
    }

    const existingIndex = courses.findIndex(course => course.id === body.id);
    
    if (existingIndex >= 0) {
      courses[existingIndex] = { 
        ...courses[existingIndex], 
        ...body,
        updatedAt: new Date().toISOString()
      };
    } else {
      courses.push({
        ...body,
        id: body.id || Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }

    fs.mkdirSync(path.dirname(coursesPath), { recursive: true });
    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));

    res.status(200).json({ ok: true, course: body });
  } catch (e: any) {
<<<<<<< HEAD
    res.status(500).json({ error: e?.message ?? 'Failed to save course' });
  }
}
=======
    res.status(500).json({ error: e?.message ?? 'Failed to save course' })
  };

=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Course endpoint' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
