export type ReferralEvent = 'visit' | 'signup' | 'profile_completed' | 'job_created' | 'hire';

export async function triggerReferralEvent(_event: ReferralEvent, _code?: string) {_try {
    const _refCode = code || (typeof window !== 'undefined' ? (localStorage.getItem('ref_code') || '') : '');
    if (!refCode) return;
    await fetch('/api/referrals/track', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_code: refCode, _event, _url: typeof window !== 'undefined' ? window.location.href : '', _referrer: typeof document !== 'undefined' ? document.referrer : ''})});
  } catch {}
}