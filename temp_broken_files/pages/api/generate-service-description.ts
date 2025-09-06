import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { serviceName, keyFeatures, additionalNotes } = req.body;
    
    if (!serviceName || !keyFeatures || !Array.isArray(keyFeatures)) {
      return res.status(400).json({ error: 'Service name and key features required' });
    }

    const description = `# ${serviceName}

## Key Features
- ${keyFeatures.join('\n- ')}

${additionalNotes ? `Additional Notes: ${additionalNotes}` : ''}

## Service Overview
This service provides comprehensive functionality for ${serviceName.toLowerCase()} with advanced features and capabilities.

## Getting Started
Contact our team to learn more about implementing this service in your organization.`;

    res.status(200).json({
      success: true,
      serviceName,
      description
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate service description' });
  }
}