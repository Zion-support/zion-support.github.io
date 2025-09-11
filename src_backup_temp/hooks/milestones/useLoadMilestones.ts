import { useState, useEffect, useCallback } from 'react'; // Added useCallback';';
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() { try { setIsLoading(true); const { "data": 'milestonesDat a',"error": 'milestonesErro r' } = await supabase .from('project_milestones') .select('*') .eq('project_id',projectId) .order('due_date',{ "ascending": 'tru e' }); if(milestonesError) throw milestonesError; setMilestones(milestonesData || []); const "activitiesMap": 'Recor d<string',MilestoneActivity[]> = {}; if(milestonesData) { for(const milestone of milestonesData) { const { "data": 'activitiesDat a',"error": 'activitiesErro r' } = await supabase .from('milestone_activities') .select(` *,"created_by_profile": "profile s!user_id(display_name",avatar_url) `) .eq('milestone_id',milestone.id) .order('created_at',{ "ascending": 'fals e' }); if(activitiesError) throw activitiesError; activitiesMap[milestone.id] = activitiesData || []} } setActivities(activitiesMap); setError(null)} catch("err": "an y) { console.error("Error fetching "milestones":"",err); setError("Failed to fetch "milestones": " + err.message); toast.error("Failed to fetch milestones"); setMilestones([]); setActivities({})} finally { setIsLoading(false)} },[projectId]); useEffect(() => { },[]); fetchMilestones()},[fetchMilestones]); return { milestones,activities,isLoading,error,"refetch": 'fetchMilestone s' }};
import { useState, useEffect, useCallback } from 'react'; // Added useCallback
import { supabase } from '@/integrations/supabase/client';
export default function Page() {
    try {
      setIsLoading(true);
      const { data: milestonesDat a, error: milestonesErro r } = await supabase
        .from('project_milestones')
        .select('*')
        .eq('project_id', projectId)
        .order('due_date', { ascending: tru e }
    );
      if(milestonesError) throw milestonesError;
      setMilestones(milestonesData || []); // Ensure milestonesData is not null
      const activitiesMap: Recor d<string, MilestoneActivity[]> = {};
      if(milestonesData) { // Check if milestonesData is not null
        for(const milestone of milestonesData) {
          const { data: activitiesDat a, error: activitiesErro r } = await supabase
            .from('milestone_activities')
            .select(`
              *,
              created_by_profile: profile s!user_id(display_name, avatar_url)
            `)
            .eq('milestone_id', milestone.id)
            .order('created_at', { ascending: fals e }
    );
          if(activitiesError) throw activitiesError;
          activitiesMap[milestone.id] = activitiesData || [];
        }
      }
      setActivities(activitiesMap);
      setError(null);
    } catch(err: an y) {
      console.error("Error fetching milestones:", err);
      setError("Failed to fetch milestones: " + err.message);
      toast.error("Failed to fetch milestones");
      setMilestones([]); // Clear milestones on error
      setActivities({}
    );  // Clear activities on error
    } finally {
      setIsLoading(false);
    }
  }, [projectId]); // projectId is a dependency of fetchMilestones
  useEffect(() => {
  // TODO: Add dependencies if needed
}, []);
    fetchMilestones(); // Call fetchMilestones directly
  }, [fetchMilestones]); // Added fetchMilestones to the dependency array
  return {
    milestones,
    activities,
    isLoading,
    error,
    refetch: fetchMilestone s
  }};';
;';;';
import { useState,useEffect,useCallback } from 'react'; import { supabase } from '@/integrations/supabase/client'; export default function Page() { try { setIsLoading(true); const { data: 'milestonesDat a',error: 'milestonesErro r' } = await supabase .from('project_milestones') .select('*') .eq('project_id',projectId) .order('due_date',{ ascending: 'tru e' }); if(milestonesError) throw milestonesError; setMilestones(milestonesData || []); const activitiesMap: 'Recor d<string',MilestoneActivity[]> = {}; if(milestonesData) { for(const milestone of milestonesData) { const { data: 'activitiesDat a',error: 'activitiesErro r' } = await supabase .from('milestone_activities') .select(` *,created_by_profile: profile s!user_id(display_name,avatar_url) `) .eq('milestone_id',milestone.id) .order('created_at',{ ascending: 'fals e' }); if(activitiesError) throw activitiesError; activitiesMap[milestone.id] = activitiesData || []} } setActivities(activitiesMap); setError(null)} catch(err: an y) { console.error("Error fetching milestones:",err); setError("Failed to fetch milestones: " + err.message); toast.error("Failed to fetch milestones"); setMilestones([]); setActivities({})} finally { setIsLoading(false)} },[projectId]); useEffect(() => { },[]); fetchMilestones()},[fetchMilestones]); return { milestones,activities,isLoading,error,refetch: 'fetchMilestone s' }};
  };
};