import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { name, email, role, country, source = 'zion-global-2025' } = req.body;
    
    if (!name || !email || !role) {
      return res.status(400).json({ error: 'Name, email, and role required' });
    }

    // Mock summit registration
    const registration = {
      id: `registration-${Date.now()}`,
      name,
      email,
      role,
      country: country || 'Unknown',
      source: source || 'zion-global-2025',
      status: 'confirmed',
      registeredAt: new Date().toISOString(),
      ticketId: `TICKET-${Date.now()}`,
      eventDetails: {
        name: 'Zion Global Summit 2025',
        date: '2025-06-15',
        location: 'San Francisco, CA',
        venue: 'Moscone Center'
      }
    };

    res.status(201).json({
      success: true,
      registration
    });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
}