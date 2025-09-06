 const {
  data: milestonesData, error: milestonesError 
}= await supabase .from ('project milestones') .select ('*') .eq ('project id', projectId) if (milestonesError) throw milestonesError;
setMilestones (milestonesData);
//Fetch activities for each milestone const activitiesMap: Record<string MilestoneActivity[]> = {
  
};
for (const milestone of milestonesData) {
  const {
  data: activitiesData, error: activitiesError 
}= await supabase .from ('milestone activities') .select (`*;
created by profile:profiles!user id (display name, avatar url) `) .eq ('milestone id', milestone.id) if (activitiesError) throw activitiesError;
activitiesMap[milestone.id] = activitiesData || [] 
}
}finally {
  setIsLoading (false) 
}
};
// Fetch milestones when component mounts or projectId changes useEffect ( () => {
  if (projectId) {
  fetchMilestones () 
}
}, [projectId]);
return {
  milestones;
activities;
isLoading;
error;
refetch: fetchMilestones 
}
};
