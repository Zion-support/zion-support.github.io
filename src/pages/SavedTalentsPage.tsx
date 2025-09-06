<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import { useState, useEffect } from "react",
import { SEO } from "@/components/SEO",
import { TalentCard } from "@/components/talent/TalentCard",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
<<<<<<< HEAD
import { toast } from "@/components/ui/use-toast";
import { useRouter  } from 'next/router';
import { logErrorToProduction  } from '@/utils/productionLogger';
import { EmptyState } from "@/components/ui/empty-state";
import { Heart } from 'lucide-react'
import { logInfo, logWarn } from '@/utils/productionLogger';
=======
import { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import { TalentCard } from '@/components/talent/TalentCard';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { TalentProfile } from '@/types/talent';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/router';
import { logErrorToProduction } from '@/utils/productionLogger';
import { EmptyState } from '@/components/ui/empty-state';
import { Heart } from 'lucide-react';
import { logInfo, logWarn } from '@/utils/productionLogger';
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function SavedTalentsPage() {

  const { user } = useAuth()
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  // Using router.asPath instead of useLocation
  useEffect((,) => {
    if (!user) {
      router.push(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`)
    }
  }, [user, router])
  useEffect((,) => {
    const fetchSavedTalents = async () => {
      setIsLoading(true)
      try {
        if (!user) {
          logWarn('User not authenticated.')
=======
import { toast } from "@/components/ui/use-toast",
import { useRouter } from 'next/router',
import { logErrorToProduction } from '@/utils/productionLogger',
import { EmptyState } from "@/components/ui/empty-state",
import { Heart } from 'lucide-react'
import { logInfo, logWarn } from '@/utils/productionLogger',

export default function SavedTalentsPage() {

  const { user } = useAuth(),
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true),
  const router = useRouter(),
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  // Using router.asPath instead of useLocation

  useEffect(() => {
    if (!user) {
      router.push(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`)
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  }, [user, router])
  useEffect((,) => {
    const fetchSavedTalents = async () => {
      setIsLoading(true)
      try {
        if (!user) {
          logWarn('User not authenticated.')
          return;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }, [user, router]),

  useEffect(() => {
    const fetchSavedTalents = async () => {
      setIsLoading(true),
      try {
        if (!user) {
          logWarn("User not authenticated."),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          return
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        }
<<<<<<< HEAD
        const { data, error } = await supabase
<<<<<<< HEAD
=======
}

const { data, error } = await supabase
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          .from('saved_talents')
=======
          .from("saved_talents")
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
<<<<<<< HEAD
          .eq('user_id', user.id)
        if (error) {
          throw error
        }
        if (data) {
          // Extract talent profiles and convert to TalentProfile type
          const talentProfiles = data.map(
            (item: any) => item.talent_profile as unknown as TalentProfile
          )
          setSavedTalents(talentProfiles) }
      } catch (error) {
        logErrorToProduction(
          error instanceof Error ? error.message : String(error)
          error instanceof Error ? error : undefined
          { message: 'Error fetching saved talents' }
        )
        toast({
          title: 'Error'
          description: 'Failed to load saved talents. Please try again later.'
          variant: 'destructive'
        })
      } finally {
        setIsLoading(false)
      }
    }
    fetchSavedTalents()
  }, [user])
<<<<<<< HEAD
  const handleViewProfile = (talentId: string) => {
    router.push(`/talent/${talentId}`)
  }
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          .eq("user_id", user.id),

        if (error) {
          throw error
import { useState, useEffect } from "react",;
import { SEO } from "@/components/SEO",;
import { TalentCard } from "@/components/talent/TalentCard",;
import { useAuth } from "@/hooks/useAuth",;
import { supabase } from "@/integrations/supabase/client",;
import { TalentProfile } from "@/types/talent",;
import { toast } from "@/components/ui/use-toast",;
import { useRouter } from 'next/router',;
import { logErrorToProduction } from '@/utils/productionLogger',;
import { EmptyState } from "@/components/ui/empty-state",;
import { Heart } from 'lucide-react';
import { logInfo, logWarn } from '@/utils/productionLogger',;
export default function SavedTalentsPage() {;
  const { user } = useAuth(),;
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),;
  const [isLoading, setIsLoading] = useState(true),;
  const router = useRouter(),;
  // Using router.asPath instead of useLocation;
  useEffect(() => {;
    if (!user) {;
      router.push(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`);
    }
  }, [user, router]),;
  useEffect(() => {;
    const fetchSavedTalents = async () => {;
      setIsLoading(true),;
      try {;
        if (!user) {;
          logWarn("User not authenticated."),;
          return;
        }
;
        const { data, error } = await supabase;
          .from("saved_talents");
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
          .eq("user_id", user.id),;
        if (error) {;
          throw error;
        }
;
        if (data) {;
          // Extract talent profiles and convert to TalentProfile type;
          const talentProfiles = data.map(;
            (item: any) => item.talent_profile as unknown as TalentProfile;
          ),;
          setSavedTalents(talentProfiles);
        }
      } catch (error) {
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching saved talents' }),
        toast({
          title: "Error",
          description: "Failed to load saved talents. Please try again later.",
          variant: "destructive"})
      } finally {
        setIsLoading(false)
      }
    },

    fetchSavedTalents()
  }, [user]),

  const handleViewProfile = (talentId: string) => {
    router.push(`/talent/${talentId}`)
  },

  const handleRequestHire = (talent: TalentProfile) => {
    logInfo('Request to hire:', { data: talent }),
    toast({
      title: "Hire Request Sent",
      description: `A hire request has been sent to ${talent.full_name}.`})
  },

  const handleToggleSave = async (talentId: string, isCurrentlySaved: boolean) => {
    try {
      if (!user) {
        logWarn("User not authenticated."),
        return
      } catch (error) {;
        logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching saved talents' }),;
        toast({;
          title: "Error",;
          description: "Failed to load saved talents. Please try again later.",;
          variant: "destructive"});
      } finally {;
        setIsLoading(false);
      }
    },;
    fetchSavedTalents();
  }, [user]),;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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
<<<<<<< HEAD

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
          title: 'Talent Removed',
          description: 'Talent removed from saved list.',
        })
=======
;
      if (isCurrentlySaved) {;
        // Remove from saved talents;
        const { error } = await supabase;
          .from('saved_talents');
          .delete();
          .eq('user_id', user.id);
          .eq('talent_id', talentId),;
        if (error) {;
          throw error;
        }
  
        setSavedTalents(prevTalents =>
          prevTalents.filter(talent => talent.id !== talentId)
        ),
        toast({
          title: "Talent Removed",
          description: "Talent removed from saved list."})
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      } else {
        // Add to saved talents
        const { error } = await supabase
          .from('saved_talents')
<<<<<<< HEAD
          .insert([{ user_id: user.id, talent_id: talentId }])
<<<<<<< HEAD
        if (error) {
          throw error
        }
=======
          .insert([{ user_id: user.id, talent_id: talentId }]),
  
=======
=======
          .insert([{ user_id: user.id, talent_id: talentId }]),
  
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        if (error) {
          throw error
        }
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        // Fetch the updated talent profile and add it to the list
        const { data: talentData, error: talentError } = await supabase
          .from('talent_profiles')
          .select('*')
          .eq('id', talentId)
<<<<<<< HEAD
          .single()
        if (talentError) {
          logErrorToProduction(
            talentError instanceof Error
              ? talentError.message
              : String(talentError)
            talentError instanceof Error ? talentError : undefined
            { message: 'Error fetching talent profile' }
          )
          toast({
            title: 'Error'
            description:
              'Failed to update saved talents. Please try again later.'
            variant: 'destructive'
          })
<<<<<<< HEAD
          return
        }
        if (talentData) {
          setSavedTalents(prevTalents => [
            ...prevTalents
            talentData as unknown as TalentProfile
          ])
          toast({
            title: 'Talent Saved'
            description: 'Talent saved to your list.'
          })
        }
      }
    } catch (error) {
      logErrorToProduction(
        error instanceof Error ? error.message : String(error)
        error instanceof Error ? error : undefined
        { message: 'Error toggling saved talent' }
      )
      toast({
        title: 'Error'
        description: 'Failed to update saved talents. Please try again later.'
        variant: 'destructive'
      })
    }
  }
=======
          return;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          .single(),
  
        if (talentError) {
          logErrorToProduction(talentError instanceof Error ? talentError.message : String(talentError), talentError instanceof Error ? talentError : undefined, { message: 'Error fetching talent profile' }),
          toast({
            title: "Error",
            description: "Failed to update saved talents. Please try again later.",
            variant: "destructive"}),
          return
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        }
  
        if (talentData) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {isLoading ? (
          <div className="text-center py-8">Loading saved talents...</div>
        ) : savedTalents.length === 0 ? (
          <div className="py-8">
            <EmptyState
<<<<<<< HEAD
              icon={<Heart className='h-8 w-8' />}
              title='No Saved Talents'              description="You haven't saved any talents yet."
=======
              icon={<Heart className="h-8 w-8" />}
              title="No Saved Talents"
              description="You haven't saved any talents yet."
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              action={{ text: 'Browse Talent', href: '/talent' }}
              className="border-none bg-transparent text-center"
            />
          </div>
        ) : (
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {savedTalents.map(talent => (              <TalentCard
                key = {talent.id,}
                talent = {talent,}
                onViewProfile = {handleViewProfile,}
                onRequestHire = {handleRequestHire,}
                isAuthenticated = {!!user,}
              />
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {savedTalents.map((talent) => (
              <TalentCard
;
        setSavedTalents(prevTalents =>;
          prevTalents.filter(talent => talent.id !== talentId);
        ),;
        toast({;
          title: "Talent Removed",;
          description: "Talent removed from saved list."});
      } else {;
        // Add to saved talents;
        const { error } = await supabase;
          .from('saved_talents');
          .insert([{ user_id: user.id, talent_id: talentId }]),;
        if (error) {;
          throw error;
        }
;
        // Fetch the updated talent profile and add it to the list;
        const { data: talentData, error: talentError } = await supabase;
          .from('talent_profiles');
          .select('*');
          .eq('id', talentId);
          .single(),;
        if (talentError) {;
          logErrorToProduction(talentError instanceof Error ? talentError.message : String(talentError), talentError instanceof Error ? talentError : undefined, { message: 'Error fetching talent profile' }),;
          toast({;
            title: "Error",;
            description: "Failed to update saved talents. Please try again later.",;
            variant: "destructive"}),;
          return;
        }
;
        if (talentData) {;
          setSavedTalents(prevTalents => [...prevTalents, talentData as unknown as TalentProfile]),;
          toast({;
            title: "Talent Saved",;
            description: "Talent saved to your list."});
        }
      }
    } catch (error) {;
      logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error toggling saved talent' }),;
      toast({;
        title: "Error",;
        description: "Failed to update saved talents. Please try again later.";
        variant: "destructive"});
    }
  };
  return (;
    <>;
      <SEO;
        title="Saved Talents | Zion AI Marketplace";
        description="View and manage your saved talents in the Zion AI Marketplace";
      />;
      <div className="container mx-auto px-4 py-8">;
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>;
        <p className="text-muted-foreground">;
          Here are the talents you've saved for future reference.;
        </p>;
        {isLoading ? (;
          <div className="text-center py-8">Loading saved talents...</div>;
        ) : savedTalents.length === 0 ? (;
          <div className="py-8">;
            <EmptyState;
              icon={<Heart className="h-8 w-8" />}
              title="No Saved Talents";
              description="You haven't saved any talents yet.";
              action={{ text: 'Browse Talent', href: '/talent' }}
              className="border-none bg-transparent text-center";
            />;
          </div>;
        ) : (;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">;
            {savedTalents.map((talent) => (;
              <TalentCard;
                key={talent.id}
                talent={talent}
                onViewProfile={handleViewProfile}
                onRequestHire={handleRequestHire}
                isAuthenticated={!!user}
              />;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            ))}
          </div>
        )}
<<<<<<< HEAD
      </div>
    </>
<<<<<<< HEAD
  )
}, [user, router])
}const {
  data, error
}= await supabase .from ("saved talents") user id
full name
professional title
profile picture url
hourly rate
bio
years experience
key projects
skills
location
availability
is verified) `)
}finally {
  setIsLoading (false)
}
}, [user])
}
  try {
  if (!user) {
}//Remove from saved talents const {
  error '
}= await supabase .from ('saved talents') .delete () .eq ('user id', user.id) .eq ('talent id', talentId)
}else {
  //Add to saved talents const {
  error '
}= await supabase .from ('saved talents') .insert ([ {
  user id: user.id, talent id: talentId
}])
if (error) {
  throw error
}data: talentData, error: talentError '
}= await supabase .from ('talent profiles') .select ('*') .eq ('id', talentId) .single ()
return;
}catch (error) {
  logErrorToProduction (error instanceof Error ? error.message : String (error),  error instanceof Error ? error : undefined, {'
  message: 'Error toggling saved talent'
})
toast ({
};'"
return (<> <SEO title="Saved Talents | Zion AI Marketplace" description="View and manage your saved talents in the Zion AI Marketplace" /> <div className="container mx-auto px-4 py-8" > <h1 className="text-3xl font-bold mb-4" >Saved Talents</h1> <p className="text-muted-foreground" > Here are the talents you've saved for future reference. </p>) : savedTalents.length === 0 ? (<div className="py-8" > <EmptyState <TalentCard key= {
  talent.id
}talent= {
  talent
}onViewProfile= {
  handleViewProfile
}onRequestHire= {
  handleRequestHire
}isAuthenticated= {
  !!user
}/>) )
}</div>)
}</div> </>)
}'"}
=======
<<<<<<< HEAD
  );

}, [user, router]);
}const {;
  data, error ;
}= await supabase .from ("saved talents") user id;
full name;
professional title;
profile picture url;
hourly rate;
bio;
years experience;
key projects;
skills;
location;
availability;
is verified) `) ;
}finally {;
  setIsLoading (false) ;

};
}, [user]);
};
  try {;
  if (!user) {;
  ;
}//Remove from saved talents const {;
  error ';
}= await supabase .from ('saved talents') .delete () .eq ('user id', user.id) .eq ('talent id', talentId);
}else {;
  //Add to saved talents const {;
  error ';
}= await supabase .from ('saved talents') .insert ([ {;
  user id: user.id, talent id: talentId ;
}]);
if (error) {;
  throw error ;
}data: talentData, error: talentError ';
}= await supabase .from ('talent profiles') .select ('*') .eq ('id', talentId) .single ();
return;

}catch (error) {;
  logErrorToProduction (error instanceof Error ? error.message : String (error),  error instanceof Error ? error : undefined, {';
  message: 'Error toggling saved talent' ;
});
toast ({;
  ;

};'";
return (<> <SEO title="Saved Talents | Zion AI Marketplace" description="View and manage your saved talents in the Zion AI Marketplace" /> <div className="container mx-auto px-4 py-8" > <h1 className="text-3xl font-bold mb-4" >Saved Talents</h1> <p className="text-muted-foreground" > Here are the talents you've saved for future reference. </p>) : savedTalents.length === 0 ? (<div className="py-8" > <EmptyState <TalentCard key= {;
  talent.id ;
}talent= {;
  talent ;
}onViewProfile= {;
  handleViewProfile ;
}onRequestHire= {;
  handleRequestHire ;
}isAuthenticated= {;
  !!user ;
}/>) ) ;
}</div>) ;
}</div> </>) ;
}'"
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
      </div>;
    </>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
