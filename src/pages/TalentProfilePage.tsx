<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from "react",
import { useRouter } from 'next/router',
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
import { toast } from "@/hooks/use-toast",
import { SEO } from "@/components/SEO",
=======
import React, { useState, useEffect } from &quot;react&quot;;
import { useRouter } from 'next/router';
import { TalentProfile } from &quot;@/components/profile/TalentProfile&quot;;
import { ProfileLoadingState } from &quot;@/components/profile/ProfileLoadingState&quot;;
import { ProfileErrorState } from &quot;@/components/profile/ProfileErrorState&quot;;
import { BackToDirectoryButton } from &quot;@/components/profile/BackToDirectoryButton&quot;;
import { useTalentProfile } from &quot;@/hooks/useTalentProfile&quot;;
import { HireRequestModal } from &quot;@/components/profile/hire-request&quot;;
import { useAuthStatus } from &quot;@/hooks/talent&quot;;
import { MessageTalentModal } from &quot;@/components/messaging/MessageTalentModal&quot;;
import { StickyAction } from &quot;@/components/ui/sticky-action&quot;;
import { Handshake, MessageSquare } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { UserProfile } from &quot;@/types/auth&quot;;
import { toast } from &quot;@/hooks/use-toast&quot;;
import { SEO } from &quot;@/components/SEO&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function TalentProfilePage() {
  const router = useRouter(),
  // Get id from Next.js router query params
  const { id } = router.query as { id?: string },
  const { profile, isLoading, error } = useTalentProfile(id),
  const [isHireModalOpen, setIsHireModalOpen] = useState(false),
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false),
  const { userDetails } = useAuthStatus(),
  const { isAuthenticated, user } = useAuth(),

  // Create a compatible UserProfile from UserDetails or the authenticated user
  const userProfile: UserProfile = user ? {
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
    id: userDetails?.id || '',
    displayName: userDetails?.name || '',
    email: userDetails?.email || '', // Ensure email is always a string
    userType: null, // Default empty string since userDetails doesn't have this property
    profileComplete: false, // Default value since userDetails doesn't have this property
    created_at: new Date().toISOString(), // Default value since userDetails doesn't have this property
    updated_at: new Date().toISOString(), // Default value since userDetails doesn't have this property
    role: '', // Default empty string since userDetails doesn't have this property
    name: '',
    points: 0
  },
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  // Handle loading error gracefully
  useEffect__(() => {_if (error) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Error loading profile",
        description: "There was a problem loading this talent profile. Please try again.",
        variant: "destructive"})
=======
        title: &quot;Error loading profile&quot;,
        description: &quot;There was a problem loading this talent profile. Please try again.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        title: "Error loading profile", _description: "There was a problem loading this talent profile. Please try again.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, [error]),

<<<<<<< HEAD
  if (isLoading) {
    return <ProfileLoadingState />
  }

  if (error || !profile) {
    return <ProfileErrorState error={error} />
  }

  const handleRequestHire = () => {
    if (!isAuthenticated) {
      toast({
<<<<<<< HEAD
        title: "Authentication required",
        description: "Please sign in to hire this talent.",
        variant: "default"}),
      router.push(`/login?returnTo=${encodeURIComponent(`/talent/${id}`)}`),
      return
=======
        title: &quot;Authentication required&quot;,
        description: &quot;Please sign in to hire this talent.&quot;,
        variant: &quot;default&quot;});
      router.push(`/login?returnTo=${encodeURIComponent(`/talent/${id}`)}`);
=======
  if (isLoading) {_return <ProfileLoadingState />;}

  if (error || !profile) {_return <ProfileErrorState error={error} />;
  }

  const _handleRequestHire = () => {_if (!isAuthenticated) {
      toast({
        title: "Authentication required", _description: "Please sign in to hire this talent.", _variant: "default"});
      router.push(`/login?returnTo=${_encodeURIComponent(`/talent/${id}`)}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    setIsHireModalOpen(true)
  },

  const _handleMessageTalent = () => {_if (!isAuthenticated) {
      toast({
<<<<<<< HEAD
<<<<<<< HEAD
        title: "Authentication required",
        description: "Please sign in to message this talent.",
        variant: "default"}),
      router.push(`/login?returnTo=${encodeURIComponent(`/talent/${id}`)}`),
      return
=======
        title: &quot;Authentication required&quot;,
        description: &quot;Please sign in to message this talent.&quot;,
        variant: &quot;default&quot;});
      router.push(`/login?returnTo=${encodeURIComponent(`/talent/${id}`)}`);
=======
        title: "Authentication required", _description: "Please sign in to message this talent.", _variant: "default"});
      router.push(`/login?returnTo=${_encodeURIComponent(`/talent/${id}`)}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
    setIsMessageModalOpen(true)
  },

  return (_<>
      <SEO
        title={_profile.full_name}
        description={_profile.bio || 'Talent profile'}
        ogImage={_profile.profile_picture_url}
      />
      <div className=&quot;min-h-screen bg-zion-blue pb-12&quot;>
      <TalentProfile
        profile={_profile}
        onRequestHire={_handleRequestHire}
        onMessageTalent={_handleMessageTalent}
      />
      <BackToDirectoryButton />
      
      {_/* Sticky action buttons that appear when scrolling */}
      <StickyAction>
        <div className=&quot;p-2 flex gap-2&quot;>
          <Button 
<<<<<<< HEAD
            size=&quot;sm&quot;
            className=&quot;bg-zion-purple text-white hover:bg-zion-purple-dark&quot;
            onClick={handleRequestHire}
=======
            size="sm"
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
            onClick={_handleRequestHire}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <Handshake className=&quot;mr-2 h-4 w-4&quot; />
            Hire Now
          </Button>
          <Button 
<<<<<<< HEAD
            size=&quot;sm&quot;
            variant=&quot;outline&quot;
            className=&quot;border-zion-purple text-zion-purple hover:bg-zion-purple/10&quot;
            onClick={handleMessageTalent}
=======
            size="sm"
            variant="outline"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            onClick={_handleMessageTalent}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <MessageSquare className=&quot;mr-2 h-4 w-4&quot; />
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
  )
}
