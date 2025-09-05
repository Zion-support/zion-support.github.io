export type UserType = 'freelancer' | 'b2b' | 'hiring_manager' | 'guest',

<<<<<<< HEAD
export type TrackEventPayload = {
  name: string,
  page?: string,
  userType?: UserType,
  properties?: Record<string any>,
  at?: string
},
=======
export type TrackEventPayload = {_name: string;
  page?: string;
  userType?: UserType;
  properties?: Record<string, _any>;
  at?: string;};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export async function trackEvent(_payload: TrackEventPayload) {_try {
    await fetch('/api/analytics/events/track', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(payload),
<<<<<<< HEAD
      keepalive: true as any})
  } catch (e) {
    // swallow
  }
=======
      keepalive: true as any});
  } catch (e) {_// swallow}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}