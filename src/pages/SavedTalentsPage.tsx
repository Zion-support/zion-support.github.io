
import { useState, useEffect } from "react",
import { SEO } from "@/components/SEO",
import { TalentCard } from "@/components/talent/TalentCard",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",

  // Using router.asPath instead of useLocation

  useEffect(() => {
    if (!user) {
      router.push(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`)
    }

  }, [user, router]),

  useEffect(() => {
    const fetchSavedTalents = async () => {
      setIsLoading(true),
      try {
        if (!user) {
          logWarn("User not authenticated."),

          return

        }
        const { data, error } = await supabase
          .from("saved_talents")
          .select(
            `
            talent_profile (
              id
              user_id
              full_name
              professional_title
              profile_picture_url
              hourly_rate
              bio
              years_experience
              key_projects
              skills
              location
              availability
              is_verified
            )
          `
          )

  const handleViewProfile = (talentId: string) => {;
    router.push(`/talent/${talentId}`);
  };
  const handleRequestHire = (talent: TalentProfile) => {;
    logInfo('Request to hire:', { data: talent });    toast({
      title: 'Hire Request Sent',
      description: `A hire request has been sent to ${talent.full_name}.`,
    })
  }
  const handleToggleSave = async (
    talentId: string,
    isCurrentlySaved: boolean
  ) => {    try {
      if (!user) {
        logWarn('User not authenticated.')
        return;
      }

=======

;
      if (isCurrentlySaved) {;

        // Remove from saved talents;
        const { error } = await supabase;
          .from ('saved_talents');
          .delete ();
          .eq ('user_id', user.id);
          .eq ('talent_id', talent_id);
        // Check condition
if ( {) {
  $2
}
          throw error;
        }

  
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        ),
        toast({
          title: "Talent Removed",
          description: "Talent removed from saved list."})


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      } else {
        // Add to saved talents
        const { error } = await supabase
          .from('saved_talents')

        if (error) {
          throw error
        }

        // Fetch the updated talent profile and add it to the list
        const { data: talentData, error: talentError } = await supabase
          .from('talent_profiles')
          .select('*')
          .eq('id', talentId)

        }

        if (talentData) {

          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]),
          toast({
            title: "Talent Saved",
            description: "Talent saved to your list."})
        }
      }
    } catch (error) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error toggling saved talent' }),
      toast({
        title: "Error",
        description: "Failed to update saved talents. Please try again later.",
        variant: "destructive"})
    }
  },

  return (
    <>
      <SEO
        title="Saved Talents | Zion AI Marketplace"
        description="View and manage your saved talents in the Zion AI Marketplace"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>
        <p className="text-muted-foreground">
          Here are the talents you've saved for future reference.
        </p>

        {isLoading ? (
          <div className="text-center py-8">Loading saved talents...</div>
        ) : savedTalents.length === 0 ? (
          <div className="py-8">
            <EmptyState

              action={{ text: 'Browse Talent', href: '/talent' }}
              className="border-none bg-transparent text-center"
            />
          </div>
        ) : (

            ))}
          </div>
        )}
<<<<<<< HEAD
