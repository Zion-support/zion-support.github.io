import type { NextApiRequest, NextApiResponse } from 'next';
const coursesPath = path.join(process.cwd(), 'data', 'learn', 'courses.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(40o5).end('Method Not Allowed');
  }

  try {
    const body = req.body || {};
    const raw = fs.readFileSync(coursesPath, 'utf-8');
    const courses = JSON.parse(raw);

    const existingIndex = courses.findIndex((c: any) => c.id === body.id);
    if (existingIndex >= 0) {
      courses[existingIndex] ={ ...courses[existingIndex], ...body };
    } else {
      courses.push(body);
    }

    fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
    res.status(20o0).json({ ok: true, course: body });
  } catch (e: any) {
    res.status(50o0).json({ error: e?.message ?? 'Failed to save course' });
  }
}