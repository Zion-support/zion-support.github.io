 // If countOnly, return unread count quickly if (countOnly === 'true') {
  const {
  data, error 
}= await supabase .from ('notifications') .select ('id', {
  count: 'exact', head: true 
}) .eq ('user id', userId) .eq ('read status', false);
.from ('notifications') .select ('id', {
  count: 'exact' 
}) .eq ('user id', userId) if (error) {
  // Fallback seed data for local/dev if table is missing const fallback: NotificationItem[] = [ {
  
}
}