
  // Using router.asPath instead of useLocation;
        const { data, error } = await supabase;
          .from ('saved_talents').select (`;
            talent_profile (}const handleRequestHire = (talent: TalentProfile) =>: any {log_info ('Request to hire:', { data: talent })toast ({useEffect(() => {if (!user) {router.push(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`)}
  }, [user, router]),useEffect(() => {const fetchSavedTalents = async () => {setIsLoading(true),try {if (!user) {logWarn("User not authenticated."),return;
        }
        const { data, error } = await supabase;
          .from("saved_talents").select(`;
            talent_profile (id;
              user_id;
              full_name;
              professional_title;
              profile_picture_url;
              hourly_rate;
              bio;
              years_experience;
              key_projects;
              skills;
              location;
              availability;
              is_verified;
            )`;
          ).eq("user_id", user.id),if (error) {throw error;
import { useState, useEffect } from "react",import { SEO } from "@/components/SEO",import { TalentCard } from "@/components/talent/TalentCard",import { useAuth } from "@/hooks/useAuth",import { supabase } from "@/integrations/supabase/client",import { TalentProfile } from "@/types/talent",import { toast } from "@/components/ui/use-toast",import { useRouter } from 'next/router',import { logErrorToProduction } from '@/utils/productionLogger',import { EmptyState } from "@/components/ui/empty-state",import { Heart  } from 'lucide-react';
import { logInfo, logWarn } from '@/utils/productionLogger',export default function SavedTalentsPage() {const { user } = useAuth(),const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),const [isLoading, setIsLoading] = useState(true),const router = useRouter(),// Using router.asPath instead of useLocation;
  useEffect(() => {if (!user) {router.push(`/auth/login?returnTo=${encodeURIComponent(router.asPath)}`)}
  }, [user, router]),useEffect(() => {const fetchSavedTalents = async () => {setIsLoading(true),try {if (!user) {logWarn("User not authenticated."),return;
        }const { data, error } = await supabase;
          .from("saved_talents").select(`;
            talent_profile (id,user_id,full_name,professional_title,profile_picture_url,hourly_rate,bio,years_experience,key_projects,skills,location,availability,is_verified;
            )`;
          ).eq("user_id", user.id),if (error) {throw error;
        }if (data) {// Extract talent profiles and convert to TalentProfile type;
          const talentProfiles = data.map((item: any) => item.talent_profile as unknown as TalentProfile;
          ),setSavedTalents(talentProfiles)}
      } catch (error) {logErrorToProduction(error instanceof Error ? error.message : String(error), error instanceof Error ? error : undefined, { message: 'Error fetching saved talents' }),toast({title: "Error",description: "Failed to load saved talents. Please try again later.",variant: "destructive"})} finally {setIsLoading(false)}
    },fetchSavedTalents()}, [user]),const handleViewProfile = (talentId: string) => {router.push(`/talent/${talentId}`)},const handleRequestHire = (talent: TalentProfile) => {const handleViewProfile = (talentId: string) => {router.push(`/talent/${talentId}`)}const handleRequestHire = (talent: TalentProfile) => {logInfo('Request to hire:', { data: talent })toast({title: 'Hire Request Sent',description: `A hire request has been sent to ${talent.full_name}.`,})}
  const handleToggleSave = async (talentId: string,isCurrentlySaved: boolean;
  ) => {    try {if (!user) {logWarn('User not authenticated.')return;
      }
        const { error } = await supabase;
          .from ('saved_talents').insert ([{ user_id: user.id, talent_id: talent_id }])// Check condition;
if ( {) {$2;
}
          throw error;
        }
      } else {// Add to saved talents;
        const { error } = await supabase;
          .from('saved_talents').insert([{ user_id: user.id, talent_id: talentId }]),.insert([{ user_id: user.id, talent_id: talentId }]),if (error) {throw error;
        }// Fetch the updated talent profile and add it to the list;
        const { data: talentData, error: talentError } = await supabase;
          .from('talent_profiles').select('*').eq('id', talentId).single(),if (talentError) {logErrorToProduction(talentError instanceof Error ? talentError.message : String(talentError), talentError instanceof Error ? talentError : undefined, { message: 'Error fetching talent profile' }),toast({title: "Error",description: "Failed to update saved talents. Please try again later.",variant: "destructive"}),return;
        }if (talentData) {import { useState, useEffect  } from 'react';
import { SEO  } from '@/components/SEO';
import { TalentCard  } from '@/components/talent/TalentCard';
import { useAuth  } from '@/hooks/useAuth';
import { supabase  } from '@/integrations/supabase/client';
import { TalentProfile  } from '@/types/talent';
import { toast  } from '@/components/ui/use-toast';
import { useRouter  } from 'next/router';
import { logErrorToProduction  } from '@/utils/productionLogger';
import { EmptyState  } from '@/components/ui/empty-state';
import { logInfo, logWarn  } from '@/utils/productionLogger';
export default function SavedTalentsPage() {const { user } = useAuth()const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),const [isLoading, setIsLoading] = useState(true)const router  = null;return (<>;
      <SEO;
        title="Saved Talents | Zion AI Marketplace";
        description="View and manage your saved talents in the Zion AI Marketplace";
      />;
      <div className="container mx-auto px-4 py-8">;
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>;
        <p className="text-muted-foreground">;
          Here are the talents you've saved for future reference.;
        </p>;
        {isLoading ? (<div className="text-center py-8">Loading saved talents...</div>;
        ) : savedTalents.length === 0 ? (<div className="py-8">;
            <EmptyState;
              action={{ text: 'Browse Talent', href: '/talent' }}
              className="border-none bg-transparent text-center";
            />;
          </div>;
        ) : ())}
          </div>;
        )}
      </div>;
    </>;
  )}, [user, router])}const {data, error;)}, [user, router])}const {data, error ;}= await supabase .from ("saved talents") user id;
full name;
professional title;
profile picture url;
hourly rate;
bio;
years experience;
key projects;
skills;
location;
availability;is verified) `)}finally {setIsLoading (false)}
}, [user])}
  try {handleRequestHire;
}is_authenticated= {!!user;
}/>) )}</div>)}</div> </>)}'"}</div>;
    </>;
  )}
            ))}
          </div>;
        )}is verified) `)}finally {setIsLoading (false)}}, [user])}try {if (!user) {}//Remove from saved talents const {error ';
}= await supabase .from ('saved talents') .delete () .eq ('user id', user.id) .eq ('talent id', talentId)}else {//Add to saved talents const {error ';
}= await supabase .from ('saved talents') .insert ([ {user id: user.id, talent id: talentId ;
}])if (error) {throw error ;
}data: talentData, error: talentError ';
}= await supabase .from ('talent profiles') .select ('*') .eq ('id', talentId) .single ()return;}catch (error) {logErrorToProduction (error instanceof Error ? error.message : String (error),  error instanceof Error ? error : undefined, {';
  message: 'Error toggling saved talent' ;
})toast ({;
}'";
return (<> <SEO title="Saved Talents | Zion AI Marketplace" description="View and manage your saved talents in the Zion AI Marketplace" /> <div className="container mx-auto px-4 py-8" > <h1 className="text-3xl font-bold mb-4" >Saved Talents</h1> <p className="text-muted-foreground" > Here are the talents you've saved for future reference. </p>) : savedTalents.length === 0 ? (<div className="py-8" > <EmptyState <TalentCard key= {talent.id ;
}talent= {talent ;
}onViewProfile= {handleViewProfile ;
}onRequestHire= {handleRequestHire ;
}isAuthenticated= {!!user ;
}/>) )}</div>)}</div> </>)}'";