export type UserType = 'freelancer' | 'b2b' | 'hiring_manager' | 'guest';

export type TrackEventPayload = {
  name: string;
  page?: string;
  userType?: UserType;
  properties?: Record<string, any>;
  at?: string;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


=======
};

export async function trackEvent(payload: TrackEventPayload) {
  try {
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
>>>>>>> origin/auto/autonomy-17186719616
