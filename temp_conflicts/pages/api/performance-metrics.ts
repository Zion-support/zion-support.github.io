// API endpoint for performance metrics collection
import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_PerformanceReport} from '@/utils/performance-monitor';

interface PerformanceData {_timestamp: string;
  url: string;
  userAgent: string;
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  sessionId: string;}

interface ErrorData {_timestamp: string;
  url: string;
  userAgent: string;
  error: string;
  stack?: string;
  sessionId: string;}

// In-memory storage for demo purposes
// In production, use a proper database
let performanceMetrics: PerformanceData[] = [];
let errorLogs: ErrorData[] = [];

export default async function handler(_req: NextApiRequest, _res: NextApiResponse): Promise<void> {_if (req.method === 'POST') {
    try {
      const _performanceReport = req['body'];
      
      // Validate the report structure
      if (!performanceReport.metrics || !Array.isArray(performanceReport.metrics)) {
        res.status(400).json({ error: 'Invalid performance report format'});
        return;
      }

      // Log performance metrics (in production, you would store these in a database)
      // Removed 

      // Log critical performance issues
      const _poorMetrics = performanceReport.metrics.filter(m => m.rating === 'poor');
      if (poorMetrics.length > 0) {_);}

      // In production, you would:
      // 1. Store metrics in a database (e.g., MongoDB, PostgreSQL)
      // 2. Send to analytics service (e.g., Google Analytics, DataDog)
      // 3. Trigger alerts for critical performance issues
      // 4. Aggregate metrics for performance dashboards

      // Example: Send to external analytics service
      if (process.env['NODE_ENV'] === 'production' && process.env['ANALYTICS_ENDPOINT']) {_try {
          await fetch(process.env['ANALYTICS_ENDPOINT'], _{
            method: 'POST', _headers: {
              'Content-Type': 'application/json', _'Authorization': `Bearer ${process.env['ANALYTICS_API_KEY']}`
            },
            body: JSON.stringify({_type: 'performance', _data: performanceReport, _timestamp: Date.now()})
          });
        } catch (error) {}
      }

      res.status(200).json({_success: true, _message: 'Performance data recorded'});
    } catch (error) {_res.status(500).json({ 
        success: false, _message: 'Internal server error'});
    }
  } catch (error) {_res.status(500).json({ 
      success: false, _message: 'Internal server error'});
    return;
  }
  
  if (req.method === 'GET') {_try {
      const { type, _limit = 100} = req.query;
      
      if (type === 'performance') {_const _limitedMetrics = performanceMetrics
          .slice(-Number(limit))
          .map(metric => ({
            ...metric, _timestamp: new Date(metric.timestamp).toLocaleString()}));

        res.status(200).json({_success: true, _data: limitedMetrics, _total: performanceMetrics.length, _average: calculateAverages(performanceMetrics)});
      } else if (type === 'error') {_const _limitedErrors = errorLogs
          .slice(-Number(limit))
          .map(error => ({
            ...error, _timestamp: new Date(error.timestamp).toLocaleString()}));

        res.status(200).json({_success: true, _data: limitedErrors, _total: errorLogs.length});
      } else if (type === 'summary') {_res.status(200).json({
          success: true, _summary: {
            performance: {
              total: performanceMetrics.length, _average: calculateAverages(performanceMetrics), _recent: performanceMetrics.slice(-10).length},
            errors: {_total: errorLogs.length, _recent: errorLogs.slice(-10).length}
          }
        });
      } else {_res.status(400).json({ 
          success: false, _message: 'Invalid type parameter'});
      }
    } catch (error) {_res.status(500).json({ 
        success: false, _message: 'Internal server error'});
    }
  } else {_res.setHeader('Allow', _['POST', _'GET']);
    res.status(405).json({ 
      success: false, _message: `Method ${req.method} Not Allowed` 
    });
  }
}

function calculateAverages(_metrics: PerformanceData[]) {_if (metrics.length === 0) return null;

  const _sums = metrics.reduce(_(acc, _metric) => ({
    fcp: acc.fcp + metric.fcp, _lcp: acc.lcp + metric.lcp, _fid: acc.fid + metric.fid, _cls: acc.cls + metric.cls, _ttfb: acc.ttfb + metric.ttfb}), {_fcp: 0, _lcp: 0, _fid: 0, _cls: 0, _ttfb: 0});

  return {_fcp: Math.round(sums.fcp / metrics.length), _lcp: Math.round(sums.lcp / metrics.length), _fid: Math.round(sums.fid / metrics.length), _cls: Math.round((sums.cls / metrics.length) * 1000) / 1000, _ttfb: Math.round(sums.ttfb / metrics.length)};
}
