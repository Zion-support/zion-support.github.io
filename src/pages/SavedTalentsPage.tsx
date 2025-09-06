import { useState, useEffect } from 'react'
import { SEO } from '@/components/SEO'
import { TalentCard } from '@/components/talent/TalentCard'
import { useAuth } from '@/hooks/useAuth'
import { supabase } from '@/integrations/supabase/client'
import { TalentProfile } from '@/types/talent'
import { toast } from '@/components/ui/use-toast'
import { useRouter } from 'next/router'
import { logErrorToProduction } from '@/utils/productionLogger'
import { EmptyState } from '@/components/ui/empty-state'
import { Heart } from 'lucide-react'
import { logInfo, logWarn } from '@/utils/productionLogger'
import { EmptyState } from "@/components/ui/empty-state"
export default function SavedTalentsPage() {
  const { user } = useAuth()
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
import { useState, useEffect } from "react",
import { SEO } from "@/components/SEO",
import { TalentCard } from "@/components/talent/TalentCard",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { toast } from "@/components/ui/use-toast";
import { useRouter  } from 'next/router';
import { logErrorToProduction  } from '@/utils/productionLogger';
import { EmptyState } from "@/components/ui/empty-state";
import { Heart } from 'lucide-react'
import { logInfo, logWarn } from '@/utils/productionLogger';
export default function SavedTalentsPage() {

  const { user } = useAuth()
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  // Using router.asPath instead of useLocation
  useEffect((,) => {
    if (!user) {
      router.push(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`)
  const handleRequestHire = (talent: TalentProfile) => {
    logInfo('Request to hire:', { data: talent });    toast({
      title: 'Hire Request Sent'
      description: `A hire request has been sent to ${talent.full_name}.`
    })
  }
  const handleToggleSave = async (
    talentId: string
    isCurrentlySaved: boolean
  ) => {    try {
      if (!user) {
        logWarn('User not authenticated.')
        return
      }
      if (isCurrentlySaved) {
        // Remove from saved talents
        const { error } = await supabase
          .from('saved_talents')
          .delete()
          .eq('user_id', user.id)
          .eq('talent_id', talentId)
        if (error) {
          throw error
        }
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        )
        toast({
          title: 'Talent Removed'
          description: 'Talent removed from saved list.'
        })
          .insert([{ user_id: user.id, talent_id: talentId }]),
  

  }, [user, router]);

  useEffect((,) => {;
    const fetchSavedTalents = async () => {;
      setIsLoading(true);
      try {;
        if (!user) {;
          logWarn('User not authenticated.');
          return;
        }

        const { data, error } = await supabase;
          .from('saved_talents');
          .select(;
            `;
            talent_profile (;
              id,;
              user_id,;
              full_name,;
              professional_title,;
              profile_picture_url,;
              hourly_rate,;
              bio,;
              years_experience,;
              key_projects,;
              skills,;
              location,;
              availability,;
              is_verified;
            );
          `;
          );
          .eq('user_id', user && user.id);

        if (error) {;
          throw error;
        }

        if (data) {;
          // Extract talent profiles and convert to TalentProfile type;
          const talentProfiles = data && data.map(;
            (item: any) => item && item.talent_profile as unknown as TalentProfile;
          );
          setSavedTalents(talentProfiles);        }
      } catch (error) {;
        logErrorToProduction(;
          error instanceof Error ? error && error.message : String(error),;
          error instanceof Error ? error : undefined,;
          { message: 'Error fetching saved talents' }
        );

          return;

          setSavedTalents(prevTalents => [
            ...prevTalents,
            talentData as unknown as TalentProfile,
          ])
          toast({
            title: 'Talent Saved',
            description: 'Talent saved to your list.',
          })
        }
      }
    } catch (error) {
      logErrorToProduction(
        error instanceof Error ? error.message : String(error),
        error instanceof Error ? error : undefined,
        { message: 'Error toggling saved talent' }
      )
      toast({
        title: 'Error',
        description: 'Failed to update saved talents. Please try again later.',
        variant: 'destructive',
      })
    }
  }
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

              icon={<Heart className="h-8 w-8" />}
              title="No Saved Talents"
              description="You haven't saved any talents yet."


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {savedTalents.map((talent) => (
              <TalentCard
;
        setSavedTalents(prevTalents =>;
          prevTalents.filter(talent => talent.id !== talentId);
        ),;
              />;






  handleRequestHire;
}is_authenticated= {
  !!user;
}/>) );
}</div>);
}</div> </>);
}'"}

;

