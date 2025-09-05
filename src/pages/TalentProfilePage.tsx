 export default function TalentProfilePage () {
  const router = useRouter ();
//Get id from Next.js router query params const {
  id 
}= router.query as {
  id?: string 
};
const {
  profile, isLoading, error 
}= useTalentProfile (id);
const [isHireModalOpen, setIsHireModalOpen] = useState (false);
const [isMessageModalOpen, setIsMessageModalOpen] = useState (false);
const {
  userDetails 
}= useAuthStatus ();
const {
  isAuthenticated, user 
}= useAuth ();
//Create a compatible UserProfile from UserDetails or the authenticated user const userProfile: UserProfile = user ? {
  id: user.id || '';
displayName: user.displayName || '';
email: user.email || '', //Ensure email is always a string userType: user.userType || null;
profileComplete: user.profileComplete || false;
created at: user.created at || new Date () .toISOString ();
updated at: user.updatedAt || new Date () .toISOString ();
role: user.role || '';
name: user.name || '';
points: user.points || 0 
}: {
  id: userDetails?.id || '';
displayName: userDetails?.name || '';
email: userDetails?.email || '', //Ensure email is always a string userType: null, //Default empty string since userDetails doesn't have this property profileComplete: false, //Default value since userDetails doesn't have this property created at: new Date () .toISOString (), //Default value since userDetails doesn't have this property updated at: new Date () .toISOString (), //Default value since userDetails doesn't have this property role: '', //Default empty string since userDetails doesn't have this property name: '';
points: 0 
};
if (error) {
  toast ({
  
}
}, [error]);
return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}setIsHireModalOpen (true) 
};
const handleMessageTalent = () => {
  if (!isAuthenticated) {
  toast ({
  return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 
}setIsMessageModalOpen (true) 
};
return (<> <SEO title= {
  profile.full name 
}description= {
  profile.bio || 'Talent profile' 
}ogImage= {
  profile.profile picture url 
}/> <div className="min-h-screen bg-zion-blue pb-12" > <TalentProfile profile= {
  profile 
}onRequestHire= {
  handleRequestHire 
}onMessageTalent= {
  handleMessageTalent 
}/> <BackToDirectoryButton /> {
  /* Sticky action buttons that appear when scrolling */ 
}<StickyAction> <div className="p-2 flex gap-2" > <Button > <Handshake className="mr-2 h-4 w-4" /> Hire Now </Button> <Button > <MessageSquare className="mr-2 h-4 w-4" /> Message </Button> </div> </StickyAction> {
  /* Request to Hire Modal */ 
}<HireRequestModal talent= {
  profile 
}isOpen= {
  isHireModalOpen 
}onClose= {
  () => setIsHireModalOpen (false) 
}userDetails= {
  userProfile 
}/> {
  /* Message Talent Modal */ 
}<MessageTalentModal talent= {
  profile 
}isOpen= {
  isMessageModalOpen 
}onClose= {
  () => setIsMessageModalOpen (false) 
}/> </div> </>) 
}