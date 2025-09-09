// Health check endpoint for monitoring application status
import { NextApiRequest, NextApiResponse } from 'next';

interface HealthStatus {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  uptime: number;
  version: string;
  environment: string;
  checks: {
    database: 'up' | 'down';
    memory: 'ok' | 'warning' | 'critical';
    disk: 'ok' | 'warning' | 'critical';
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse<HealthStatus>) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      checks: {
        database: 'down',
        memory: 'critical',
        disk: 'critical',
      }
    });
  }

  // Check memory usage
  const memoryUsage = process.memoryUsage();
  const memoryUsageMB = memoryUsage.heapUsed / 1024 / 1024;
  let memoryStatus: 'ok' | 'warning' | 'critical' = 'ok';
  
  if (memoryUsageMB > 500) {
    memoryStatus = 'warning';
  }
  if (memoryUsageMB > 1000) {
    memoryStatus = 'critical';
  }

  // Check disk space (simplified check)
  let diskStatus: 'ok' | 'warning' | 'critical' = 'ok';
  try {
    const fs = require('fs');
    const stats = fs.statSync('.');
    // This is a simplified check - in production you'd want more sophisticated disk monitoring
    diskStatus = 'ok';
  } catch (error) {
    diskStatus = 'critical';
  }

  // Database check (simplified - in production you'd check actual database connectivity)
  const databaseStatus: 'up' | 'down' = 'up';

  const healthStatus: HealthStatus = {
    status: memoryStatus === 'critical' || diskStatus === 'critical' ? 'unhealthy' : 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.npm_package_version || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    checks: {
      database: databaseStatus,
      memory: memoryStatus,
      disk: diskStatus,
    }
  };

  const statusCode = healthStatus.status === 'healthy' ? 200 : 503;
  res.status(statusCode).json(healthStatus);
}