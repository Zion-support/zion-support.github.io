import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TalentProfile } from "@/components/profile/TalentProfile";
import { ProfileLoadingState } from "@/components/profile/ProfileLoadingState";
import { ProfileErrorState } from "@/components/profile/ProfileErrorState";
import { BackToDirectoryButton } from "@/components/profile/BackToDirectoryButton";
import { useTalentProfile } from "@/hooks/useTalentProfile";
import { HireRequestModal } from "@/components/profile/hire-request";
import { useAuthStatus } from "@/hooks/talent";
import { MessageTalentModal } from "@/components/messaging/MessageTalentModal";
import { StickyAction } from "@/components/ui/sticky-action";
import { Handshake, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { UserProfile } from "@/types/auth";
import { toast } from "@/hooks/use-toast";

export default function TalentProfilePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { profile, isLoading, error } = useTalentProfile(id);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const { userDetails } = useAuthStatus();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "There was a problem loading this talent profile. Please try again.",
        variant: "destructive"
      });
    }
  }, [error]);

  const handleHireTalent = () => {
    if (!isAuthenticated) {
      toast({
        title: "Sign In Required",
        description: "Please sign in to hire this talent.",
        variant: "default"
      });
      return;
    }
    setIsHireModalOpen(true);
  };

  const handleMessageTalent = () => {
    if (!isAuthenticated) {
      toast({
        title: "Sign In Required",
        description: "Please sign in to message this talent.",
        variant: "default"
      });
      return;
    }
    setIsMessageModalOpen(true);
  };

  if (isLoading) {
    return <ProfileLoadingState />;
  }

  if (error || !profile) {
    return <ProfileErrorState />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <div className="container mx-auto px-4 py-8">
        <BackToDirectoryButton />
        
        <div className="max-w-4xl mx-auto">
          <TalentProfile profile={profile} />
        </div>

        <StickyAction>
          <div className="flex gap-4">
            <Button
              onClick={handleHireTalent}
              className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-white"
            >
              <Handshake className="h-4 w-4 mr-2" />
              Hire Talent
            </Button>
            <Button
              onClick={handleMessageTalent}
              variant="outline"
              className="flex-1 border-zion-blue-light text-white hover:bg-zion-blue-light"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
          </div>
        </StickyAction>

        {/* Request to Hire Modal */}
        {isHireModalOpen && (
          <HireRequestModal
            talentId={id}
            talentName={profile.name}
            isOpen={isHireModalOpen}
            onClose={() => setIsHireModalOpen(false)}
          />
        )}

        {/* Message Talent Modal */}
        {isMessageModalOpen && (
          <MessageTalentModal
            talentId={id}
            talentName={profile.name}
            isOpen={isMessageModalOpen}
            onClose={() => setIsMessageModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
}