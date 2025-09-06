 >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 /** * Utility function to clean up authentication state * This helps prevent auth state inconsistencies and "limbo" states */ //Remove all Supabase auth keys from localStorage Object.keys (localStorage) .forEach ( (key) => {
  if (key.startsWith ('supabase.auth.') || key.includes ('sb-') ) {
  /** * Utility function to check new user registration and schedule welcome emails */export const checkNewRegistration = async (user: UserDetails) => {
  try {
  //Check if user has received welcome email already .from ("email campaigns") .select ("id") .eq ("user id", user.id) .eq ("campaign type", "welcome series") .maybeSingle ();
// Create a scheduled job for the welcome email await supabase .from ("scheduled jobs") .insert ({
  
}
};
