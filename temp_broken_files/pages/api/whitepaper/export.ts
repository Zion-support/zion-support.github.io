import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { format = 'pdf' } = req.query;
    
    // Mock whitepaper export
    const whitepaper = {
      title: 'Zion OS Whitepaper',
      version: '1.0.0',
      content: 'This is the Zion OS whitepaper content...',
      author: 'Zion Tech Group',
      publishedAt: '2024-01-01'
    };

    if (format === 'pdf') {
      // Mock PDF generation
      const pdfBuffer = Buffer.from('Mock PDF content');
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="zion-whitepaper.pdf"');
      res.status(200).send(pdfBuffer);
    } else if (format === 'html') {
      // Mock HTML generation
      const html = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>${whitepaper.title}</title>
        </head>
        <body>
          <h1>${whitepaper.title}</h1>
          <p>${whitepaper.content}</p>
        </body>
        </html>
      `;
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(html);
    } else {
      // Return JSON
      res.status(200).json({
        success: true,
        whitepaper
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Export failed' });
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}