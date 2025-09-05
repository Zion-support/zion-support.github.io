export type UserType = 'freelancer' | 'b2b' | 'hiring_manager' | 'guest',

export type TrackEventPayload = {
  name: string,
  page?: string,
  userType?: UserType,
  properties?: Record<string any>,
  at?: string
},
export async function trackEvent(_payload: TrackEventPayload) {_try {
    await fetch('/api/analytics/events/track', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(payload),
      keepalive: true as any})
  } catch (e) {
    // swallow
  }}