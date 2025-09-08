import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TalentProfile } from "@/components/profile/TalentProfile";
import { ProfileLoadingState } from "@/components/profile/ProfileLoadingState";
import { ProfileErrorState } from "@/components/profile/ProfileErrorState";
import { BackToDirectoryButton } from "@/components/profile/BackToDirectoryButton";
import { HireRequestModal } from "@/components/profile/hire-request";
import { MessageTalentModal } from "@/components/messaging/MessageTalentModal";
import { StickyAction } from "@/components/ui/sticky-action";
import { Handshake, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useAuthStatus } from "@/hooks/talent";
import { useTalentProfile } from "@/hooks/useTalentProfile";
import { toast } from "@/hooks/use-toast";

export default function TalentProfilePage() {
  const { id } = (useParams() as { id?: string });
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { userDetails } = useAuthStatus();
  const { profile, isLoading, error } = useTalentProfile(id);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error loading profile",
        description: "There was a problem loading this talent profile. Please try again.",
        variant: "destructive",
      });
    }
  }, [error]);

  if (isLoading) return <ProfileLoadingState />;
  if (error || !profile) return <ProfileErrorState error={error} />;

  const handleRequestHire = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to hire this talent.",
        variant: "default",
      });
      navigate(`/login`, { state: { from: `/talent/${id}` } });
      return;
    }
    setIsHireModalOpen(true);
  };

  const handleMessageTalent = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to message this talent.",
        variant: "default",
      });
      navigate(`/login`, { state: { from: `/talent/${id}` } });
    } else {
      setIsMessageModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue pb-12">
      <TalentProfile
        profile={profile}
        onRequestHire={handleRequestHire}
        onMessageTalent={handleMessageTalent}
      />
      <BackToDirectoryButton />
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
      <HireRequestModal
        talent={profile}
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        userDetails={userDetails}
      />
      <MessageTalentModal
        talent={profile}
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
      />
    </div>
  );
}

