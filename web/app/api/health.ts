// Simple health check endpoint for Next.js API routes
// Uses any type for request/response to maintain compatibility with older Next.js versions

export default function handler(req: any, res: any) {
  try {
    res.status(200).json({ 
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime()
    });
  } catch (error: any) {
    res.status(500).json({ 
      status: 'unhealthy', 
      error: error.message 
    });
  }
}