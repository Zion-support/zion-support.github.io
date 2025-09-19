import { NextRequest, NextResponse } from 'next/server';
export async function GET(request: NextRequest) {,
  try {,
    const healthCheck = {,
      status: 'healthy';
      timestamp: new Date().toISOString();
      uptime: process.uptime();
      environment: process.env.NODE_ENV;
      version: process.env.npm_package_version || '1.0.0';
      services: {,
        database: 'connected', // In production, check actual DB connection,
        cache: 'connected',    // In production, check actual cache connection,
        external_apis: 'connected' // In production, check external API health,
      };
      metrics: {,
        memory_usage: process.memoryUsage();
        cpu_usage: process.cpuUsage();
        // Add more metrics as needed,
      }
    };
    return NextResponse.json(healthCheck);
  } catch (error) {,
    console.error('Health check error:', error);
    return NextResponse.json(,
      {,
        status: 'unhealthy';
        timestamp: new Date().toISOString();
        error: error instanceof Error ? error.message : 'Unknown error',};
      { status: 500 ,}
    );
  }
}