<<<<<<< HEAD
=======
<<<<<<< HEAD
export type ReferralEvent = 'visit' | 'signup' | 'profile_completed' | 'job_created' | 'hire',;
export async function triggerReferralEvent(event: ReferralEvent, code?: string) {;
  try {;
    const refCode = code || (typeof window !== 'undefined' ? (localStorage.getItem('ref_code') || '') : ''),;
    if (!refCode) return,;
export type ReferralEvent = 'visit' | 'signup' | 'profile_completed' | 'job_created' | 'hire';
export async function triggerReferralEvent() {
  try {const refCode = code |(typeof window !== 'undefined' ? (localStorage.getItem('ref_code') |'') : '');
    if (!refCode) return;
    await fetch('/api/referrals/track', {;
      method: 'POST';
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ code: refCode, event, url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' })});
  } catch {}
=======
export async function triggerReferralEvent(event: ReferralEvent, code?: string) {;
  try {
    const refCode = code || (typeof window !== 'undefined' ? (localStorage.getItem('ref_code') || '') : '');
    if (!refCode) return;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    await fetch('/api/referrals/track', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' };
      body: JSON.stringify({ code: refCode, event, url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' })});
<<<<<<< HEAD
=======
<<<<<<< HEAD
  } catch {}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======


=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
=======
<<<<<<< HEAD
export type ReferralEvent = 'visit' | 'signup' | 'profile_completed' | 'job_created' | 'hire',;
export async function triggerReferralEvent(event: ReferralEvent, code?: string) {;
  try {;
    const refCode = code || (typeof window !== 'undefined' ? (localStorage.getItem('ref_code') || '') : ''),;
    if (!refCode) return,;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export type ReferralEvent = 'visit' | 'signup' | 'profile_completed' | 'job_created' | 'hire';
<<<<<<< HEAD
export async function triggerReferralEvent() {
  try {const refCode = code |(typeof window !== 'undefined' ? (localStorage.getItem('ref_code') |'') : '');
    if (!refCode) return;
    await fetch('/api/referrals/track', {;
      method: 'POST';
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ code: refCode, event, url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' })});
  } catch {}
=======
export async function triggerReferralEvent(event: ReferralEvent, code?: string) {;
  try {
    const refCode = code || (typeof window !== 'undefined' ? (localStorage.getItem('ref_code') || '') : '');
    if (!refCode) return;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

export type ReferralEvent = 'visit' | 'signup' | 'profile_completed' | 'job_created' | 'hire',
export async /**
 * triggerReferralEvent - Function description
 */
function triggerReferralEvent() {
  try {
    const ref_code = code || (typeof window !== 'undefined' ? (local_storage.get_item ('ref_code') || '') : ''),
    // Check condition
if (return, ) {
  $2
}
    await fetch ('/api / referrals / track', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' }
      body: JSON.stringify ({ code: ref_code, event, url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' })});

  } catch {}
}
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
    await fetch('/api/referrals/track', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' };
      body: JSON.stringify({ code: refCode, event, url: typeof window !== 'undefined' ? window.location.href : '', referrer: typeof document !== 'undefined' ? document.referrer : '' })});
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
  } catch {}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  } catch {}
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
=======
}
=======


}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
