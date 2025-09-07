import { supabase } from './client';

export interface OnboardingRecord {
  id: string;
  userId: string;
  role: 'talent' | 'client';
  // talent fields
  profileComplete?: boolean;
  skillsAdded?: boolean;
  availabilitySet?: boolean;
  firstJobApplied?: boolean;
  // client fields
  companyProfileComplete?: boolean;
  firstJobPosted?: boolean;
  firstHire?: boolean;
  // common fields
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export async function fetchOnboardingProgress(userId: string, role: 'talent' | 'client'): Promise<OnboardingRecord | null> {
  try {
    const { data, error } = await supabase
      .from('onboarding_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('role', role)
      .maybeSingle();

    if (error) {
      console.error('Error fetching onboarding progress:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching onboarding progress:', error);
    return null;
  }
}

export async function updateOnboardingProgress(
  userId: string,
  role: 'talent' | 'client',
  updates: Partial<OnboardingRecord>
): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('onboarding_progress')
      .update({
        ...updates,
        updatedAt: new Date().toISOString()
      })
      .eq('user_id', userId)
      .eq('role', role);

    if (error) {
      console.error('Error updating onboarding progress:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error updating onboarding progress:', error);
    return false;
  }
}

export async function createOnboardingRecord(record: Omit<OnboardingRecord, 'id' | 'createdAt' | 'updatedAt'>): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('onboarding_progress')
      .insert({
        ...record,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

    if (error) {
      console.error('Error creating onboarding record:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error creating onboarding record:', error);
    return false;
  }
}