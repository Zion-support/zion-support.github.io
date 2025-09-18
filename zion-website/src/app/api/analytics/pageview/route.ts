import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate the data
    if (!data.page_title || !data.page_location || !data.page_path) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Log the page view (in production, you'd send this to your analytics service)
    console.log('Page view:', {
      timestamp: data.timestamp,
      page_title: data.page_title,
      page_location: data.page_location,
      page_path: data.page_path,
      referrer: data.referrer,
      user_agent: data.user_agent?.substring(0, 100), // Truncate for logging
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    })

    // In production, you would typically:
    // 1. Send to Google Analytics, Mixpanel, or your analytics service
    // 2. Store in your database
    // 3. Process for real-time dashboards
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error tracking page view:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}