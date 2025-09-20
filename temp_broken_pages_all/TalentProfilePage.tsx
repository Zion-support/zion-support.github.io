import React { useState useEffect } from "react";
import { useRouter } from "next/router";
import { TalentProfile } from "@/components/profile/TalentProfile";,
import { ProfileLoadingState } from "@/components/profile/ProfileLoadingState";,
import { ProfileErrorState } from "@/components/profile/ProfileErrorState";,
import { BackToDirectoryButton } from "@/components/profile/BackToDirectoryButton";,
import { useTalentProfile } from "@/hooks/useTalentProfile";,
import { HireRequestModal } from "@/components/profile/hire-request";,
import { useAuthStatus } from "@/hooks/talent";,
import { MessageTalentModal } from "@/components/messaging/MessageTalentModal";,
import { StickyAction } from "@/components/ui/sticky-action";,
import { Handshake, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";,
import { useAuth } from "@/hooks/useAuth";,
import { UserProfile } from "@/types/auth";,
import { toast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";

export default function TalentProfilePage() {
  return (
    <>
      <SEO 
        title="TalentProfilePage - Zion Tech Group"
        description="Page description"
        keywords="keywords"
      />
      <div className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">TalentProfilePage</h1>
            <p className="text-zion-slate-light text-lg">Coming soon...</p>
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
}
const handleMessageTalent = () => {if (!isAuthenticated) {
  toast ({
  return}setIsMessageModalOpen (true)
}
return (<> <SEO title= {profile.full name}description= {'
  profile.bio |'Talent profile'
}ogImage= {profile.profile picture url}/> <div className="min-h-screen bg-zion-blue pb-12" > <TalentProfile profile= {profile}onRequestHire= {handleRequestHire}onMessageTalent= {handleMessageTalent}/> <BackToDirectoryButton /> {
  /* Sticky action buttons that appear when scrolling */ "
}<StickyAction> <div className="p-2 flex gap-2" > <Button > <Handshake className="mr-2 h-4 w-4" /> Hire Now </Button> <Button > <MessageSquare className="mr-2 h-4 w-4" /> Message </Button> </div> </StickyAction> {
  /* Request to Hire Modal */
}<HireRequestModal talent= {profile}isOpen= {isHireModalOpen}onClose= {
  () => setIsHireModalOpen (false)
}userDetails= {userProfile}/> {
  /* Message Talent Modal */
}<MessageTalentModal talent= {profile}isOpen= {isMessageModalOpen}onClose= {
  () => setIsMessageModalOpen (false)
}/> </div> </>)
}'"      <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile
profile = {profile}
        onRequestHire = {handleRequestHire}
        onMessageTalent = {handleMessageTalent}
      />
      <BackToDirectoryButton />
      {/* Sticky action buttons that appear when scrolling */}
      <StickyAction>
        <div className="p-2 flex gap-2">
          <Button
size="sm"
            className="bg-zion-purple text-white hover:bg-zion-purple-dark"
            onClick = {handleRequestHire}
          >
            <Handshake className="mr-2 h-4 w-4" />
            Hire Now
          </Button>
          <Button
size="sm"
            variant="outline"
            className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
            onClick = {handleMessageTalent}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Message
          </Button>
        </div>
      </StickyAction>
      {/* Request to Hire Modal */}
      <HireRequestModal
talent = {profile}
        isOpen = {isHireModalOpen}
        onClose = {(,) => setIsHireModalOpen(false)}
        userDetails = {userProfile}
      />
      {/* Message Talent Modal */}
      <MessageTalentModal
talent = {profile}
        isOpen = {isMessageModalOpen}
        onClose = {() => setIsMessageModalOpen(false)}      />
    </div>
</>;
  );
};
import React from 'react';

export default function TalentProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">TalentProfilePage</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}
