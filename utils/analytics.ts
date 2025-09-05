<<<<<<< HEAD
export type UserType = 'freelancer' | 'b2b' | 'hiring_manager' | 'guest',;
;
export type TrackEventPayload = {;
  name:string,;
  page?:string,;
  userType?:UserType,;
  properties?:Record<string any>,;
  at?:string;
},;
;
export async function trackEvent(payload:TrackEventPayload) {;
  try {;
    await fetch('/api/analytics/events/track', {;
      method:'POST',;
      headers:{ 'Content-Type':'application/json' },;
      body:JSON.stringify(payload),;
      keepalive:true as any}),;
  } catch (e) {;
    // swallow;
  }
}
=======
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
