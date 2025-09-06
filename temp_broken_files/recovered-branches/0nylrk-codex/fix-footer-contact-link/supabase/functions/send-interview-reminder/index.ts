 serve (async (req) => {
  //Handle CORS preflight requests if (req.method === "OPTIONS") {
  
}try {
  //Use service role key for admin privileges const supabase = createClient (supabaseUrl, supabaseServiceKey);
//Get upcoming interviews in the next hour const now = new Date ();
const thirtyMinutesFromNow = new Date (now.getTime () + 30 * 60000);
data: interviews, error 
}= await supabase .from ('interviews') .select (`*;
clients: client id (*);
talents:talent id (*) `) .eq ('statusconfirmed') .gte ('scheduled date', now.toISOString () ) .lt ('scheduled date', thirtyMinutesFromNow.toISOString () ) .is ('reminder sent', null);
if (error) throw error;
const results = [];
if (interviews && interviews.length > 0) {
  for (const interview of interviews) {
  //Send email to client try {
  await resend.emails.send ({
  <p>Please be ready on time!</p> ` 
});
try {
  await resend.emails.send ({
  <p>Please be ready on time!</p> ` 
});
}//Mark the interview as reminder sent await supabase .from ('interviews') status: 500 
});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
});
