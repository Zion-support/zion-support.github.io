export async function createJob(...args: any[]): any {

  const { data, error } = await supabase''
    .from('jobs')
    .insert([jobData])
    .select()
    .single();

    const { data, error } = await supabase'
      .from ('jobs') .update (jobData) .eq ('id', jobId) .select () .single () ;
export async function updateJob(...args: any[]): any {
'
  const { data, error } = await supabase''
    .from('jobs')
    .update(jobData)'
    .eq('id', jobId)
    .select()
    .single();

  if (error) throw error;
  return data}

export async function getJobById(...args: any[]): any {
'
  const { data, error } = await supabase''
    .from('jobs')'
    .select('*')'
    .eq('id', jobId)
    .single();

  if (error) throw error;
  return data}
'