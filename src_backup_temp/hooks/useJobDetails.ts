import { useState, useEffect, useCallback } from 'react'; // Added useCallback';';
import { supabase } from '@/integrations/supabase/client';
export default function Page() {
  return (
 finally {
      setIsLoading(false)}
  }, [jobId]); // jobId is a dependency of loadJobDetails
  useEffect(() => {
  // TODO: Add dependencies if needed
}, []);
    loadJobDetails()}, [loadJobDetails]); // Added loadJobDetails to dependency array
  return {
    job,
    isLoading,
    error,
    loadJobDetails, // Return refetch function as loadJobDetails for clarity
    refetch: loadJobDetail s // Added refetch alias for consistency if preferred
  }}
export default useJobDetails;';
;';;';
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() { finally { setIsLoading(false)} },[jobId]); useEffect(() => { },[]); loadJobDetails()},[loadJobDetails]); return { job,isLoading,error,loadJobDetails,refetch: 'loadJobDetail s }} export default useJobDetails;
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() { finally { setIsLoading(false)} },[jobId]); useEffect(() => { },[]); loadJobDetails()},[loadJobDetails]); return { job,isLoading,error,loadJobDetails,"refetch": 'loadJobDetail s }} export default useJobDetails;
