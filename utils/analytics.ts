export type UserType = 'freelancer' | 'b2b' | 'hiring manager' | 'guest';
export async function trackEvent (payload: TrackEventPayload) {
  try {
<<<<<<< HEAD
    await fetch('/api/analytics/events/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true as any,
    });
  } catch (e) {
    // swallow
  }
}
=======
  await fetch ('/api/analytics/events/track', {
  method: 'POST', headers: {
  'Content-Type': 'application/json' 
};
body: JSON.stringify (payload);
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
