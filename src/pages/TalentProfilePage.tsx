
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProfileLoadingState } from "@/components/profile/ProfileLoadingState";
import { ProfileErrorState } from "@/components/profile/ProfileErrorState";
import { BackToDirectoryButton } from "@/components/profile/BackToDirectoryButton";
import { StickyAction } from "@/components/ui/sticky-action";
import { Handshake, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTalentProfile } from "@/hooks/useTalentProfile";
import { useAuth } from "@/hooks/useAuth";
import { MessageTalentModal } from "@/components/messaging/MessageTalentModal";
import { HireRequestModal } from "@/components/profile/hire-request";
import { TalentProfile } from "@/components/profile/TalentProfile";
import { useAuthStatus } from "@/hooks/talent";
import { UserProfile } from "@/types/auth";
import { SEO } from "@/components/SEO";
import { toast } from "@/hooks/use-toast";

export default function TalentProfilePage() {
	const { id } = useParams() as { id?: string };
	const navigate = useNavigate();
	const { isAuthenticated, user } = useAuth();
	const { profile, isLoading, error } = useTalentProfile(id);
	const [isHireModalOpen, setIsHireModalOpen] = React.useState(false);
	const [isMessageModalOpen, setIsMessageModalOpen] = React.useState(false);
	const { userDetails } = useAuthStatus();

	const userProfile: UserProfile = user
		? {
			id: user.id || "",
			displayName: user.displayName || "",
			email: user.email || "",
			userType: user.userType || null,
			profileComplete: user.profileComplete || false,
			created_at: user.created_at || new Date().toISOString(),
			updated_at: user.updatedAt || new Date().toISOString(),
			role: user.role || "",
			name: user.name || "",
			points: user.points || 0,
		}
		: {
			id: userDetails?.id || "",
			displayName: userDetails?.name || "",
			email: userDetails?.email || "",
			userType: null,
			profileComplete: false,
			created_at: new Date().toISOString(),
			updated_at: new Date().toISOString(),
			role: "",
			name: "",
			points: 0,
		};

	React.useEffect(() => {
		if (error) {
			toast({
				title: "Error loading profile",
				description: "There was a problem loading this talent profile. Please try again.",
				variant: "destructive",
			});
		}
	}, [error]);

	if (isLoading) {
		return <ProfileLoadingState />;
	}
	if (error || !profile) {
		return <ProfileErrorState error={error} />;
	}

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
			return;
		}
		setIsMessageModalOpen(true);
	};

	return (
		<>
			<SEO title={profile.full_name} description={profile.bio || "Talent profile"} ogImage={profile.profile_picture_url} />
			<div className="min-h-screen bg-zion-blue pb-12">
				<TalentProfile profile={profile} onRequestHire={handleRequestHire} onMessageTalent={handleMessageTalent} />
				<BackToDirectoryButton />
				<StickyAction>
					<div className="p-2 flex gap-2">
						<Button size="sm" className="bg-zion-purple text-white hover:bg-zion-purple-dark" onClick={handleRequestHire}>
							<Handshake className="mr-2 h-4 w-4" />
							Hire Now
						</Button>
						<Button size="sm" variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10" onClick={handleMessageTalent}>
							<MessageSquare className="mr-2 h-4 w-4" />
							Message
						</Button>
					</div>
				</StickyAction>
				<HireRequestModal talent={profile} isOpen={isHireModalOpen} onClose={() => setIsHireModalOpen(false)} userDetails={userProfile} />
				<MessageTalentModal talent={profile} isOpen={isMessageModalOpen} onClose={() => setIsMessageModalOpen(false)} />
			</div>
		</>
	);
}
