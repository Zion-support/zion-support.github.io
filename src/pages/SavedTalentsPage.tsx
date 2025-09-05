<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from "react",
import { SEO } from "@/components/SEO",
import { TalentCard } from "@/components/talent/TalentCard",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { toast } from "@/components/ui/use-toast",
import { useRouter } from 'next/router',
import { logErrorToProduction } from '@/utils/productionLogger',
import { EmptyState } from "@/components/ui/empty-state",
=======
import { useState, useEffect } from &quot;react&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { TalentCard } from &quot;@/components/talent/TalentCard&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { supabase } from &quot;@/integrations/supabase/client&quot;;
import { TalentProfile } from &quot;@/types/talent&quot;;
import { toast } from &quot;@/components/ui/use-toast&quot;;
import { useRouter } from 'next/router';
import { logErrorToProduction } from '@/utils/productionLogger';
import { EmptyState } from &quot;@/components/ui/empty-state&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
import { Heart } from 'lucide-react'
import { logInfo, logWarn } from '@/utils/productionLogger',

export default function SavedTalentsPage() {

  const { user } = useAuth(),
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const router = useRouter(),
  // Using router.asPath instead of useLocation

  useEffect(() => {
    if (!user) {
      router.push(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`)
=======

export default function SavedTalentsPage() {_const { user} = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const _router = useRouter();
  // Using router.asPath instead of useLocation

  useEffect__(() => {_if (!user) {
      router.push(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, [user, router]),

<<<<<<< HEAD
  useEffect(() => {
    const fetchSavedTalents = async () => {
      setIsLoading(true),
      try {
        if (!user) {
<<<<<<< HEAD
          logWarn("User not authenticated."),
          return
=======
          logWarn(&quot;User not authenticated.&quot;);
          return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }

        const { data, error } = await supabase
          .from(&quot;saved_talents&quot;)
=======
  useEffect__(() => {_const _fetchSavedTalents = async () => {
      setIsLoading(true);
      try {
        if (!user) {
          logWarn("User not authenticated.");
          return;}

        const {_data, _error} = await supabase
          .from("saved_talents")
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          .select(
            `
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
          `
          )
<<<<<<< HEAD
          .eq("user_id", user.id),
=======
          .eq(&quot;user_id&quot;, user.id);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
        if (error) {
          throw error
        }

        if (data) {
          // Extract talent profiles and convert to TalentProfile type
          const talentProfiles = data.map(
            (item: any) => item.talent_profile as unknown as TalentProfile
          ),
          setSavedTalents(talentProfiles)
        }
      } catch (error) {
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching saved talents' }),
        toast({
<<<<<<< HEAD
          title: "Error",
          description: "Failed to load saved talents. Please try again later.",
          variant: "destructive"})
=======
          title: &quot;Error&quot;,
          description: &quot;Failed to load saved talents. Please try again later.&quot;,
          variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } finally {
        setIsLoading(false)
      }
    },
=======
        if (error) {_throw error;}

        if (data) {_// Extract talent profiles and convert to TalentProfile type
          const _talentProfiles = data.map(_(item: unknown) => item.talent_profile as unknown as TalentProfile
          );
          setSavedTalents(talentProfiles);}
      } catch (error) {_logErrorToProduction(error instanceof Error ? error.message : String(error), _error instanceof Error ? error : undefined, _{ message: 'Error fetching saved talents'});
        toast({_title: "Error", _description: "Failed to load saved talents. Please try again later.", _variant: "destructive"});
      } finally {_setIsLoading(false);}
    };
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    fetchSavedTalents()
  }, [user]),

<<<<<<< HEAD
  const handleViewProfile = (talentId: string) => {
    router.push(`/talent/${talentId}`)
  },

  const handleRequestHire = (talent: TalentProfile) => {
    logInfo('Request to hire:', { data: talent }),
    toast({
<<<<<<< HEAD
      title: "Hire Request Sent",
      description: `A hire request has been sent to ${talent.full_name}.`})
  },
=======
      title: &quot;Hire Request Sent&quot;,
      description: `A hire request has been sent to ${talent.full_name}.`});
=======
  const _handleViewProfile = (_talentId: string) => {_router.push(`/talent/${talentId}`);
  };

  const _handleRequestHire = (_talent: TalentProfile) => {_logInfo('Request to hire:', _{ data: talent});
    toast({_title: "Hire Request Sent", _description: `A hire request has been sent to ${talent.full_name}.`});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  const _handleToggleSave = async (_talentId: string, _isCurrentlySaved: boolean) => {_try {
      if (!user) {
<<<<<<< HEAD
<<<<<<< HEAD
        logWarn("User not authenticated."),
        return
=======
        logWarn(&quot;User not authenticated.&quot;);
        return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      }
=======
        logWarn("User not authenticated.");
        return;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
      if (isCurrentlySaved) {_// Remove from saved talents
        const { error} = await supabase
          .from('saved_talents')
          .delete()
          .eq('user_id', user.id)
          .eq('talent_id', talentId),
  
<<<<<<< HEAD
        if (error) {
          throw error
        }
  
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        ),
        toast({
<<<<<<< HEAD
          title: "Talent Removed",
          description: "Talent removed from saved list."})
=======
          title: &quot;Talent Removed&quot;,
          description: &quot;Talent removed from saved list.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      } else {
        // Add to saved talents
        const { error } = await supabase
          .from('saved_talents')
          .insert([{ user_id: user.id, talent_id: talentId }]),
  
        if (error) {
          throw error
        }
=======
        if (error) {_throw error;}
  
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        );
        toast({_title: "Talent Removed", _description: "Talent removed from saved list."});
      } else {_// Add to saved talents
        const { error} = await supabase
          .from('saved_talents')
          .insert([{_user_id: user.id, _talent_id: talentId}]);
  
        if (error) {_throw error;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  
        // Fetch the updated talent profile and add it to the list
        const {_data: talentData, _error: talentError} = await supabase
          .from('talent_profiles')
          .select('*')
          .eq('id', talentId)
          .single(),
  
<<<<<<< HEAD
        if (talentError) {
          logErrorToProduction(talentError instanceof Error ? talentError.message : String(talentError), talentError instanceof Error ? talentError : undefined, { message: 'Error fetching talent profile' }),
          toast({
<<<<<<< HEAD
            title: "Error",
            description: "Failed to update saved talents. Please try again later.",
            variant: "destructive"}),
          return
=======
            title: &quot;Error&quot;,
            description: &quot;Failed to update saved talents. Please try again later.&quot;,
            variant: &quot;destructive&quot;});
=======
        if (talentError) {_logErrorToProduction(talentError instanceof Error ? talentError.message : String(talentError), _talentError instanceof Error ? talentError : undefined, _{ message: 'Error fetching talent profile'});
          toast({_title: "Error", _description: "Failed to update saved talents. Please try again later.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          return;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
  
<<<<<<< HEAD
        if (talentData) {
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]),
          toast({
<<<<<<< HEAD
            title: "Talent Saved",
            description: "Talent saved to your list."})
=======
            title: &quot;Talent Saved&quot;,
            description: &quot;Talent saved to your list.&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        }
      }
    } catch (error) {
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error toggling saved talent' }),
      toast({
<<<<<<< HEAD
        title: "Error",
        description: "Failed to update saved talents. Please try again later.",
        variant: "destructive"})
=======
        title: &quot;Error&quot;,
        description: &quot;Failed to update saved talents. Please try again later.&quot;,
        variant: &quot;destructive&quot;});
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
        if (talentData) {_setSavedTalents(prevTalents => [...prevTalents, _talentData as unknown as TalentProfile]);
          toast({
            title: "Talent Saved", _description: "Talent saved to your list."});
        }
      }
    } catch (error) {_logErrorToProduction(error instanceof Error ? error.message : String(error), _error instanceof Error ? error : undefined, _{ message: 'Error toggling saved talent'});
      toast({_title: "Error", _description: "Failed to update saved talents. Please try again later.", _variant: "destructive"});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  },

  return (
    <>
      <SEO
        title=&quot;Saved Talents | Zion AI Marketplace&quot;
        description=&quot;View and manage your saved talents in the Zion AI Marketplace&quot;
      />
      <div className=&quot;container mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-3xl font-bold mb-4&quot;>Saved Talents</h1>
        <p className=&quot;text-muted-foreground&quot;>
          Here are the talents you've saved for future reference.
        </p>
        
<<<<<<< HEAD
        {isLoading ? (
          <div className=&quot;text-center py-8&quot;>Loading saved talents...</div>
=======
        {_isLoading ? (
          <div className="text-center py-8">Loading saved talents...</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        ) : savedTalents.length === 0 ? (
          <div className=&quot;py-8&quot;>
            <EmptyState
<<<<<<< HEAD
              icon={<Heart className=&quot;h-8 w-8&quot; />}
              title=&quot;No Saved Talents&quot;
              description=&quot;You haven't saved any talents yet.&quot;
              action={{ text: 'Browse Talent', href: '/talent' }}
              className=&quot;border-none bg-transparent text-center&quot;
            />
          </div>
        ) : (
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8&quot;>
            {savedTalents.map((talent) => (
=======
              icon={<Heart className="h-8 w-8" />}
              title="No Saved Talents"
              description="You haven't saved any talents yet."
              action={_{ text: 'Browse Talent', _href: '/talent'}}
              className="border-none bg-transparent text-center"
            />
          </div>
        ) : (_<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {_savedTalents.map((talent) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              <TalentCard
                key={talent.id}
                talent={_talent}
                onViewProfile={_handleViewProfile}
                onRequestHire={_handleRequestHire}
                isAuthenticated={_!!user}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
