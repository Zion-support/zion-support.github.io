export type UserType = 'freelancer' | 'b2b' | 'hiring manager' | 'guest';

export interface TrackEventPayload {
  event: string;
  properties?: Record<string, any>;
  userId?: string;
  userType?: UserType;
}

export async function trackEvent(payload: TrackEventPayload) {
  try {
    await fetch('/api/analytics/events/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    console.error('Failed to track event:', error);
  }
}
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
    // swallow;

  }
}
<<<<<<< HEAD




    await fetch('/api/analytics/events/track', {;
=======
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON.stringify(payload);
      keepalive: true as any});

<<<<<<< HEAD

  }
}
};
export async function trackEvent(payload: TrackEventPayload) {;
  try {
    await fetch('/api/analytics/events/track', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON.stringify(payload);
      keepalive: true as any});
  } catch (e) {;
    // swallow;
=======
  }
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  }
<<<<<<< HEAD
}


  }
}
  }
}
=======
}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
