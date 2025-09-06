import type { NextApiRequest, NextApiResponse } from 'next';

interface Conversation {
  id: string;
  participants: string[];
  lastMessage: string;
  updatedAtIso: string;
}

const FILE = '/tmp/conversations.json';

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
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    res.status(405).end('Method Not Allowed');
  }

  try {
    if (req.method === 'GET') {
      // Return list of conversations
      const conversations = readJsonFile<Conversation>(FILE);
      
      res.status(200).json({
        success: true,
        conversations
      });
    } else if (req.method === 'POST') {
      // Create new conversation
      const { participants, lastMessage } = req.body;
      
      if (!participants || !Array.isArray(participants) || participants.length === 0) {
        return res.status(400).json({ error: 'Participants array required' });
      }

      const now = new Date().toISOString();
      const conversation: Conversation = {
        id: `conv-${Date.now()}`,
        participants,
        lastMessage: lastMessage || '',
        updatedAtIso: now
      };

      const conversations = readJsonFile<Conversation>(FILE);
      conversations.push(conversation);
      writeJsonFile<Conversation>(FILE, conversations);

      res.status(201).json({
        success: true,
        conversation
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
}