import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate the data
    if (typeof data.lcp !== 'number' || typeof data.fid !== 'number' || typeof data.cls !== 'number') {
      return NextResponse.json({ error: 'Missing required performance metrics' }, { status: 400 })
    }

    // Log the performance metrics (in production, you'd send this to your analytics service)
    console.log('Performance metrics:', {
      timestamp: new Date().toISOString(),
      lcp: data.lcp,
      fid: data.fid,
      cls: data.cls,
      loadTime: data.loadTime,
      connectionType: data.connectionType,
      memoryUsage: data.memoryUsage,
      page_url: request.headers.get('referer') || 'unknown',
      user_agent: request.headers.get('user-agent')?.substring(0, 100),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    })

    // In production, you would typically:
    // 1. Send to Google Analytics, Core Web Vitals API, or your monitoring service
    // 2. Store in your database for trend analysis
    // 3. Alert if performance thresholds are exceeded
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error tracking performance metrics:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}