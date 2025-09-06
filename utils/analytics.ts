export type UserType = $2;
export type TrackEventPayload = $2;
  page?: string,
  userType?: UserType,
  properties?: Record<string, any>,
  at?: string
},

export async function trackEvent(payload: TrackEventPayload) {
  try {
    await fetch($2);
      keepalive: true as any})
  } catch (e) {
    // swallow
  }
}