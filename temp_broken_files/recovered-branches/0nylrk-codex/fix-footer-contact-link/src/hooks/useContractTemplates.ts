 export function useContractTemplates () {
  const {
  user, isAuthenticated 
}= useAuth ();
const queryClient = useQueryClient ();
const {
  toast 
}= useToast ();
const [isLoading, setIsLoading] = useState (false);
data: templates = [], isLoading: isLoadingTemplates, error: templatesError 
}= useQuery ({
  queryKey: ['contractTemplates', user?.id], queryFn: async () => {
  if (!isAuthenticated || !user) {
  const {
  data, error 
}= await supabase .from ('contract templates') .select ('*') return data as ContractTemplate[] 
};
enabled: isAuthenticated && !!user 
});
//Create a new template try {
  //If this is set as default, unset any existing default if (isDefault) {
  await supabase .from ('contract templates') .update ({
  is default: false 
}) .eq ('user id', user.id) .eq ('is default', true) 
}//Insert the new template const {
  data, error 
}= await supabase .from ('contract templates') .insert ({
  user id: user.id, title: title, template data: templateData, is default: isDefault 
}) .select () .single ();
}
});
//Update an existing template try {
  //If this is set as default, unset any existing default if (isDefault) {
  await supabase .from ('contract templates') .update ({
  is default: false 
}) .eq ('user id', user.id) .eq ('is default', true) .neq ('id', templateId) 
}//Update the template const {
  data, error 
}= await supabase .from ('contract templates') .update ({
  title: title, template data: templateData, is default: isDefault, updated at: new Date () .toISOString () 
}) .eq ('id', templateId) .eq ('user id', user.id) .select () .single ();
}
});
//Delete a template try {
  const {
  error 
}= await supabase .from ('contract templates') .delete () .eq ('id', templateId) .eq ('user id', user.id);
}
});
//Set a template as default try {
  //First unset any existing default await supabase .from ('contract templates') .update ({
  is default: false 
}) .eq ('user id', user.id) .eq ('is default', true);
// Then set the new default const {
  error 
}= await supabase .from ('contract templates') .update ({
  is default: true 
}) .eq ('id', templateId) .eq ('user id', user.id);
}
});
}