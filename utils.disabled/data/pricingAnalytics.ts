<<<<<<< HEAD:utils.disabled/data/pricingAnalytics.ts
import { supabase } from '@/utils/supabase/client';

export type PricingAnalyticsEvent = {
  kind: 'client_suggestion' | 'talent_suggestion' | 'applied_suggestion';
  payload: Record<string, unknown>;
};

export async function logPricingAnalytics(event: PricingAnalyticsEvent): Promise<void> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) return;
    await supabase.from('pricing_events').insert({ kind: event.kind, payload: event.payload });
  } catch {
    // silent fail
  }
}
=======
// Stub pricing analytics utility - placeholder for missing functionality
export const trackPricingRequest = async (data: any) => {
  // Placeholder implementation
  return { success: true };
};

export const getPricingMetrics = async () => {
  // Placeholder implementation
  return { metrics: {}, success: true };
};
>>>>>>> autobot/2025-08-24T03-49-38-332Z:utils/data/pricingAnalytics.ts
