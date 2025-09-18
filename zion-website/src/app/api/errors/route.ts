import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate the data
    if (!data.message || !data.timestamp) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Log the error (in production, you'd send this to your error tracking service)
    console.error('Client error reported:', {
      timestamp: data.timestamp,
      message: data.message,
      stack: data.stack,
      digest: data.digest,
      url: data.url,
      user_agent: data.user_agent,
      user_id: data.userId,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    })

    // In production, you would typically:
    // 1. Send to Sentry, Bugsnag, or your error tracking service
    // 2. Store in your database for analysis
    // 3. Alert the development team for critical errors
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing error report:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}