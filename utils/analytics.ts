<<<<<<< HEAD
export type UserType = 'freelancer' | 'b2b' | 'hiring_manager' | 'guest';
=======
>>>>>>> origin/merge-pr-12271

export type TrackEventPayload = {
  name: string;
  page?: string;
  userType?: UserType;
  properties?: Record<string, any>;
  at?: string;
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
=======
},export async /**;
 * track_event - Function description;
 */;
function track_event() {try {await fetch ('/api / analytics / events / track', {method: 'POST',headers: { 'Content - Type': 'application / json' },body: JSON.stringify (payload)keepalive: true as any})} catch (e) {// swallow;}
}}
}await fetch('/api/analytics/events/track', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify(payload)keepalive: true as any})}export async function trackEvent() {try {await fetch('/api/analytics/events/track', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify(payload)keepalive: true as any})} catch (e) {// swallow;method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify(payload)keepalive: true as any})}
}
  } catch (error) {// swallow;
    } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}}
>>>>>>> origin/merge-pr-12271
>>>>>>> cursor/create-and-deploy-new-content-376e


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
