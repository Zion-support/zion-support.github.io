

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  // Handle loading error gracefully
  useEffect(() => {
    if (error) {
      toast({
        title: 'Error loading profile'
        title: 'Error loading profile',
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
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
=======
    }
  }, [error])
  if (isLoading) {
    return <ProfileLoadingState />
  }
<<<<<<< HEAD
  if (error |!profile) {
    return <ProfileErrorState error={error} />



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

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
        talent = {profile,}
        isOpen = {isHireModalOpen,}
        onClose = {(,) => setIsHireModalOpen(false),}
        userDetails = {userProfile,}

      />;


      {/* Message Talent Modal */}
      <MessageTalentModal
        talent = {profile,}
        isOpen = {isMessageModalOpen,}
<<<<<<< HEAD
        onClose = {() => setIsMessageModalOpen(false),}      />
    </div>
    </>
  )
}
=======
>>>>>>> a59e23947e86217473fca4eca4cd277149ff0168
