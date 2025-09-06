import type { NextApiRequest, NextApiResponse } from 'next';

interface FeedbackRecord {
  id: string;
  message: string;
  rating: number;
  timestamp: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { message, rating } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message required' });
    }

    const feedback: FeedbackRecord = {
      id: `feedback-${Date.now()}`,
      message,
      rating: rating || 5,
      timestamp: new Date().toISOString()
    };

    // Try to write to Firestore
    const success = await tryWriteToFirestore(feedback);
    
    res.status(200).json({
      success,
      feedback
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
}

async function tryWriteToFirestore(doc: FeedbackRecord) {
  const {
    FIREBASE_PROJECT_ID,
    FIREBASE_CLIENT_EMAIL,
    FIREBASE_PRIVATE_KEY
  } = process.env as Record<string, string | undefined>;

  if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) {
    return false;
  }

  try {
    // Mock Firestore write
    console.log('Writing to Firestore:', doc);
    return true;
  } catch (error) {
    console.error('Firestore write failed:', error);
    return false;
  }
}