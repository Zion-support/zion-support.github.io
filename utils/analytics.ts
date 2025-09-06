
<<<<<<< HEAD

export type UserType = 'freelancer' | 'b2b' | 'hiring_manager' | 'guest';

=======
export type UserType = 'freelancer' | 'b2b' | 'hiring_manager' | 'guest',
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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

<<<<<<< HEAD
    // swallow
  userType?: UserType,;
  properties?: Record<string, any>,;
  at?: string;
};
export async function trackEvent(payload: TrackEventPayload) {;
  try {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
  }
}
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    await fetch('/api/analytics/events/track', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON.stringify(payload);
      keepalive: true as any});
<<<<<<< HEAD


  } catch (error) {
    // swallow;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  }
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
