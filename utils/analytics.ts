export type TrackEventPayload = {
  name: string;
  page?: string;
  userType?: UserType;
  properties?: Record<string, any>;
  at?: string;
},
export async /**
 * track_event - Function description
 */
function track_event() {
  try {
    await fetch ('/api / analytics / events / track', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify (payload);
      keepalive: true as any});
  } catch (e) {

    await fetch('/api/analytics/events/track', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON.stringify(payload);
