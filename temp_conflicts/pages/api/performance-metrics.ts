// API endpoint for performance metrics collection
}

// In-memory storage for demo purposes
// In production, use a proper database

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    try {
      }

      // In production, you would:
      // 1. Store metrics in a database (e.g., MongoDB, PostgreSQL)
      // 2. Send to analytics service (e.g., Google Analytics, DataDog)
      // 3. Trigger alerts for critical performance issues
      // 4. Aggregate metrics for performance dashboards

      // Example: Send to external analytics service
      if (process.env['NODE_ENV'] === 'production' && process.env['ANALYTICS_ENDPOINT']) {
        try {
          await fetch(process.env['ANALYTICS_ENDPOINT'], {
            method: 'POST',
            headers: {
            },
            body: JSON.stringify({
              type: 'performance',
              data: performanceReport,
              timestamp: Date.now()
            })
  }
  
  if (req.method === 'GET') {
    try {
      
      if (type === 'performance') {
        const limitedMetrics = performanceMetrics
          .slice(-Number(limit))
          .map(metric => ({
            ...metric,
            timestamp: new Date(metric.timestamp).toLocaleString()

        res.status(200).json({
          success: true,
          data: limitedMetrics,
          total: performanceMetrics.length,
          average: calculateAverages(performanceMetrics)
      } else if (type === 'error') {
        const limitedErrors = errorLogs
          .slice(-Number(limit))
          .map(error => ({
            ...error,
            timestamp: new Date(error.timestamp).toLocaleString()

        res.status(200).json({
          success: true,
          data: limitedErrors,
          total: errorLogs.length
      } else if (type === 'summary') {
        res.status(200).json({
          success: true,
          summary: {
            performance: {
              total: performanceMetrics.length,
              average: calculateAverages(performanceMetrics),
              recent: performanceMetrics.slice(-10).length
            },
            errors: {
              total: errorLogs.length,
              recent: errorLogs.slice(-10).length
            }
          }
      } else {
        res.status(400).json({ 
          success: false, 
          message: 'Invalid type parameter' 
  }
}

function calculateAverages(metrics: PerformanceData[]) {

  const sums = metrics.reduce((acc, metric) => ({
    fcp: acc.fcp + metric.fcp,
    lcp: acc.lcp + metric.lcp,
    fid: acc.fid + metric.fid,
    cls: acc.cls + metric.cls,
    ttfb: acc.ttfb + metric.ttfb

  return {
    fcp: Math.round(sums.fcp / metrics.length),
    lcp: Math.round(sums.lcp / metrics.length),
    fid: Math.round(sums.fid / metrics.length),
    cls: Math.round((sums.cls / metrics.length) * 1000) / 1000,
    ttfb: Math.round(sums.ttfb / metrics.length)
}
