

export type UserType = 'freelancer' | 'b2b' | 'hiring_manager' | 'guest',

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
      keepalive: true as any});


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  }
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee



  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

