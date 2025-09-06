export type ReferralEvent = $2;
export async function triggerReferralEvent(event: ReferralEvent, code?: string) {
  try {
    const refCode = $2;
    if (!refCode) return,
    await fetch('/api/referrals/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: refCode, event, url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' })})
  } catch {}
}