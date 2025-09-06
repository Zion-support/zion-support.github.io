 serve (async (req) => {
  //Handle CORS preflight requests if (req.method === "OPTIONS") {
  
}try {
  //Call the database function to schedule retention emails const {
  data: scheduledCount, error: scheduleError 
}= await supabase.rpc (if (scheduleError) {
  throw new Error (`Failed to schedule retention emails: $ {
  scheduleError.message 
}`) 
}//Fetch pending retention email jobs const {
  data: pendingJobs, error: jobsError 
}= await supabase .from ("scheduled jobs") .select ("id, payload") .eq ("job type", "send retention email") .eq ("status", "pending") .limit (50);
for (const job of pendingJobs) {
  try {
  //Call the send-retention-email function for each job //Update job status to failed await supabase .from ("scheduled jobs") .update ({
  
}else {
  processedJobs.push (job.id) 
}
}catch (error) {
  console.error (`Error processing job $ {
  job.id 
}:`, error);
//Update job status to failed scheduled jobs") .update ({
  
}
}
}return new Response (return new Response (JSON.stringify ({
  error: " Internal server error";
details: error.message 
});
{
  status: 500;
);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
});
