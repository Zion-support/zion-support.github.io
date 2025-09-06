

    id: user.id || '',
    displayName: user.displayName || '',
    email: user.email || '', // Ensure email is always a string
    userType: user.userType || null,
    profileComplete: user.profileComplete || false,
    created_at: user.created_at || new Date().toISOString(),
    updated_at: user.updatedAt || new Date().toISOString(),
    role: user.role || '',
    name: user.name || '',
    points: user.points || 0

  } : {
    id: userDetails?.id |''
    displayName: userDetails?.name |''
    email: userDetails?.email |'', // Ensure email is always a string
    userType: null, // Default empty string since userDetails doesn't have this property
    profileComplete: false, // Default value since userDetails doesn't have this property

  // Handle loading error gracefully
  useEffect(() => {
    if (error) {
      toast({

=======

        title: 'Error loading profile',


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        description:
          'There was a problem loading this talent profile. Please try again.'
        variant: 'destructive'
      }) }        title: "Error loading profile"
        description: "There was a problem loading this talent profile. Please try again."
        variant: "destructive"})
        id: user.id || '',
        display_name: user.display_name || '',
        email: user.email || '', // Ensure email is always a string;
        user_type: user.user_type || null,
        profile_complete: user.profile_complete || false,
        created_at: user.created_at || new Date ().toISOString (),
        updated_at: user.updated_at || new Date ().toISOString (),
        role: user.role || '',
        name: user.name || '',
        points: user.points || 0,
      }
    : {
        id: user_details?.id || '',
        display_name: user_details?.name || '',
        email: user_details?.email || '', // Ensure email is always a string;
        user_type: null, // Default empty string since user_details doesn't have this property;
        profile_complete: false, // Default value since user_details doesn't have this property;
        created_at: new Date ().toISOString (), // Default value since user_details doesn't have this property;
        updated_at: new Date ().toISOString (), // Default value since user_details doesn't have this property;
        role: '', // Default empty string since user_details doesn't have this property;
        name: '',
        points: 0,
      }  const user_profile: UserProfile = user ? {
    id: user.id || '',
    display_name: user.display_name || '',
    email: user.email || '', // Ensure email is always a string;
    user_type: user.user_type || null,
    profile_complete: user.profile_complete || false,
    created_at: user.created_at || new Date ().toISOString (), updated_at: user.updated_at || new Date ().toISOString (),    role: user.role || '',
    name: user.name || '',
    points: user.points || 0;
  } : {
    id: user_details?.id || '',
    display_name: user_details?.name || '',
    email: user_details?.email || '', // Ensure email is always a string;
    user_type: null, // Default empty string since user_details doesn't have this property;
    profile_complete: false, // Default value since user_details doesn't have this property;
    created_at: new Date ().toISOString (); // Default value since user_details doesn't have this property;
    updated_at: new Date ().toISOString (); // Default value since user_details doesn't have this property    role: '', // Default empty string since user_details doesn't have this property;
    name: '',
    points: 0;
  }
    }
  }, [error])
  if (isLoading) {
    return <ProfileLoadingState />
  }
<<<<<<< HEAD
  if (error |!profile) {
    return <ProfileErrorState error={error} />

  }

  const handleRequestHire = () => {
    if (!isAuthenticated) {
      toast({

        title: "Authentication required",
        description: "Please sign in to hire this talent.",
        variant: "default"}),
      router.push(`/login?returnTo=${encodeURIComponent(`/talent/${id}`)}`),
      return
    }
    setIsHireModalOpen(true)
  },

  const handleMessageTalent = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to message this talent.",
        variant: "default"}),
      router.push(`/login?returnTo=${encodeURIComponent(`/talent/${id}`)}`),
      return
;
  const handleRequestHire = () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to hire this talent.",;
        variant: "default"}),;
      router.push(`/login?returnTo=${encodeURIComponent(`/talent/${id}`)}`),;
      return;
    }
    setIsHireModalOpen(true);
  },;
  const handleMessageTalent = () => {;
    if (!isAuthenticated) {;
      toast({;
        title: "Authentication required",;
        description: "Please sign in to message this talent.",;
        variant: "default"}),;
      router.push(`/login?returnTo=${encodeURIComponent(`/talent/${id}`)}`);
      return;
    }
    setIsMessageModalOpen(true);
  };
  return (;
    <>;
      <SEO;
        title={profile.full_name}
        description={profile.bio || 'Talent profile'}
        ogImage={profile.profile_picture_url}
      />
      <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile
        profile={profile}
        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
<<<<<<< HEAD
      />;
      <BackToDirectoryButton />;

      {/* Sticky action buttons that appear when scrolling */}
      <StickyAction>
        <div className="p-2 flex gap-2">
          <Button
            size="sm"
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
            onClick={handleRequestHire}
          >
            <Handshake className="mr-2 h-4 w-4" />
            Hire Now
          </Button>
      />;
      <BackToDirectoryButton />;

      {/* Sticky action buttons that appear when scrolling */}
      <StickyAction>;
        <div className="p-2 flex gap-2">;
          <Button
            size="sm"
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
            onClick = {handleRequestHire,}>;
            <Handshake className="mr-2 h-4 w-4" />;
            Hire Now;
          </Button>;
          <Button
            size="sm"
            variant="outline"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            onClick={handleMessageTalent}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Message
          </Button>
        </div>
      </StickyAction>

        talent = {profile,}
        isOpen = {isHireModalOpen,}
        onClose = {(,) => setIsHireModalOpen(false),}
        userDetails = {userProfile,}

      />;


      {/* Message Talent Modal */}
      <MessageTalentModal
        talent = {profile,}
        isOpen = {isMessageModalOpen,}
        onClose = {() => setIsMessageModalOpen(false),}      />
    </div>
    </>
  )
}
=======
>>>>>>> 753c4bb47d55b0f2dc92218ec4b81f11e78f93ea
