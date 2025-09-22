// API endpoint for performance metrics collection
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import type { PerformanceReport } from '@/utils/performance-monitor',

interface PerformanceData {
  timestamp: string,
  url: string,
  userAgent: string,
  fcp: number,
  lcp: number,
  fid: number,
  cls: number,
  ttfb: number,
  sessionId: string
}

interface ErrorData {
  timestamp: string,
  url: string,
  userAgent: string,
  error: string,
  stack?: string,
  sessionId: string
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import type { PerformanceReport } from '@/utils/performance-monitor';

interface PerformanceData {
  timestamp: string;
  url: string;
  userAgent: string;
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  sessionId: string;
}

interface ErrorData {
  timestamp: string;
  url: string;
  userAgent: string;
  error: string;
  stack?: string;
  sessionId: string;
>>>>>>> origin/auto/autonomy-17186719616
}

// In-memory storage for demo purposes
// In production, use a proper database
<<<<<<< HEAD
let performanceMetrics: PerformanceData[] = [],
let errorLogs: ErrorData[] = [],
=======
let performanceMetrics: PerformanceData[] = [];
let errorLogs: ErrorData[] = [];
>>>>>>> origin/auto/autonomy-17186719616

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'POST') {
    try {
<<<<<<< HEAD
      const performanceReport = req['body'],
      
      // Validate the report structure
      if (!performanceReport.metrics || !Array.isArray(performanceReport.metrics)) {
        res.status(400).json({ error: 'Invalid performance report format' }),
        return,
      }

      // Log performance metrics (in production, you would store these in a database)
      // Removed // // // console.log('🔧 Performance Report:', { ... }),

      // Log critical performance issues
      const poorMetrics = performanceReport.metrics.filter(m => m.rating === 'poor'),
      if (poorMetrics.length > 0) {
        console.warn('⚠️ Poor Performance Metrics Detected:', poorMetrics.map(m => 
          `${m.name}: ${m.value}ms`
        )),
=======
      const performanceReport = req['body'];
      
      // Validate the report structure
      if (!performanceReport.metrics || !Array.isArray(performanceReport.metrics)) {
        res.status(400).json({ error: 'Invalid performance report format' });
        return;
      }

      // Log performance metrics (in production, you would store these in a database)
      // Removed console.log('🔧 Performance Report:', { ... });

      // Log critical performance issues
      const poorMetrics = performanceReport.metrics.filter(m => m.rating === 'poor');
      if (poorMetrics.length > 0) {
        console.warn('⚠️ Poor Performance Metrics Detected:', poorMetrics.map(m => 
          `${m.name}: ${m.value}ms`
        ));
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
              'Content-Type': 'application/jsonAuthorization': `Bearer ${process.env['ANALYTICS_API_KEY']}`
=======
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env['ANALYTICS_API_KEY']}`
>>>>>>> origin/auto/autonomy-17186719616
            },
            body: JSON.stringify({
              type: 'performance',
              data: performanceReport,
              timestamp: Date.now()
            })
<<<<<<< HEAD
          }),
        } catch (error) {
          console.error('Error sending to analytics:', error),
        }
      }

      res.status(200).json({ success: true, message: 'Performance data recorded' }),
    } catch (error) {
      console.error('Error processing request:', error),
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      }),
    }
  } catch (error) {
    console.error('Error processing request:', error),
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    }),
    return,
=======
          });
        } catch (error) {
          console.error('Error sending to analytics:', error);
        }
      }

      res.status(200).json({ success: true, message: 'Performance data recorded' });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
    return;
>>>>>>> origin/auto/autonomy-17186719616
  }
  
  if (req.method === 'GET') {
    try {
<<<<<<< HEAD
      const { type, limit = 100 } = req.query,
=======
      const { type, limit = 100 } = req.query;
>>>>>>> origin/auto/autonomy-17186719616
      
      if (type === 'performance') {
        const limitedMetrics = performanceMetrics
          .slice(-Number(limit))
          .map(metric => ({
            ...metric,
            timestamp: new Date(metric.timestamp).toLocaleString()
<<<<<<< HEAD
          })),
=======
          }));
>>>>>>> origin/auto/autonomy-17186719616

        res.status(200).json({
          success: true,
          data: limitedMetrics,
          total: performanceMetrics.length,
          average: calculateAverages(performanceMetrics)
<<<<<<< HEAD
        }),
=======
        });
>>>>>>> origin/auto/autonomy-17186719616
      } else if (type === 'error') {
        const limitedErrors = errorLogs
          .slice(-Number(limit))
          .map(error => ({
            ...error,
            timestamp: new Date(error.timestamp).toLocaleString()
<<<<<<< HEAD
          })),
=======
          }));
>>>>>>> origin/auto/autonomy-17186719616

        res.status(200).json({
          success: true,
          data: limitedErrors,
          total: errorLogs.length
<<<<<<< HEAD
        }),
=======
        });
>>>>>>> origin/auto/autonomy-17186719616
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
<<<<<<< HEAD
        }),
=======
        });
>>>>>>> origin/auto/autonomy-17186719616
      } else {
        res.status(400).json({ 
          success: false, 
          message: 'Invalid type parameter' 
<<<<<<< HEAD
        }),
      }
    } catch (error) {
      console.error('Error retrieving data:', error),
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      }),
    }
  } else {
    res.setHeader('Allow', ['POSTGET']),
    res.status(405).json({ 
      success: false, 
      message: `Method ${req.method} Not Allowed` 
    }),
=======
        });
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ 
        success: false, 
        message: 'Internal server error' 
      });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).json({ 
      success: false, 
      message: `Method ${req.method} Not Allowed` 
    });
>>>>>>> origin/auto/autonomy-17186719616
  }
}

function calculateAverages(metrics: PerformanceData[]) {
<<<<<<< HEAD
  if (metrics.length === 0) return null,
=======
  if (metrics.length === 0) return null;
>>>>>>> origin/auto/autonomy-17186719616

  const sums = metrics.reduce((acc, metric) => ({
    fcp: acc.fcp + metric.fcp,
    lcp: acc.lcp + metric.lcp,
    fid: acc.fid + metric.fid,
    cls: acc.cls + metric.cls,
    ttfb: acc.ttfb + metric.ttfb
<<<<<<< HEAD
  }), { fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb: 0 }),
=======
  }), { fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb: 0 });
>>>>>>> origin/auto/autonomy-17186719616

  return {
    fcp: Math.round(sums.fcp / metrics.length),
    lcp: Math.round(sums.lcp / metrics.length),
    fid: Math.round(sums.fid / metrics.length),
    cls: Math.round((sums.cls / metrics.length) * 1000) / 1000,
    ttfb: Math.round(sums.ttfb / metrics.length)
<<<<<<< HEAD
  },
=======
  };
>>>>>>> origin/auto/autonomy-17186719616
}
