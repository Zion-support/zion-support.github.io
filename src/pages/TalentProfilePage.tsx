import React, {_useState, _useEffect} from "react";

export default function TalentProfilePage() {_const _router = useRouter();
  // Get id from Next.js router query params
  const { id} = router.query as {_id?: string};
  const {_profile, _isLoading, _error} = useTalentProfile(id);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const {_userDetails} = useAuthStatus();
  const {_isAuthenticated, _user} = useAuth();

  // Create a compatible UserProfile from UserDetails or the authenticated user
  const userProfile: UserProfile = user ? {_id: user.id || '', _displayName: user.displayName || '', _email: user.email || '', _// Ensure email is always a string
    userType: user.userType || null, _profileComplete: user.profileComplete || false, _created_at: user.created_at || new Date().toISOString(), _updated_at: user.updatedAt || new Date().toISOString(), _role: user.role || '', _name: user.name || '', _points: user.points || 0} : {_id: userDetails?.id || '', _displayName: userDetails?.name || '', _email: userDetails?.email || '', _// Ensure email is always a string
    userType: null, _// Default empty string since userDetails doesn't have this property
    profileComplete: false, _// Default value since userDetails doesn't have this property
    created_at: new Date().toISOString(), _// Default value since userDetails doesn't have this property
    updated_at: new Date().toISOString(), _// Default value since userDetails doesn't have this property
    role: '', _// Default empty string since userDetails doesn't have this property
    name: '', _points: 0};

  // Handle loading error gracefully
  useEffect__(() => {_if (error) {
      toast({
        title: "Error loading profile", _description: "There was a problem loading this talent profile. Please try again.", _variant: "destructive"});
    }
  }, [error]);

  if (isLoading) {_return <ProfileLoadingState />;}

  if (error || !profile) {_return <ProfileErrorState error={error} />;
  }

  const _handleRequestHire = () => {_if (!isAuthenticated) {
      toast({
        title: "Authentication required", _description: "Please sign in to hire this talent.", _variant: "default"});
      router.push(`/login?returnTo=${_encodeURIComponent(`/talent/${id}`)}`);
      return;
    }
    setIsHireModalOpen(true);
  };

  const _handleMessageTalent = () => {_if (!isAuthenticated) {
      toast({
        title: "Authentication required", _description: "Please sign in to message this talent.", _variant: "default"});
      router.push(`/login?returnTo=${_encodeURIComponent(`/talent/${id}`)}`);
      return;
    }
    setIsMessageModalOpen(true);
  };

  return (_<>
      <SEO
        title={_profile.full_name}
        description={_profile.bio || 'Talent profile'}
        ogImage={_profile.profile_picture_url}
      />
      <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile
        profile={_profile}
        onRequestHire={_handleRequestHire}
        onMessageTalent={_handleMessageTalent}
      />
      <BackToDirectoryButton />
      
      {_/* Sticky action buttons that appear when scrolling */}
      <StickyAction>
        <div className="p-2 flex gap-2">
          <Button 
            size="sm"
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
            onClick={_handleRequestHire}
          >
            <Handshake className="mr-2 h-4 w-4" />
            Hire Now
          </Button>
          <Button 
            size="sm"
            variant="outline"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            onClick={_handleMessageTalent}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Message
          </Button>
        </div>
      </StickyAction>
      
      {_/* Request to Hire Modal */}
      <HireRequestModal 
        talent={_profile}
        isOpen={_isHireModalOpen}
        onClose={_() => setIsHireModalOpen(false)}
        userDetails={_userProfile}
      />
      
      {_/* Message Talent Modal */}
      <MessageTalentModal
        talent={_profile}
        isOpen={_isMessageModalOpen}
        onClose={_() => setIsMessageModalOpen(false)}
      />
    </div>
    </>
  );
}
