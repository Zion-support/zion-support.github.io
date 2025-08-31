import { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import { TalentCard } from "@/components/talent/TalentCard";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
export default function SavedTalentsPage() {
    const { user } = useAuth();
    const [savedTalents, setSavedTalents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchSavedTalents = async () => {
            setIsLoading(true);
            try {
                if (!user) {
                    // // // // // // // console.warn("User not authenticated.");
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
                    return;
=======
                    console.warn("User not authenticated.");
                    return}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                const { data, error } = await supabase
                    .from("saved_talents")
                    .select(`
            talent_profile (
              id,
              user_id,
              full_name,
              professional_title,
              profile_picture_url,
              hourly_rate,
              bio,
              years_experience,
              key_projects,
              skills,
              location,
              availability,
              is_verified
            )
          `)
                    .eq("user_id", user.id);
                if (error) {
                    throw error}
                if (data) {
                    // Extract talent profiles and convert to TalentProfile type
                    const talentProfiles = data.map(item => item.talent_profile);
                    setSavedTalents(talentProfiles)}
            }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            catch (error) {
                // // // // // // // console.error("Error fetching saved talents:", error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
                toast({
                    title: "Error",
                    description: "Failed to load saved talents. Please try again later.",
                    variant: "destructive",
                })}
            finally {
                setIsLoading(false)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        };
        fetchSavedTalents()}, [user]);
    const handleViewProfile = (talentId) => {
        router(`/talent/${talentId}`);
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
    const handleRequestHire = (talent) => {
        // // // // // // // console.log("Request to hire:", talent);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
        toast({
            title: "Hire Request Sent",
            description: `A hire request has been sent to ${talent.full_name}.`,
        })};
    const handleToggleSave = async (talentId, isCurrentlySaved) => {
        try {
            if (!user) {
                // // // // // // // console.warn("User not authenticated.");
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
                return;
=======
                console.warn("User not authenticated.");
                return}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            if (isCurrentlySaved) {
                // Remove from saved talents
                const { error } = await supabase
                    .from('saved_talents')
                    .delete()
                    .eq('user_id', user.id)
                    .eq('talent_id', talentId);
                if (error) {
                    throw error}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                setSavedTalents(prevTalents => prevTalents.filter(talent => talent.id !== talentId));
                toast({
                    title: "Talent Removed",
                    description: "Talent removed from saved list.",
                })}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
            else {
                // Add to saved talents
                const { error } = await supabase
                    .from('saved_talents')
                    .insert([{ user_id: user.id, talent_id: talentId }]);
                if (error) {
                    throw error}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                // Fetch the updated talent profile and add it to the list
                const { data: talentData, error: talentError } = await supabase
                    .from('talent_profiles')
                    .select('*')
                    .eq('id', talentId)
                    .single();
                if (talentError) {
                    // // // // // // // console.error("Error fetching talent profile:", talentError);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
                    toast({
                        title: "Error",
                        description: "Failed to update saved talents. Please try again later.",
                        variant: "destructive",
                    });
                    return}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                if (talentData) {
                    setSavedTalents(prevTalents => [...prevTalents, talentData]);
                    toast({
                        title: "Talent Saved",
                        description: "Talent saved to your list.",
                    })}
            }
        }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
        catch (error) {
            // // // // // // // console.error("Error toggling saved talent:", error);
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
            toast({
                title: "Error",
                description: "Failed to update saved talents. Please try again later.",
                variant: "destructive",
            })}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    };
    return (<>
      <SEO title="Saved Talents | Zion AI Marketplace" description="View and manage your saved talents in the Zion AI Marketplace"/>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>
        <p className="text-muted-foreground">
          Here are the talents you've saved for future reference.
        </p>
        {isLoading ? (<div className="text-center py-8">Loading saved talents...</div>) : savedTalents.length === 0 ? (<div className="text-center py-8">No talents saved yet.</div>) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {savedTalents.map((talent) => (<TalentCard key={talent.id} talent={talent} onViewProfile={handleViewProfile} onRequestHire={handleRequestHire} isSaved={true} onToggleSave={handleToggleSave} isAuthenticated={!!user}/>))}
          </div>)}
      </div>
    </>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
