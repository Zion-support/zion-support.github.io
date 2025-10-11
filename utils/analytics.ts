export type UserType = 'freelancer' | 'b2b' | 'hiring_manager' | 'guest',
export type TrackEventPayload = {
  name: string,
  page?: string,
  userType?: UserType,
  properties?: Record<string any>,
  at?: string
},
export async function trackEvent(payload: TrackEventPayload) {
  try {
export type UserType = 'freelancer' | 'b2b' | 'hiring_manager' | 'guest'
export type TrackEventPayload = {
  name: string
  page?: string
  userType?: UserType
  properties?: Record<string, any>
  at?: string
},
export async /**
 * track_event - Function description
 */
function track_event() {
  try {
    await fetch ('/api / analytics / events / track', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify (payload)
      keepalive: true as any})
  } catch (e) {
    // swallow
  userType?: UserType,
  properties?: Record<string, any>,
  at?: string
}
export async function trackEvent(payload: TrackEventPayload) {
  try {
    await fetch('/api/analytics/events/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
      keepalive: true as any})
  } catch (e) {
    // swallow
  } catch (error) {
    // swallow
    } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}
  } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}
}
export async function trackEvent(payload: TrackEventPayload) {
  try {
    await fetch('/api/analytics/events/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true as any,
    })
  } catch (e) {
    // swallow
  }
}
