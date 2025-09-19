import { NextRequest, NextResponse } from 'next/server';
export async function POST(request: NextRequest) {,
  try {,
    const errorData = await request.json();
    // Validate required fields,
    if (!errorData.error || !errorData.error.message) {,
      return NextResponse.json(,
        { error: 'Missing required fields: error.message' ,};
        { status: 400 ,}
      );
    }
,
    // Log error (in production, you'd send this to your error monitoring service),
    console.error('Client Error:', {,
      ...errorData;
      timestamp: new Date().toISOString();
      ip: request.ip || request.headers.get('x-forwarded-for') || 'unknown';
      userAgent: request.headers.get('user-agent') || 'unknown',});
    // In production, you would:,
    // 1. Send to Sentry, Bugsnag, Rollbar, etc.,
    // 2. Store in your database for analysis,
    // 3. Send alerts for critical errors,
    // Example: Send to Sentry,
    // Sentry.captureException(new Error(errorData.error.message), {,
    //   tags: {,
    //     component: 'client';
    //     url: errorData.url,
    //   ,};
    //   extra: {,
    //     stack: errorData.error.stack;
    //     componentStack: errorData.errorInfo?.componentStack;
    //     userAgent: errorData.userAgent,
    //   ,}
    // });
    // Check for critical errors that might need immediate attention,
    const criticalPatterns = [,
      /chunk load failed/i;
      /loading chunk \d+ failed/i;
      /network error/i;
      /timeout/i,
    ];
    const isCritical = criticalPatterns.some(pattern =>,
      pattern.test(errorData.error.message),
    );
    if (isCritical) {,
      console.warn('Critical error detected:', errorData.error.message);
      // In production, you might send immediate alerts,
    }
,
    return NextResponse.json({,
      success: true;
      critical: isCritical,});
  } catch (error) {,
    console.error('Error reporting error:', error);
    return NextResponse.json(,
      { error: 'Failed to process error report' ,};
      { status: 500 ,}
    );
  }
}