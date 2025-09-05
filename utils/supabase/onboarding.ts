
export type TalentOnboarding = {_profile_complete: boolean;
  skills_added: boolean;
  availability_set: boolean;
  first_job_applied: boolean;};

export type ClientOnboarding = {_job_posted: boolean;
  talent_invited: boolean;
  quote_received: boolean;
  first_hire_complete: boolean;};

export type OnboardingRecord = {_user_id: string;
  role: 'talent' | 'client';
  // talent fields
  profile_complete?: boolean;
  skills_added?: boolean;
  availability_set?: boolean;
  first_job_applied?: boolean;
  // client fields
  job_posted?: boolean;
  talent_invited?: boolean;
  quote_received?: boolean;
  first_hire_complete?: boolean;
  updated_at?: string;};

export async function getCurrentUserId(): Promise<string | null> {_try {
    const { data} = await supabase.auth.getUser();
    if (data && (data as any).user?.id) return (data as any).user.id as string;
  } catch {}
  try {_if (typeof window !== 'undefined') {
      const _stored = localStorage.getItem('zion_user_id');
      if (stored) return stored;}
  } catch {}
  try {_if (typeof window !== 'undefined') {
      const _url = new window.URL(window.location.href);
      const _q = url.searchParams.get('userId');
      if (q) return q;}
  } catch {}
  return null;
}

export async function fetchOnboardingProgress(_userId: string, _role: 'talent' | 'client'): Promise<OnboardingRecord | null> {_try {
    const { data, _error} = await supabase
      .from('onboarding_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('role', role)
      .maybeSingle();

    if (error) {_// eslint-disable-next-line no-console
      .message || String(error));}
    return (data as OnboardingRecord | null) ?? null;
  } catch (e) {_// eslint-disable-next-line no-console
    .message);
    return null;}
}

export function fallbackTalentProgress(): TalentOnboarding {_return {
    profile_complete: true, _skills_added: true, _availability_set: false, _first_job_applied: false};
}

export function fallbackClientProgress(): ClientOnboarding {_return {
    job_posted: true, _talent_invited: false, _quote_received: false, _first_hire_complete: false};
}