 export default function SavedTalentsPage () {
  const {
  user 
}= useAuth ();
const [savedTalents, setSavedTalents] = useState<TalentProfile[]> ([]);
const [isLoading, setIsLoading] = useState (true);
const navigate = useNavigate ();
useEffect ( () => {
  const fetchSavedTalents = async () => {
  setIsLoading (true);
try {
  if (!user) {
  
}const {
  data, error 
}= await supabase .from ("saved talents") user id;
full name;
professional title;
profile picture url;
hourly rate;
bio;
years experience;
key projects;
skills;
location;
availability;
is verified) `) if (data) {
  //Extract talent profiles and convert to TalentProfile type const talentProfiles = data.map (item => item.talent profile as unknown as TalentProfile 
}finally {
  setIsLoading (false) 
}
};
}, [user]);
};
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 const handleToggleSave = async (talentId: string, isCurrentlySaved: boolean) => {
  try {
  if (!user) {
  
}//Remove from saved talents const {
  error 
}= await supabase .from ('saved talents') .delete () .eq ('user id', user.id) .eq ('talent id', talentId);
}else {
  //Add to saved talents const {
  error 
}= await supabase .from ('saved talents') .insert ([ {
  user id: user.id, talent id: talentId 
}]);
if (error) {
  throw error 
}data: talentData, error: talentError 
}= await supabase .from ('talent profiles') .select ('*') .eq ('id', talentId) .single ();
return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}
}
};
return (<> <SEO title="Saved Talents | Zion AI Marketplace" description="View and manage your saved talents in the Zion AI Marketplace" /> <AppHeader /> <div className="container mx-auto px-4 py-8" > <h1 className="text-3xl font-bold mb-4" >Saved Talents</h1> <p className="text-muted-foreground" > Here are the talents you've saved for future reference. </p> {
  savedTalents.map ( (talent) => (<TalentCard key= {
  talent.id 
}talent= {
  talent 
}onViewProfile= {
  handleViewProfile 
}onRequestHire= {
  handleRequestHire 
}isSaved= {
  true 
}onToggleSave= {
  handleToggleSave 
}isAuthenticated= {
  !!user 
}/>) ) 
}</div>) 
}</div> <Footer /> </>) 
}