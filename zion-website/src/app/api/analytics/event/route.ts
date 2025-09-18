import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Validate the data
    if (!data.action || !data.category) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Log the event (in production, you'd send this to your analytics service)
    console.log('Event tracked:', {
      timestamp: data.timestamp,
      session_id: data.session_id,
      user_id: data.user_id,
      action: data.action,
      category: data.category,
      label: data.label,
      value: data.value,
      page_url: data.page_url,
      page_title: data.page_title,
      custom_parameters: data.custom_parameters,
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    })

    // In production, you would typically:
    // 1. Send to Google Analytics, Mixpanel, or your analytics service
    // 2. Store in your database
    // 3. Process for real-time dashboards
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error tracking event:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}