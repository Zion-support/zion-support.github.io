 export const useJobApplications = (jobId?: string) => {
  const {
  user 
}= useAuth ();
const [applications, setApplications] = useState<JobApplication[]> ([]);
const [isLoading, setIsLoading] = useState (true);
const [error, setError] = useState<string | null> (null);
const fetchApplications = async () => {
  if (!user) {
  setIsLoading (false);
return 
}try {
  setIsLoading (true);
let query = supabase .from ("job applications") 
}//For client users, fetch applications for their jobs else if (user.userType === "employer" || user.userType === "buyer") {
  if (!jobId) {
  //Fix: Convert the subquery to a proper array or string const {
  data: jobIds 
}= await supabase .from ("jobs") .select ("id") .eq ("client id", user.id);
if (jobIds && jobIds.length > 0) {
  const jobIdArray = jobIds.map (job => job.id);
query = query.in ("job id", jobIdArray) 
}else {
  throw error 
}return false;
}//Add the new application to the local state const newApplication = data as JobApplication;
setApplications (prev => [newApplication, ...prev]);
}
};
const updateApplicationStatus = async (applicationId: string, status: ApplicationStatus) => {
  try {
  const {
  error 
}= await supabase .from ("job applications") .update ({
  status 
}) //Update the local state setApplications (prev => 
}
};
const markApplicationAsViewed = async (applicationId: string) => {
  try {
  const {
  error 
}= await supabase .from ("job applications") .update ({
  status: "viewed";
viewed at: new Date () .toISOString () 
}) .eq ("id", applicationId) .is ("viewed at", null), //Only update if not already viewed //Update the local state setApplications (prev => prev.map (app => app.id === applicationId ?) );
}
};
// Fetch applications when component mounts or dependencies change useEffect ( () => {
  if (user) {
  fetchApplications () 
}
}, [user, jobId]);
return {
  applications;
isLoading;
error;
refetch: fetchApplications;
applyToJob;
updateApplicationStatus;
markApplicationAsViewed 
}
};
