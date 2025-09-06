 interface CreateKeyRequest {
  name: string;
scopes: string[];
expiresAt?: string | null 
}interface RegenerateKeyRequest {
  keyId: string 
}//Create a Supabase client //Handle CORS for browser requests if (req.method === 'OPTIONS') {
  return new Response ('ok', {
  headers: {
  
}
});
async function createApiKey (userId: string, name: string, scopes: string[], expiresAt: string | null = null) {
  try {
  //Generate prefix from name (first 4 chars of name + 4 random chars) 
}//Insert the API key record const {
  data: insertData, error: insertError 
}= await supabase .from ('api keys') 
}
}async function getUserApiKeys (userId: string) {
  try {
  const {
  data, error 
}= await supabase .from ('api keys') .select ('id, name, key prefix, scopes, created at, last used at, expires at, is active') .eq ('user id', userId) 
}
}async function regenerateApiKey (userId: string, keyId: string) {
  try {
  //First, verify that the key belongs to the user const {
  data: keyData, error: keyError 
}= await supabase .from ('api keys') .select ('name, key prefix, scopes, expires at') .eq ('id', keyId) .eq ('user id', userId) .single ();
}//Update the key record with new hash const {
  data: updateData, error: updateError 
}= await supabase .from ('api keys') .update ({
  key hash: hashData, updated at: new Date () .toISOString () 
}) .eq ('id', keyId) .eq ('user id', userId) .select ('id, name, key prefix, scopes, created at, expires at, is active');
}
}async function revokeApiKey (userId: string, keyId: string) {
  try {
  const {
  data, error 
}= await supabase .from ('api keys') .update ({
  is active: false 
}) .eq ('id', keyId) .eq ('user id', userId) .select ('id, name, is active');
}
}async function getApiLogs (userId: string, limit = 50, offset = 0) {
  try {
  // Get the user's API key IDs const {
  data: keyIds, error: keyError 
}= await supabase .from ('api keys') .select ('id') .eq ('user id', userId);
.from ('api logs') .select ('*', {
  count: 'exact' 
}) .in ('api key id', ids) 
}
}