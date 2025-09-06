import type { NextApiRequest, NextApiResponse } from 'next';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  postedAt: string;
}

const FILE = '/tmp/jobs.json';

function readJsonFile<T>(filePath: string): T[] {
  try {
    const fs = require('fs');
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading file:', error);
  }
  return [];
}

function writeJsonFile<T>(filePath: string, data: T[]): void {
  try {
    const fs = require('fs');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing file:', error);
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'PATCH') {
    res.setHeader('Allow', 'GET, PATCH');
    res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;
    
    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Job ID required' });
    }

    const jobs = readJsonFile<Job>(FILE);
    const jobIndex = jobs.findIndex(job => job.id === id);

    if (jobIndex === -1) {
      return res.status(404).json({ error: 'Job not found' });
    }

    if (req.method === 'GET') {
      res.status(200).json({
        success: true,
        job: jobs[jobIndex]
      });
    } else if (req.method === 'PATCH') {
      const updates = req.body;
      const job = { ...jobs[jobIndex], ...updates };
      jobs[jobIndex] = job;
      writeJsonFile<Job>(FILE, jobs);

      res.status(200).json({
        success: true,
        job
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
}