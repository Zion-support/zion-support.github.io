<<<<<<< HEAD
<<<<<<< HEAD
import { TalentProfile } from "@/components/profile/TalentProfile",
import React, { useState, useEffect } from "react";
import { useRouter  } from 'next/router';
import React, { useState, useEffect } from "react",
import { useRouter } from 'next/router',
import React, { useState, useEffect } from "react";
import { useRouter  } from 'next/router';
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { TalentProfile } from '@/components/profile/TalentProfile'
import { ProfileLoadingState } from '@/components/profile/ProfileLoadingState'
import { ProfileErrorState } from '@/components/profile/ProfileErrorState'
import { BackToDirectoryButton } from '@/components/profile/BackToDirectoryButton'
import { useTalentProfile } from '@/hooks/useTalentProfile'
import { HireRequestModal } from '@/components/profile/hire-request'
import { useAuthStatus } from '@/hooks/talent'
import { MessageTalentModal } from '@/components/messaging/MessageTalentModal'
import { StickyAction } from '@/components/ui/sticky-action'
import { Handshake, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { UserProfile } from '@/types/auth'
import { toast } from '@/hooks/use-toast'
import { SEO } from '@/components/SEO'
import { TalentProfile } from "@/components/profile/TalentProfile"
import { ProfileLoadingState } from "@/components/profile/ProfileLoadingState"
import { ProfileErrorState } from "@/components/profile/ProfileErrorState"
import { BackToDirectoryButton } from "@/components/profile/BackToDirectoryButton"
import { useTalentProfile } from "@/hooks/useTalentProfile"
import { HireRequestModal } from "@/components/profile/hire-request"
import { useAuthStatus } from "@/hooks/talent"
import { MessageTalentModal } from "@/components/messaging/MessageTalentModal"
import { StickyAction } from "@/components/ui/sticky-action"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import { UserProfile } from "@/types/auth"
import { toast } from "@/hooks/use-toast"
import { SEO } from "@/components/SEO"
export default function TalentProfilePage() {
  const router = useRouter()
  // Get id from Next.js router query params
  const { id } = router.query as { id?: string }
  const { profile, isLoading, error } = useTalentProfile(id)
  const [isHireModalOpen, setIsHireModalOpen] = useState(false)
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false)
  const { userDetails } = useAuthStatus()
  const { isAuthenticated, user } = useAuth()
  // Create a compatible UserProfile from UserDetails or the authenticated user
  const userProfile: UserProfile = user
    ? {
        id: user.id || '',
        displayName: user.displayName || '',
        email: user.email || '', // Ensure email is always a string
        userType: user.userType || null,
        profileComplete: user.profileComplete || false,
        created_at: user.created_at || new Date().toISOString(),
        updated_at: user.updatedAt || new Date().toISOString(),
        role: user.role || '',
        name: user.name || '',
        points: user.points || 0,
      }
    : {
        id: userDetails?.id || '',
        displayName: userDetails?.name || '',
        email: userDetails?.email || '', // Ensure email is always a string
        userType: null, // Default empty string since userDetails doesn't have this property
        profileComplete: false, // Default value since userDetails doesn't have this property
        created_at: new Date().toISOString(), // Default value since userDetails doesn't have this property
        updated_at: new Date().toISOString(), // Default value since userDetails doesn't have this property;
        role: '', // Default empty string since userDetails doesn't have this property;
        name: '';
        points: 0;
      };  const userProfile: UserProfile = user ? {
import React, { useState, useEffect } from "react",
import { useRouter } from 'next/router',
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { TalentProfile } from "@/components/profile/TalentProfile",
import { ProfileLoadingState } from "@/components/profile/ProfileLoadingState",
import { ProfileErrorState } from "@/components/profile/ProfileErrorState",
import { BackToDirectoryButton } from "@/components/profile/BackToDirectoryButton",
import { useTalentProfile } from "@/hooks/useTalentProfile",
import { HireRequestModal } from "@/components/profile/hire-request",
import { useAuthStatus } from "@/hooks/talent",
import { MessageTalentModal } from "@/components/messaging/MessageTalentModal",
import { StickyAction } from "@/components/ui/sticky-action",
import { Handshake, MessageSquare } from 'lucide-react'
import { Button } from "@/components/ui/button",
import { useAuth } from "@/hooks/useAuth",
import { UserProfile } from "@/types/auth",
<<<<<<< HEAD
<<<<<<< HEAD
import { toast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
export default function TalentProfilePage() {
=======

import React, { useState, useEffect } from 'react';
import { use_router } from 'next / router';
import { TalentProfile } from '@/components / profile / TalentProfile';
import { ProfileLoadingState } from '@/components / profile / ProfileLoadingState';
import { ProfileErrorState } from '@/components / profile / ProfileErrorState';
import { BackToDirectoryButton } from '@/components / profile / BackToDirectoryButton';
import { useTalentProfile } from '@/hooks / useTalentProfile';
import { HireRequestModal } from '@/components / profile / hire - request';
import { useAuthStatus } from '@/hooks / talent';
import { MessageTalentModal } from '@/components / messaging / MessageTalentModal';
import { StickyAction } from '@/components / ui / sticky - action';
import { Handshake, MessageSquare } from 'lucide-react';
import { Button } from '@/components / ui / button';
import { use_auth } from '@/hooks / use_auth';
import { UserProfile } from '@/types / auth';
import { toast } from '@/hooks / use - toast';
import { SEO } from '@/components / SEO';
import { TalentProfile  } from '@/components / profile / TalentProfile';
import { ProfileLoadingState  } from '@/components / profile / ProfileLoadingState';
import { ProfileErrorState  } from '@/components / profile / ProfileErrorState';
import { BackToDirectoryButton  } from '@/components / profile / BackToDirectoryButton';
import { useTalentProfile  } from '@/hooks / useTalentProfile';
import { HireRequestModal  } from '@/components / profile / hire - request';
import { useAuthStatus  } from '@/hooks / talent';
import { MessageTalentModal  } from '@/components / messaging / MessageTalentModal';
import { StickyAction  } from '@/components / ui / sticky - action';
import { Button  } from '@/components / ui / button';
import { use_auth  } from '@/hooks / use_auth';
import { UserProfile  } from '@/types / auth';
import { toast  } from '@/hooks / use - toast';
import { SEO  } from '@/components / SEO';
export default /**
 * TalentProfilePage - Function description
 */
function TalentProfilePage() {
  const router = use_router ();
  // Get id from Next.js router query params;

  const { id } = router.query as { id?: string }
  const { profile, is_loading, error } = useTalentProfile (id);
  const [isHireModalOpen, setIsHireModalOpen] = useState (false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState (false);
  const { user_details } = useAuthStatus ();
  const { is_authenticated, user } = use_auth ();
  // Create a compatible UserProfile from UserDetails or the authenticated user;
  const user_profile: UserProfile = user;
    ? {


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
import { toast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
export default function TalentProfilePage() {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { toast } from "@/hooks/use-toast",
import { SEO } from "@/components/SEO",
export default function TalentProfilePage() {
  const router = useRouter(),
  // Get id from Next.js router query params
  const { id } = router.query as { id?: string },
  const { profile, isLoading, error } = useTalentProfile(id),
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false),
  const { userDetails } = useAuthStatus(),
  const { isAuthenticated, user } = useAuth(),

<<<<<<< HEAD
<<<<<<< HEAD
  const router = useRouter()
  // Get id from Next.js router query params
  const { id } = router.query as { id?: string }
  const { profile, isLoading, error } = useTalentProfile(id)
  const [isHireModalOpen, setIsHireModalOpen] = useState(false)
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false)
  const { userDetails } = useAuthStatus()
  const { isAuthenticated, user } = useAuth()
  // Create a compatible UserProfile from UserDetails or the authenticated user
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Create a compatible UserProfile from UserDetails or the authenticated user
  const userProfile: UserProfile = user
    ? {
        id: user.id |''
        displayName: user.displayName |''
        email: user.email |'', // Ensure email is always a string
        userType: user.userType |null
        profileComplete: user.profileComplete |false
        created_at: user.created_at |new Date().toISOString()
        updated_at: user.updatedAt |new Date().toISOString()
        role: user.role |''
        name: user.name |''
        points: user.points |0
      }
    : {
        id: userDetails?.id |''
        displayName: userDetails?.name |''
        email: userDetails?.email |'', // Ensure email is always a string
        userType: null, // Default empty string since userDetails doesn't have this property
        profileComplete: false, // Default value since userDetails doesn't have this property
        created_at: new Date().toISOString(), // Default value since userDetails doesn't have this property
        updated_at: new Date().toISOString(), // Default value since userDetails doesn't have this property
        role: '', // Default empty string since userDetails doesn't have this property
        name: ''
        points: 0
      };  const userProfile: UserProfile = user ? {
    id: user.id |''
    displayName: user.displayName |''
    email: user.email |'', // Ensure email is always a string
    userType: user.userType |null
    profileComplete: user.profileComplete |false
    created_at: user.created_at |new Date().toISOString(), updated_at: user.updatedAt |new Date().toISOString(),    role: user.role |''
    name: user.name |''
    points: user.points |0
  const userProfile: UserProfile = user ? {
<<<<<<< HEAD
  const userProfile: UserProfile = user ? {
=======



  // Create a compatible UserProfile from UserDetails or the authenticated user

  const userProfile: UserProfile = user ? {

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } : {
=======

  } : {
    id: userDetails?.id |''
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    displayName: userDetails?.name |''
    email: userDetails?.email |'', // Ensure email is always a string
    userType: null, // Default empty string since userDetails doesn't have this property
    profileComplete: false, // Default value since userDetails doesn't have this property
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    created_at: new Date().toISOString(); // Default value since userDetails doesn't have this property
    updated_at: new Date().toISOString(); // Default value since userDetails doesn't have this property    role: '', // Default empty string since userDetails doesn't have this property
    name: ''
    points: 0
  }
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    created_at: new Date().toISOString(), // Default value since userDetails doesn't have this property
    updated_at: new Date().toISOString(), // Default value since userDetails doesn't have this property
    role: '', // Default empty string since userDetails doesn't have this property
    name: '',
    points: 0
<<<<<<< HEAD
<<<<<<< HEAD
  },

  }
  },
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  },

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  // Handle loading error gracefully
  useEffect(() => {
    if (error) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: 'Error loading profile'
        title: 'Error loading profile',
        title: 'Error loading profile',
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


        title: 'Error loading profile',


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    }
  }, [error])
  if (isLoading) {
    return <ProfileLoadingState />
  }
  }
  const handleRequestHire = () => {
    if (!isAuthenticated) {
      toast({
        title: 'Authentication required'
        description: 'Please sign in to hire this talent.'
        variant: 'default'
      })
      router.push(`/login?returnTo=${encodeURIComponent(`/talent/${id}`)}`)
      return
=======
  }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Handle loading error gracefully;
  useEffect ((, ) => {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Error loading profile',
        description:;
          'There was a problem loading this talent profile. Please try again.',
        variant: 'destructive',
      }) }        title: "Error loading profile",
        description: "There was a problem loading this talent profile. Please try again.",
        variant: "destructive"});
    }
<<<<<<< HEAD
  }, [error]);
  // Check condition
if ( {) {
  $2
}
    return <ProfileLoadingState />;
=======
  }, [error])
  if (isLoading) {
    return <ProfileLoadingState />
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }

  // Check condition
if ( {) {
  $2
}
    return <ProfileErrorState error={error} />;
  }
  const handleRequestHire = () =>: any {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Authentication required',
        description: 'Please sign in to hire this talent.',
        variant: 'default',
      });
      router.push (`/login?return_to=${encodeURIComponent (`/talent/${id}`)}`);
      return;

    }
    setIsHireModalOpen(true) };      router.push(`/login?returnTo=${encodeURIComponent(`/talent/${id}`)}`)
      return
    }
    setIsHireModalOpen(true)
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TalentProfile } from '@/components/profile/TalentProfile';
import { ProfileLoadingState } from '@/components/profile/ProfileLoadingState';
import { ProfileErrorState } from '@/components/profile/ProfileErrorState';
import { BackToDirectoryButton } from '@/components/profile/BackToDirectoryButton';
import { useTalentProfile } from '@/hooks/useTalentProfile';
import { HireRequestModal } from '@/components/profile/hire-request';
import { useAuthStatus } from '@/hooks/talent';
import { MessageTalentModal } from '@/components/messaging/MessageTalentModal';
import { StickyAction } from '@/components/ui/sticky-action';
import { Handshake, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { UserProfile } from '@/types/auth';
import { toast } from '@/hooks/use-toast';
import { SEO } from '@/components/SEO';

import React, { useState, useEffect } from "react";

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useRouter } from 'next/router';
import { TalentProfile } from "@/components/profile/TalentProfile";
import { ProfileLoadingState } from "@/components/profile/ProfileLoadingState";
import { ProfileErrorState } from "@/components/profile/ProfileErrorState";
import { BackToDirectoryButton } from "@/components/profile/BackToDirectoryButton";
import { useTalentProfile } from "@/hooks/useTalentProfile";
import { HireRequestModal } from "@/components/profile/hire-request";
import { useAuthStatus } from "@/hooks/talent";
import { MessageTalentModal } from "@/components/messaging/MessageTalentModal";
import { StickyAction } from "@/components/ui/sticky-action";
import { Handshake, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { UserProfile } from "@/types/auth";
import { toast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
export default function TalentProfilePage() {;
  const router = useRouter();
  // Get id from Next && Next.js router query params;
  const { id } = router && router.query as { id?: string };
  const { profile, isLoading, error } = useTalentProfile(id);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
  const { isAuthenticated, user } = useAuth();

  // Create a compatible UserProfile from UserDetails or the authenticated user;
  const userProfile: UserProfile = user;
    ? {;
        id: user && user.id || '',;
        displayName: user && user.displayName || '',;
        email: user && user.email || '', // Ensure email is always a string;
        userType: user && user.userType || null,;
        profileComplete: user && user.profileComplete || false,;
        created_at: user && user.created_at || new Date().toISOString(),;
        updated_at: user && user.updatedAt || new Date().toISOString(),;
        role: user && user.role || '',;
        name: user && user.name || '',;
        points: user && user.points || 0,;
      }
    : {;
        id: userDetails?.id || '',;
        displayName: userDetails?.name || '',;
        email: userDetails?.email || '', // Ensure email is always a string;
        userType: null, // Default empty string since userDetails doesn't have this property;
        profileComplete: false, // Default value since userDetails doesn't have this property;
        created_at: new Date().toISOString(), // Default value since userDetails doesn't have this property;
        updated_at: new Date().toISOString(), // Default value since userDetails doesn't have this property;
        role: '', // Default empty string since userDetails doesn't have this property;
        name: '',;
        points: 0,;
      };  const userProfile: UserProfile = user ? {;
    id: user && user.id || '',;
    displayName: user && user.displayName || '',;
    email: user && user.email || '', // Ensure email is always a string;
    userType: user && user.userType || null,;
    profileComplete: user && user.profileComplete || false,;
    created_at: user && user.created_at || new Date().toISOString(), updated_at: user && user.updatedAt || new Date().toISOString(),    role: user && user.role || '',;
    name: user && user.name || '',;
    points: user && user.points || 0;
  } : {;
    id: userDetails?.id || '',;
    displayName: userDetails?.name || '',;
    email: userDetails?.email || '', // Ensure email is always a string;
    userType: null, // Default empty string since userDetails doesn't have this property;
    profileComplete: false, // Default value since userDetails doesn't have this property;
    created_at: new Date().toISOString(); // Default value since userDetails doesn't have this property;
    updated_at: new Date().toISOString(); // Default value since userDetails doesn't have this property    role: '', // Default empty string since userDetails doesn't have this property;
    name: '',;
    points: 0;
  };


    }
  }, [error]);

  if (isLoading) {;
    return <ProfileLoadingState />;
  }

  if (error || !profile) {;
    return <ProfileErrorState error={error} />;
  }



  const handleMessageTalent = () =>: any {
    // Check condition
if ( {) {
  $2
}
      toast ({
        title: 'Authentication required',
        description: 'Please sign in to message this talent.',
        variant: 'default',
      });
      return;
    }
    setIsMessageModalOpen (true);
  }




  return (
    <>;


<<<<<<< HEAD
<<<<<<< HEAD
  const handleMessageTalent = () => {
    if (!isAuthenticated) {
      toast({
        title: 'Authentication required'
        description: 'Please sign in to message this talent.'
        variant: 'default'
      })
      return
    }
    setIsMessageModalOpen(true)
  }

  return (
    <>
      <SEO
        title = {profile.full_name,}
        description = {profile.bio |'Talent profile',}
        ogImage = {profile.profile_picture_url,}
      />
      <div className='min-h-screen bg-zion-blue pb-12'>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <TalentProfile
          profile={profile}
          onRequestHire={handleRequestHire}
          onMessageTalent={handleMessageTalent}
<<<<<<< HEAD
<<<<<<< HEAD
        />
        <BackToDirectoryButton />
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
        <BackToDirectoryButton />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {/* Sticky action buttons that appear when scrolling */}
        <StickyAction>
          <div className='p-2 flex gap-2'>
            <Button
              size='sm'
              className='bg-zion-purple text-white hover:bg-zion-purple-dark'
              onClick={handleRequestHire}
            >
              <Handshake className='mr-2 h-4 w-4' />
              Hire Now
            </Button>
            <Button
              size='sm'
              variant='outline'
              className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'
<<<<<<< HEAD
<<<<<<< HEAD
              onClick={handleMessageTalent}
            >
              <MessageSquare className='mr-2 h-4 w-4' />
              Message
            </Button>
          </div>
        </StickyAction>
        {/* Request to Hire Modal */}
        <HireRequestModal
          talent={profile}
          isOpen={isHireModalOpen}
          onClose={() => setIsHireModalOpen(false)}
          userDetails={userProfile}
        />
        {/* Message Talent Modal */}
        <MessageTalentModal
          talent={profile}
          isOpen={isMessageModalOpen}
          onClose={() => setIsMessageModalOpen(false)}
        />
      </div>
    </>
  )
}, [error])
return
}setIsHireModalOpen (true)
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              onClick={handleMessageTalent}>;
              <MessageSquare className='mr-2 h-4 w-4' />;
      <SEO;
        title = {profile.full_name, }
        description = {profile.bio || 'Talent profile', }
        og_image = {profile.profile_picture_url, }
      />;
      <div className='min - h-screen bg - zion - blue pb - 12'>;
        <TalentProfile;
          profile={profile}
          onRequestHire={handleRequestHire}
          onMessageTalent={handleMessageTalent}
        />;
        <BackToDirectoryButton />;
        {/* Sticky action buttons that appear when scrolling */}
        <StickyAction>;
          <div className='p - 2 flex gap - 2'>;
            <Button;
              size='sm';
              className='bg - zion - purple text - white hover:bg - zion - purple - dark';
              on_click={handleRequestHire}
            >;
              <Handshake className='mr - 2 h - 4 w - 4' />;
              Hire Now;
            </Button>;
            <Button;
              size='sm';
              variant='outline';
              className='border - zion - purple text - zion - purple hover:bg - zion - purple / 10';
              on_click={handleMessageTalent}
            >;
              <MessageSquare className='mr - 2 h - 4 w - 4' />;

              Message;
            </Button>;
          </div>;
        </StickyAction>;


        {/* Request to Hire Modal */}
        <HireRequestModal
          talent={profile}

        />;


          is_open={isHireModalOpen}
          on_close={() => setIsHireModalOpen (false)}
          user_details={user_profile}
        />;
        {/* Message Talent Modal */}
        <MessageTalentModal
          talent={profile}

          is_open={isMessageModalOpen}
          on_close={() => setIsMessageModalOpen (false)}
        />;
      </div>;
    </>);
}, [error]);
return;
}setIsHireModalOpen (true);
}
const handleMessageTalent = () =>: any {
  // Check condition
if ( {) {
  $2

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
const handleMessageTalent = () => {
  if (!isAuthenticated) {
  toast ({
<<<<<<< HEAD
<<<<<<< HEAD
  return
}setIsMessageModalOpen (true)
  return;
}setIsMessageModalOpen (true);
}
return (<> <SEO title= {
  profile.full name
}description= {'
  profile.bio |'Talent profile'
}ogImage= {
  profile.profile picture url
}/> <div className="min-h-screen bg-zion-blue pb-12" > <TalentProfile profile= {
  profile
}onRequestHire= {
  handleRequestHire
}onMessageTalent= {


        title={profile.full_name}
        description={profile.bio || 'Talent profile'}
        ogImage={profile.profile_picture_url}
      />
      <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile
        profile = {profile,}
        onRequestHire = {handleRequestHire,}
        onMessageTalent = {handleMessageTalent,}



        title: "Error loading profile",
        description: "There was a problem loading this talent profile. Please try again.",
        variant: "destructive"})
import React, { useState, useEffect } from "react",;
import { useRouter } from 'next/router',;
import { TalentProfile } from "@/components/profile/TalentProfile",;
import { ProfileLoadingState } from "@/components/profile/ProfileLoadingState",;
import { ProfileErrorState } from "@/components/profile/ProfileErrorState",;
import { BackToDirectoryButton } from "@/components/profile/BackToDirectoryButton",;
import { useTalentProfile } from "@/hooks/useTalentProfile",;
import { HireRequestModal } from "@/components/profile/hire-request",;
import { useAuthStatus } from "@/hooks/talent",;
import { MessageTalentModal } from "@/components/messaging/MessageTalentModal",;
import { StickyAction } from "@/components/ui/sticky-action",;
import { Handshake, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
import { UserProfile } from "@/types/auth",;
import { toast } from "@/hooks/use-toast",;
import { SEO } from "@/components/SEO",;
export default function TalentProfilePage() {;
  const router = useRouter(),;
  // Get id from Next.js router query params;
  const { id } = router.query as { id?: string },;
  const { profile, isLoading, error } = useTalentProfile(id),;
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),;
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false),;
  const { userDetails } = useAuthStatus(),;
  const { isAuthenticated, user } = useAuth(),;
  // Create a compatible UserProfile from UserDetails or the authenticated user;
  const userProfile: UserProfile = user ? {;
    id: user.id || '',;
    displayName: user.displayName || '',;
    email: user.email || '', // Ensure email is always a string;
    userType: user.userType || null,;
    profileComplete: user.profileComplete || false,;
    created_at: user.created_at || new Date().toISOString(),;
    updated_at: user.updatedAt || new Date().toISOString(),;
    role: user.role || '',;
    name: user.name || '',;
    points: user.points || 0;
  } : {;
    id: userDetails?.id || '',;
    displayName: userDetails?.name || '',;
    email: userDetails?.email || '', // Ensure email is always a string;
    userType: null, // Default empty string since userDetails doesn't have this property;
    profileComplete: false, // Default value since userDetails doesn't have this property;
    created_at: new Date().toISOString(), // Default value since userDetails doesn't have this property;
    updated_at: new Date().toISOString(), // Default value since userDetails doesn't have this property;
    role: '', // Default empty string since userDetails doesn't have this property;
    name: '',;
    points: 0;
  },;
  // Handle loading error gracefully;
  useEffect(() => {;
    if (error) {;
      toast({;
        title: "Error loading profile",;
        description: "There was a problem loading this talent profile. Please try again.",;
        variant: "destructive"});
    }
  }, [error]),;
  if (isLoading) {;
    return <ProfileLoadingState />;
  }
;
  if (error || !profile) {;
    return <ProfileErrorState error={error} />;
  }

  const handleRequestHire = () => {
    if (!isAuthenticated) {
      toast({
        title: 'Authentication required',
        description: 'Please sign in to hire this talent.',
        variant: 'default',
      })
      router.push(`/login?returnTo=${encodeURIComponent(`/talent/${id}`)}`)
      return;
    }
    setIsHireModalOpen(true) };      router.push(`/login?returnTo=${encodeURIComponent(`/talent/${id}`)}`)
      return;
    }
    setIsHireModalOpen(true)
  }
  const handleMessageTalent = () => {
    if (!isAuthenticated) {
      toast({
        title: 'Authentication required',
        description: 'Please sign in to message this talent.',
        variant: 'default',
      })
      return;
    }
    setIsMessageModalOpen(true)
  }
  return (
    <>
      <SEO
        title = {profile.full_name,}
        description = {profile.bio || 'Talent profile',}
        ogImage = {profile.profile_picture_url,}
      />
      <div className='min-h-screen bg-zion-blue pb-12'>
        <TalentProfile
          profile={profile}
          onRequestHire={handleRequestHire}
          onMessageTalent={handleMessageTalent}
        />
        <BackToDirectoryButton />
        {/* Sticky action buttons that appear when scrolling */}
        <StickyAction>
          <div className='p-2 flex gap-2'>
            <Button
              size='sm'
              className='bg-zion-purple text-white hover:bg-zion-purple-dark'
              onClick={handleRequestHire}
            >
              <Handshake className='mr-2 h-4 w-4' />
              Hire Now
            </Button>
            <Button
              size='sm'
              variant='outline'
              className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'
              onClick={handleMessageTalent}
            >
              <MessageSquare className='mr-2 h-4 w-4' />
              Message
            </Button>
          </div>
        </StickyAction>
        {/* Request to Hire Modal */}
        <HireRequestModal
          talent={profile}
          isOpen={isHireModalOpen}
          onClose={() => setIsHireModalOpen(false)}
          userDetails={userProfile}
        />

        {/* Message Talent Modal */}
        <MessageTalentModal
          talent={profile}
          isOpen={isMessageModalOpen}
          onClose={() => setIsMessageModalOpen(false)}
        />
      </div>
    </>
  )
}, [error])
return;
}setIsHireModalOpen (true) 
}
const handleMessageTalent = () => {
  if (!isAuthenticated) {
  toast ({
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

        />;
      </div>;
    </>;
  );

}, [error]);
return;
}setIsHireModalOpen (true) ;
};
const handleMessageTalent = () => {;
  if (!isAuthenticated) {;
  toast ({;
  return;
}setIsMessageModalOpen (true) ;
};
return (<> <SEOtitle= {
  profile && profile.full name 
}description= {'
  profile && profile.bio || 'Talent profile' 
}ogImage= {
  profile && profile.profile picture url 
}/> <div className="min-h-screen bg-zion-blue pb-12" > <TalentProfileprofile= {
  profile 
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return;
}setIsMessageModalOpen (true) 
}
return (<> <SEO title= {
<<<<<<< HEAD
<<<<<<< HEAD
  profile.full name 
}description= {'
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
  /* Sticky action buttons that appear when scrolling */ "
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
}'"      <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile
        profile = {profile,}
        onRequestHire = {handleRequestHire,}
        onMessageTalent = {handleMessageTalent,}
      />
      <BackToDirectoryButton />
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  profile.full name;
}description= {';
  profile.bio || 'Talent profile';
}og_image= {
  profile.profile picture url;
}/> <div className="min - h-screen bg - zion - blue pb - 12" > <TalentProfile profile= {
  profile;

}onRequestHire= {
  handleRequestHire 
}onMessageTalent= {
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  const handleRequestHire = () => {
    if (!isAuthenticated) {
      toast({
        title: 'Authentication required',
        description: 'Please sign in to hire this talent.',
        variant: 'default',
      })
      router.push(`/login?returnTo=${encodeURIComponent(`/talent/${id}`)}`)
      return;
    }
    setIsHireModalOpen(true) };      router.push(`/login?returnTo=${encodeURIComponent(`/talent/${id}`)}`)
      return;
    }
    setIsHireModalOpen(true)
  }
  const handleMessageTalent = () => {
    if (!isAuthenticated) {
      toast({
        title: 'Authentication required',
        description: 'Please sign in to message this talent.',
        variant: 'default',
      })
      return;
    }
    setIsMessageModalOpen(true)
  }
  return (
    <>
      <SEO
        title = {profile.full_name,}
        description = {profile.bio || 'Talent profile',}
        ogImage = {profile.profile_picture_url,}
      />
      <div className='min-h-screen bg-zion-blue pb-12'>
        <TalentProfile
          profile={profile}
          onRequestHire={handleRequestHire}
          onMessageTalent={handleMessageTalent}
        />
        <BackToDirectoryButton />
        {/* Sticky action buttons that appear when scrolling */}
        <StickyAction>
          <div className='p-2 flex gap-2'>
            <Button
              size='sm'
              className='bg-zion-purple text-white hover:bg-zion-purple-dark'
              onClick={handleRequestHire}
            >
              <Handshake className='mr-2 h-4 w-4' />
              Hire Now
            </Button>
            <Button
              size='sm'
              variant='outline'
              className='border-zion-purple text-zion-purple hover:bg-zion-purple/10'
              onClick={handleMessageTalent}
            >
              <MessageSquare className='mr-2 h-4 w-4' />
              Message
            </Button>
          </div>
        </StickyAction>
        {/* Request to Hire Modal */}
        <HireRequestModal
          talent={profile}
          isOpen={isHireModalOpen}
          onClose={() => setIsHireModalOpen(false)}
          userDetails={userProfile}
        />

<<<<<<< HEAD
        {/* Message Talent Modal */}
        <MessageTalentModal
          talent={profile}
          isOpen={isMessageModalOpen}
          onClose={() => setIsMessageModalOpen(false)}
        />
      </div>
    </>
  )
}, [error])
return;
}setIsHireModalOpen (true) 
}
const handleMessageTalent = () => {
  if (!isAuthenticated) {
  toast ({
  return;
}setIsMessageModalOpen (true) 
}
return (<> <SEO title= {
  profile.full name 
}description= {'
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
  /* Sticky action buttons that appear when scrolling */ "
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
}'"      <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile
        profile = {profile,}
        onRequestHire = {handleRequestHire,}
        onMessageTalent = {handleMessageTalent,}
      />
      <BackToDirectoryButton />
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        title={profile.full_name}
        description={profile.bio || 'Talent profile'}
        ogImage={profile.profile_picture_url}
      />
      <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile
<<<<<<< HEAD
<<<<<<< HEAD
      <TalentProfile
        profile={profile}
        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />;
      <BackToDirectoryButton />;
ursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        profile = {profile,}
        onRequestHire = {handleRequestHire,}
        onMessageTalent = {handleMessageTalent,}



        title: "Error loading profile",
        description: "There was a problem loading this talent profile. Please try again.",
        variant: "destructive"})
import React, { useState, useEffect } from "react",;
import { useRouter } from 'next/router',;
import { TalentProfile } from "@/components/profile/TalentProfile",;
import { ProfileLoadingState } from "@/components/profile/ProfileLoadingState",;
import { ProfileErrorState } from "@/components/profile/ProfileErrorState",;
import { BackToDirectoryButton } from "@/components/profile/BackToDirectoryButton",;
import { useTalentProfile } from "@/hooks/useTalentProfile",;
import { HireRequestModal } from "@/components/profile/hire-request",;
import { useAuthStatus } from "@/hooks/talent",;
import { MessageTalentModal } from "@/components/messaging/MessageTalentModal",;
import { StickyAction } from "@/components/ui/sticky-action",;
import { Handshake, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button",;
import { useAuth } from "@/hooks/useAuth",;
import { UserProfile } from "@/types/auth",;
import { toast } from "@/hooks/use-toast",;
import { SEO } from "@/components/SEO",;
export default function TalentProfilePage() {;
  const router = useRouter(),;
  // Get id from Next.js router query params;
  const { id } = router.query as { id?: string },;
  const { profile, isLoading, error } = useTalentProfile(id),;
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),;
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false),;
  const { userDetails } = useAuthStatus(),;
  const { isAuthenticated, user } = useAuth(),;
  // Create a compatible UserProfile from UserDetails or the authenticated user;
  const userProfile: UserProfile = user ? {;
    id: user.id || '',;
    displayName: user.displayName || '',;
    email: user.email || '', // Ensure email is always a string;
    userType: user.userType || null,;
    profileComplete: user.profileComplete || false,;
    created_at: user.created_at || new Date().toISOString(),;
    updated_at: user.updatedAt || new Date().toISOString(),;
    role: user.role || '',;
    name: user.name || '',;
    points: user.points || 0;
  } : {;
    id: userDetails?.id || '',;
    displayName: userDetails?.name || '',;
    email: userDetails?.email || '', // Ensure email is always a string;
    userType: null, // Default empty string since userDetails doesn't have this property;
    profileComplete: false, // Default value since userDetails doesn't have this property;
    created_at: new Date().toISOString(), // Default value since userDetails doesn't have this property;
    updated_at: new Date().toISOString(), // Default value since userDetails doesn't have this property;
    role: '', // Default empty string since userDetails doesn't have this property;
    name: '',;
    points: 0;
  },;
  // Handle loading error gracefully;
  useEffect(() => {;
    if (error) {;
      toast({;
        title: "Error loading profile",;
        description: "There was a problem loading this talent profile. Please try again.",;
        variant: "destructive"});
    }
  }, [error]),;
  if (isLoading) {;
    return <ProfileLoadingState />;
  }
;
  if (error || !profile) {;
    return <ProfileErrorState error={error} />;



  }

  const handleRequestHire = () => {
    if (!isAuthenticated) {
      toast({


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Sticky action buttons that appear when scrolling */}
=======
      {/* Sticky action buttons that appear when scrolling */}
      <StickyAction>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
            onClick={handleMessageTalent}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Message
          </Button>
        </div>
      </StickyAction>
      <HireRequestModal
      {/* Request to Hire Modal */}
      <HireRequestModal
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            onClick = {handleMessageTalent,}>;
            <MessageSquare className="mr-2 h-4 w-4" />;
  handleMessageTalent;
}/> <BackToDirectoryButton /> {
  /* Sticky action buttons that appear when scrolling */ ";
}<StickyAction> <div className="p - 2 flex gap - 2" > <Button > <Handshake className="mr - 2 h - 4 w - 4" /> Hire Now </Button> <Button > <MessageSquare className="mr - 2 h - 4 w - 4" /> Message </Button> </div> </StickyAction> {
  /* Request to Hire Modal */;
}<HireRequestModal talent= {
  profile;
}is_open= {
  isHireModalOpen;
}on_close= {
  () => setIsHireModalOpen (false);
}user_details= {
  user_profile;
}/> {
  /* Message Talent Modal */;
}<MessageTalentModal talent= {
  profile;
}is_open= {
  isMessageModalOpen;
}on_close= {
  () => setIsMessageModalOpen (false);
}/> </div> </>);
}'"      <div className="min - h-screen bg - zion - blue pb - 12">;
      <TalentProfile;
        profile = {profile, }
        onRequestHire = {handleRequestHire, }
        onMessageTalent = {handleMessageTalent, }
      />;
      <BackToDirectoryButton />;
      {/* Sticky action buttons that appear when scrolling */}
      <StickyAction>;
        <div className="p - 2 flex gap - 2">;
          <Button;
            size="sm";
            className="bg - zion - purple text - white hover:bg - zion - purple - dark";
            on_click = {handleRequestHire, }
          >;
            <Handshake className="mr - 2 h - 4 w - 4" />;
            Hire Now;
          </Button>;
          <Button;
            size="sm";
            variant="outline";
            className="border - zion - purple text - zion - purple hover:bg - zion - purple / 10";
            on_click = {handleMessageTalent, }
          >;
            <MessageSquare className="mr - 2 h - 4 w - 4" />;

            Message;
          </Button>;
        </div>;
      </StickyAction>;


      <HireRequestModal 
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        talent = {profile,}
        isOpen = {isHireModalOpen,}
        onClose = {(,) => setIsHireModalOpen(false),}
        userDetails = {userProfile,}
<<<<<<< HEAD
<<<<<<< HEAD
      />
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      />;


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Message Talent Modal */}
      <MessageTalentModal
        talent = {profile,}
        isOpen = {isMessageModalOpen,}

        onClose = {() => setIsMessageModalOpen(false),}      />;

;
<<<<<<< HEAD

<<<<<<< HEAD
      
;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      
      {/* Request to Hire Modal */}
      <HireRequestModal;
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        userDetails={userProfile}
      />;
      {/* Message Talent Modal */}
      <MessageTalentModal;
        talent={profile}
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
      />;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>;
    </>;
  );
}


      {/* Request to Hire Modal */}
      <HireRequestModal;
        talent = {profile, }
        is_open = {isHireModalOpen, }
        on_close = {(, ) => setIsHireModalOpen (false), }
        user_details = {user_profile, }
      />;
      {/* Message Talent Modal */}
      <MessageTalentModal;
        talent = {profile, }
        is_open = {isMessageModalOpen, }
        on_close = {() => setIsMessageModalOpen (false), }      />;
    </div>;
    </>);
}
<<<<<<< HEAD
;
=======
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
