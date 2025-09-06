<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
export type UserType = 'freelancer' | 'b2b' | 'hiring_manager' | 'guest',;
export type TrackEventPayload = {;
  name: string,;
  page?: string,;
  userType?: UserType,;
  properties?: Record<string any>,;
  at?: string;
},;
export async function trackEvent(payload: TrackEventPayload) {;
  try {;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
export type UserType = 'freelancer' | 'b2b' | 'hiring_manager' | 'guest';
export type TrackEventPayload = {
  name: string;
  page?: string;
  userType?: UserType;
  properties?: Record<string, any>;
  at?: string;
}
export async function trackEvent(payload: TrackEventPayload) {
  try {
    await fetch('/api/analytics/events/track', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify(payload)
      keepalive: true as any
    });
  } catch (e) {
    // swallow
  }
}
<<<<<<< HEAD
=======
=======
  userType?: UserType,;
  properties?: Record<string, any>,;
  at?: string;
};
export async function trackEvent(payload: TrackEventPayload) {;
  try {
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    await fetch('/api/analytics/events/track', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON.stringify(payload);
      keepalive: true as any});
<<<<<<< HEAD
=======
<<<<<<< HEAD
  } catch (e) {;
    // swallow;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
