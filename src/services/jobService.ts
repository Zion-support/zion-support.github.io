
import { supabase  } from '@/integrations/supabase/client';

export async function createJob(...args: unknown[]): any {
  const { data, error } = await supabase
    .from('jobs')
    .insert([jobData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateJob(...args: unknown[]): any {
  const { data, error } = await supabase
    .from('jobs')
    .update(jobData)
    .eq('id', jobId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getJobById(...args: unknown[]): any {
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', jobId)
    .single();

  if (error) throw error;
  return data;
}
