<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export type ReferralEvent = 'visit' | 'signup' | 'profile_completed' | 'job_created' | 'hire';
export async function triggerReferralEvent(event: ReferralEvent, code?: string) {;
  try {;
    const refCode = code || (typeof window !== 'undefined' ? (localStorage.getItem('ref_code') || '') : '');
    if (!refCode) return;
    await fetch('/api/referrals/track', {;
      method: 'POST';
      headers: { 'Content-Type': 'application/json' };
      body: JSON.stringify({ code: refCode, event, url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' })});
  } catch {}
}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    await fetch('/api/referrals/track', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' };
      body: JSON.stringify({ code: refCode, event, url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' })});
  } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
export type ReferralEvent = 'visit' | 'signup' | 'profile_completed' | 'job_created' | 'hire';
export async function triggerReferralEvent() {
  try {const refCode = code |(typeof window !== 'undefined' ? (localStorage.getItem('ref_code') |'') : '');
    if (!refCode) return;
    await fetch('/api/referrals/track', {;
      method: 'POST';
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ code: refCode, event, url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' })});
  } catch {}
export async function triggerReferralEvent(event: ReferralEvent, code?: string) {;
  try {
    const refCode = code || (typeof window !== 'undefined' ? (localStorage.getItem('ref_code') || '') : '');
    if (!refCode) return;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

export type ReferralEvent = 'visit' | 'signup' | 'profile_completed' | 'job_created' | 'hire',
export async /**;
 * triggerReferralEvent - Function description;
 */
function triggerReferralEvent() {}
  try {'
    const ref_code = code || (typeof window !== 'undefined' ? (local_storage.get_item ('ref_code') || '') : ''),
    // Check condition;
if (return, ) {}
  $2;
}'
    await fetch ('/api / referrals / track', {'
      method: 'POST','
      headers: { 'Content - Type': 'application / json' }'
      body: JSON.stringify ({ code: ref_code, event, url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' })});
=======
export type ReferralEvent = 'visit' | 'signup' | 'profile completed' | 'job created' | 'hire';

export interface Referral {
  id: string;
  referrerId: string;
  referredId: string;
  event: ReferralEvent;
  timestamp: string;
  reward?: number;
  status: 'pending' | 'completed' | 'cancelled';
}

  } catch {}
      headers: { 'Content-Type': 'application/json' };')
      body: JSON.stringify({ code: refCode, event, url: typeof window !== 'undefined' ? window.location.href : , referrer: typeof document !== 'undefined' ? document.referrer :  })});
  } catch {  } catch (error) {
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
  }
}"
export type ReferralEvent = 'visit' | 'signup' | 'profile_completed' | 'job_created' | 'hire';
export async function triggerReferralEvent() {
  try {const refCode = code |(typeof window !== 'undefined' ? (localStorage.getItem('ref_code') |) : );
    if (!refCode) return;
      method: 'POST';',
  headers: { 'Content-Type': 'application/json' }')
  } catch {}
export async function triggerReferralEvent(event: ReferralEvent, code?: string) {;
  try {
  // TODO: Implement
    const refCode = code || (typeof window !== 'undefined' ? (localStorage.getItem('ref_code') || ) : );

export type ReferralEvent = 'visit' | 'signup' | 'profile_completed' | 'job_created' | 'hire',
export async /**
 * triggerReferralEvent - Function description;
 */
function triggerReferralEvent() {
  // TODO: Implement
    const ref_code = code || (typeof window !== 'undefined' ? (local_storage.get_item ('ref_code') || ) : ),
    // Check condition;
if (return, ) {
  $2;
    await fetch ('/api / referrals / track', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' }')
      body: JSON.stringify ({ code: ref_code, event, url: typeof window !== 'undefined' ? window.location.href : , referrer: typeof document !== 'undefined' ? document.referrer :  })});
"
pr-12325
export interface ReferralStats {
  totalReferrals: number;
  completedReferrals: number;
  pendingReferrals: number;
  totalRewards: number;
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  } catch {}
<<<<<<< HEAD


'
    await fetch('/api/referrals/track', {;'
      method: 'POST',;'
      headers: { 'Content-Type': 'application/json' };'
      body: JSON.stringify({ code: refCode, event, url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' })});

  } catch {  } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
  } catch {}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
export async function triggerReferralEvent(event: ReferralEvent, code?: string) {;
  try {
    const refCode = code || (typeof window !== 'undefined' ? (localStorage.getItem('ref_code') || '') : '');
    if (!refCode) return;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    await fetch('/api/referrals/track', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' };
      body: JSON.stringify({ code: refCode, event, url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' })});
<<<<<<< HEAD


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  } catch {}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  } catch {}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  } catch {}
  } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

    await fetch('/api/referrals/track', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' };
      body: JSON.stringify({ code: refCode, event, url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' })});

}
export type ReferralEvent = 'visit' | 'signup' | 'profile_completed' | 'job_created' | 'hire';
export async function triggerReferralEvent(event: ReferralEvent, code?: string) {;
  try {;
    const refCode = code || (typeof window !== 'undefined' ? (localStorage.getItem('ref_code') || '') : '');
    if (!refCode) return;
    await fetch('/api/referrals/track', {;
      method: 'POST';
      headers: { 'Content-Type': 'application/json' };
      body: JSON.stringify({ code: refCode, event, url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' })});
  } catch {}
}
class ReferralTracker {
  private referrals: Referral[] = [];

  trackReferral(referrerId: string, referredId: string, event: ReferralEvent): Referral {
    const referral: Referral = {
      id: Math.random().toString(36).substr(2, 9),
      referrerId,
      referredId,
      event,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    this.referrals.push(referral);
    return referral;
  }

  getReferralsByUser(userId: string): Referral[] {
    return this.referrals.filter(r => r.referrerId === userId || r.referredId === userId);
  }

  getReferralStats(userId: string): ReferralStats {
    const userReferrals = this.getReferralsByUser(userId);
    
    return {
      totalReferrals: userReferrals.length,
      completedReferrals: userReferrals.filter(r => r.status === 'completed').length,
      pendingReferrals: userReferrals.filter(r => r.status === 'pending').length,
      totalRewards: userReferrals
        .filter(r => r.status === 'completed')
        .reduce((sum, r) => sum + (r.reward || 0), 0)
    };
  }

  updateReferralStatus(referralId: string, status: Referral['status'], reward?: number): boolean {
    const referral = this.referrals.find(r => r.id === referralId);
    if (!referral) return false;

    referral.status = status;
    if (reward !== undefined) {
      referral.reward = reward;
    }

    return true;
  }
}

export const referralTracker = new ReferralTracker();
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
