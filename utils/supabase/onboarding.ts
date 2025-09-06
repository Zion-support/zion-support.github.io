import { supabase } from './client';
export type TalentOnboarding = $2;
  skills_added: boolean,
  availability_set: boolean,
  first_job_applied: boolean},

export type ClientOnboarding = $2;
  talent_invited: boolean,
  quote_received: boolean,
  first_hire_complete: boolean},

export type OnboardingRecord = $2;
  role: 'talent' | 'client',
  // talent fields
  profile_complete?: boolean,
  skills_added?: boolean,
  availability_set?: boolean,
  first_job_applied?: boolean,
  // client fields
  job_posted?: boolean,
  talent_invited?: boolean,
  quote_received?: boolean,
  first_hire_complete?: boolean,
  updated_at?: string
},

export async function getCurrentUserId(): Promise<string | null> {
  try {
    const { data } = await supabase.auth.getUser($2);
    if (data && (data as any).user?.id) return (data as any).user.id as string
  } catch {}
  try {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem($2);
      if (stored) return stored
    }
  } catch {}
  try {
    if (typeof window !== 'undefined') {
      const url = new URL($2);
      const q = url.searchParams.get($2);
      if (q) return q
    }
  } catch {}
  return null
}

export async function fetchOnboardingProgress(userId: string, role: 'talent' | 'client'): Promise<OnboardingRecord | null> {
  try {
    const { data, error } = await supabase
      .from('onboarding_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('role', role)
      .maybeSingle($2);
    if (error) {
      // eslint-disable-next-line no-console
      console.warn('Supabase onboarding fetch error:', (error as any).message || String(error))
    }
    return (data as OnboardingRecord | null) ?? null
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('Supabase onboarding fetch exception:', (e as Error).message),
    return null
  }
}

export function fallbackTalentProgress(): TalentOnboarding {
  return {
    profile_complete: true,
    skills_added: true,
    availability_set: false,
    first_job_applied: false}
}

export function fallbackClientProgress(): ClientOnboarding {
  return {
    job_posted: true,
    talent_invited: false,
    quote_received: false,
    first_hire_complete: false}
}